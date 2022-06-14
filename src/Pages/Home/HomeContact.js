import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const HomeContact = () => {
  return (
    <section
      class="flex p-20 items-center justify-center mt-10"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center">
        <h1 className="mb-3 text-primary font-bold text-xl">Contact Us</h1>
        <h1 className="mb-8 font-bold text-white text-3xl">Stay connected with us</h1>
        <div>
          <div class="form-control mt-5">
            <input
              type="text"
              placeholder="Email Address"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-5">
            <input
              type="text"
              placeholder="Subject"
              class="input input-bordered"
            />
          </div>
          <div class="mt-5">
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
