import React from "react";
import Service from "./Service";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import fluoride from "../../assets/images/fluoride.png";
import DentalCare from "./DentalCare";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: whitening,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center font-bold">
        <h3 className="mb-2 text-primary uppercase text-2xl">Our Services</h3>
        <h2 className="text-3xl mb-5">Services We Provide</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          services.map(service => <Service service={service} key={service._id}/>)
        }
      </div>
      <DentalCare/>
    </div>
  );
};

export default Services;
