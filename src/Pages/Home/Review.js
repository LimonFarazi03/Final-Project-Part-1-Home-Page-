import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.description}</p>
      </div>
      <div>
        <div className="flex items-center px-5 pb-3">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h4 className="font-bold">{review.name}</h4>
            <h4 className="font-semibold">{review.address}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
