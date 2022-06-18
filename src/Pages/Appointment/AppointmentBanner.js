import React, { useState } from 'react';
import chairBanner from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import bgImage from "../../assets/images/bg.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img width={"100%"} src={chairBanner} className="max-w-lg rounded-lg shadow-2xl" />
        <div className='mr-12 p-2shadow-2xl rounded-lg'>
          <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
