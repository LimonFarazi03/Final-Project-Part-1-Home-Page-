import React from 'react';
import { useSignInWithGoogle,useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import UserToken from '../../hooks/UserToken';

const SignUp = () => {
  const navigate= useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = UserToken(gUser||user)
  // Loading
  if(gLoading || loading || updating){
    return <div className="flex h-screen justify-center items-center"> <progress className="progress w-56"></progress> </div>
  };
  // Error message
  let signInError;
  if(error || gError || updateError){
    signInError = <p className='text-red-500 text-center mt-4 text-sm'>⚠️ <small>{error?.message || gError?.message || updateError?.message}</small></p>
  }

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success('Account Created Successfully');
    navigate("/appointment");
  };
  if(token){
    // console.log(gUser||user);
    navigate('/appointment')
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center uppercase font-bold text-xl">
            Signup
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
            {/* Password input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password here"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "⚠️ password is required",
                  },
                  minLength: {
                    value: 7,
                    message: "⚠️ password will be 7 character or long",
                  },
                  pattern: {
                    value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                    message: "⚠️ your password must be strong improve now",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Login Button */}
            <input
              type="submit"
              value="signup"
              className="mt-4 font-bold text-white	btn"
            />
            <div className="mt-2 font-bold">
              <p><small>Already have an account  <Link className="text-secondary" to="/login">Login</Link></small></p>
            </div>
            {signInError}
          </form>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;