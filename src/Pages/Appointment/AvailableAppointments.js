import React,{useState,useEffect} from 'react';
import { format } from 'date-fns';
import Booking from './Booking';

const AvailableAppointments = ({date}) => {

  const [services,setServices] = useState([]);
  useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[]);

  return (
    <div className="my-28">
      <h1 className="text-center font-bold capitalize text-secondary text-xl">Available Appointment on {format(date, 'PP')}</h1>
      <h3 className="text-center capitalize mt-3 text-xl">Please select a service</h3>
    <div className='px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {services.map(service => <Booking key={service._id} service={service}/>)}
    </div>
    </div>
  );
};

export default AvailableAppointments;