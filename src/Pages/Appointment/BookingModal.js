import React from "react";
import { format } from 'date-fns';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

{/* slots?.map(slot => <option>{slot}</option>) */}

const BookingModal = ({date,treatment,setTreatment}) => {
  const {_id,name,slots} = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, 'PP');
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleBooking = (event) =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;
    
    const booking = {
      treatmentId:_id,
      treatmentName:name,
      date:formattedDate,
      slot,
      patientName:user?.displayName,
      patientPhNumber:phone,
      patientEmail:user?.email,
    };
    const url = 'http://localhost:5000/booking';
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-type': 'application/json',
    },
    })
    .then((response) => response.json())
    .then(data => {
      // console.log(data)
      if(data.success){
        toast(`Appointment is set, ${formattedDate} at ${slot}`);
      }else{
        toast.error(`you already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
      };
      setTreatment(null);
    });

  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">❌</label>
          <h3 className="mt-3 font-bold text-center text-lg text-secondary">you are booking for: {name}</h3>
          <form onSubmit={handleBooking} className='mt-5 grid grid-cols-1 gap-5 justify-items-center'>
              <input name="time" type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
              <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                  slots?.map(slot => <option value={slot}>{slot}</option>)
                }
              </select>
              <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
              {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
              <input type="number" name="phone" placeholder="Phone Number here" className="input input-bordered w-full max-w-xs" />
              <input type="submit" className="text-white btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
