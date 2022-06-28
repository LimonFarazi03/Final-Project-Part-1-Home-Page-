import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';

const AddDoctors = () => {

  const {register,formState: { errors },handleSubmit, reset} = useForm();
  const { isLoading, error, data:services } = useQuery('services', () =>
     fetch('http://localhost:5000/service').then(res =>
       res.json()
     )
  );
  const imageStorageKey = '9faf78b20b70e67216a9a9cf9db5a1df';
  const onSubmit = async data => {
      // console.log(data);
      // const image = data.photo[0];
      const formData = new FormData();
      formData.append('image', data.photo[0]);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
          method: 'POST',
          body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          if(result.success){
            // const imgUrl = result.data.url;
            const doctorInfo = {
              name: data.name,
              email: data.email,
              specialty: data.specialty,
              img: result.data.url
            };
            // send to data base
            console.log(doctorInfo);
            const url = 'http://localhost:5000/doctor'
            fetch(url, {
              method: 'POST',
              body: JSON.stringify(doctorInfo),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then((response) => response.json())
              .then((inserted) => {
                if(inserted.insertedId){
                  toast.success('Doctor Added');
                  reset()
                }else{
                  toast.error('Something Went Wrong')
                }
                
              });
          };
          console.log('Iam File', result)
        });
  };

   if(isLoading){
    return  <div className="flex h-screen justify-center items-center">
                <progress className="progress w-56"></progress>
            </div>
   };

  return (
    <div className="flex my-3 justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-3xl">
            Add Doctor
          </h2>
          <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
            {/* name input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name here"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "⚠️ name is required",
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* email input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your email here"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "⚠️ email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "⚠️ provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* specialty input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
                <select {...register('specialty')} class="select select-bordered w-full max-w-xs">
                    {
                      services.map(s => <option>{s.name}</option>)
                    }
                </select>
            </div>
            {/* Photo input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo Here</span>
              </label>
              <input
                type="file"
                className="input w-full max-w-xs"
                {...register("photo", {
                  required: {
                    value: true,
                    message: "⚠️ Photo is required",
                  }
                })}
              />
              <label className="label">
                {errors.photo?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.photo.message}
                  </span>
                )}
              </label>
            </div>
            {/* Login Button */}
            <input
              type="submit"
              value="Add"
              className="btn btn-success text-white mt-4"
            />
            {/* {signInError} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;