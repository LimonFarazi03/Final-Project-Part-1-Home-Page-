import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';

const Banner = () => {
  return (
    <div class="hero min-h-screen" style={{width:'100%',backgroundImage: `url(${bgImage})`}}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img width={'100%'} src={chair} class="max-w-lg" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Started <br/> <span className='mt-2'>Here</span></h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="bg-gradient-to-r from-secondary to-primary font-bold text-white	btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;