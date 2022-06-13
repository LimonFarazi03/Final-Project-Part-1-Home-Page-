import React from 'react';

const InfoCard = ({bgClass,cardTitle,img}) => {
  // console.log(img)
  return (
    <div class={`p-3 card lg:card-side ${bgClass}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
  );
};

export default InfoCard;