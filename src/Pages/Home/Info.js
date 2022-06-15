import React from "react";
import InfoCard from "./InfoCard";
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <InfoCard bgClass={"bg-gradient-to-r from-secondary to-primary"} cardTitle="Opening Hours" img={clock}/>
      <InfoCard bgClass={"bg-accent"} cardTitle="Visit Our Location" img={location}/>
      <InfoCard bgClass={"bg-gradient-to-r from-secondary to-primary"} cardTitle="Contact Us Now" img={phone}/>
    </div>

  );
};

export default info;
