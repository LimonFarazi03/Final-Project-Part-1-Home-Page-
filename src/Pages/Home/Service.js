import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
      <figure className="">
        <img
          width={"116px"}
          height={"115px"}
          src={service.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;