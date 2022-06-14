import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.description}</p>
      </div>
      <div>
        <div class="flex items-center px-5 pb-3">
          <div class="avatar">
            <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h4 class="font-bold">{review.name}</h4>
            <h4 class="font-semibold">{review.address}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
