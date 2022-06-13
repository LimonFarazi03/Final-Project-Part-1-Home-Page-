import React from "react";

const Service = ({ service }) => {
  return (
    <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
      <figure class="">
        <img
          width={"116px"}
          height={"115px"}
          src={service.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;