import React from 'react';

const InfoCard = ({bgClass,cardTitle,img}) => {
  // console.log(img)
  return (
    <div className={`p-3 card lg:card-side ${bgClass}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
  );
};

export default InfoCard;