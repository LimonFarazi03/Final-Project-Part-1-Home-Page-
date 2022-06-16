import React from "react";
import { format } from 'date-fns';

{/* slots?.map(slot => <option>{slot}</option>) */}

const BookingModal = ({date,treatment,setTreatment}) => {
  const {_id,name,slots} = treatment;

  const handleBooking = (event) =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    // const time = event.target.time.value;
    console.log({_id,name,slot,email,phone});
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">❌</label>
          <h3 className="mt-3 font-bold text-center text-lg text-secondary">you are booking for: {name}</h3>
          <form onSubmit={handleBooking} className='mt-5 grid grid-cols-1 gap-5 justify-items-center'>
              <input name="time" type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
              <select name="slot" class="select select-bordered w-full max-w-xs">
                {
                  slots?.map(slot => <option value={slot}>{slot}</option>)
                }
              </select>
              <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
              <input type="email" name="email" placeholder="Email Address here" class="input input-bordered w-full max-w-xs" />
              <input type="number" name="phone" placeholder="Phone Number here" class="input input-bordered w-full max-w-xs" />
              <input type="submit" class="text-white btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
