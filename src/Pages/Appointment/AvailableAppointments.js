import React,{useState,useEffect} from 'react';
import { format } from 'date-fns';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {

  const formattedDate = format(date, 'PP');
  const [services,setServices] = useState([]);
  const [treatment,setTreatment] = useState([]);
  const [isReload, setIsReload] = useState(true)
  // console.log(treatment);

  useEffect( ()=>{
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json())
    .then(data => setServices(data))
  },[isReload]);

  return (
    <div className="my-28">
      <h1 className="text-center font-bold capitalize text-secondary text-xl">Available Appointment on {format(date, 'PP')}</h1>
      <h3 className="text-center capitalize mt-3 text-xl">Please select a service</h3>
    <div className='px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {services.map(service => <Booking key={service._id} setTreatment={setTreatment} service={service}/>)}
    </div>
          {treatment && <BookingModal isReload={isReload} setIsReload={setIsReload} date={date} treatment={treatment} setTreatment={setTreatment} />}
    </div>
  );
};

export default AvailableAppointments;