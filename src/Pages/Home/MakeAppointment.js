import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{background:`url(${appointment})`}}>
      <div class="flex justify-center items-center px-6">
      <div className='flex-1 hidden lg:block'>
        <img class="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className='flex-1 p-3'>
        <h4 class="text-primary font-bold text-xl">Appointment</h4>
        <h1 class="text-4xl mt-3 font-bold text-white">Make an appointment Today</h1>
        <p class="my-5 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsus's that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Appointment</PrimaryButton>
      </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
