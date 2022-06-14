import React from 'react';
import Banner from './Banner';
import HomeContact from './HomeContact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Reviews />
      <HomeContact />
    </div>
  );
};

export default Home;