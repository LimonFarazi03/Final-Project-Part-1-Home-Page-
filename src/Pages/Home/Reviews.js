import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      address: "Dhaka"
    },
    {
      _id: 2,
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      address: "Dhaka"
    },
    {
      _id: 3,
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      address: "Dhaka"
    }
  ];
  return (
    <section className="px-6 my-28">
      <div class="flex justify-between">
        <div>
          <h4 className="font-bold text-xl text-primary">Testimonial</h4>
          <h1 className="font-bold text-3xl mt-2">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {
          reviews.map(review => <Review key="review._id" review={review} />)
        }
      </div>
    </section>
  );
};

export default Reviews;
