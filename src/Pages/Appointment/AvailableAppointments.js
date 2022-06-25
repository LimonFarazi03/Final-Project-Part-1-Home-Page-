import React,{useState,useEffect} from 'react';
import { format } from 'date-fns';
import Booking from './Booking';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'

const AvailableAppointments = ({date}) => {
  const formattedDate = format(date, 'PP');
  const [treatment,setTreatment] = useState([]);

  // const [services,setServices] = useState([]);
  // console.log(treatment);

  const {isLoading, error, data:services,refetch} = useQuery(['available',formattedDate], ()=>
  fetch(`https://protected-ocean-34758.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
  );
  if(isLoading){
    return <div className="flex h-screen justify-center items-center"> <progress className="progress w-56"></progress> </div>
  }
  // useEffect( ()=>{
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //   .then(res => res.json())
  //   .then(data => setServices(data))
  // },[isReload]);

  return (
    <div className="my-28">
      <h1 className="text-center font-bold capitalize text-secondary text-xl">Available Appointment on {format(date, 'PP')}</h1>
      <h3 className="text-center capitalize mt-3 text-xl">Please select a service</h3>
    <div className='px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {services?.map(service => <Booking key={service._id} setTreatment={setTreatment} service={service}/>)}
    </div>
          {treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment} />}
    </div>
  );
};

export default AvailableAppointments;