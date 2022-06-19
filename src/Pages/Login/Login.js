import React from "react";
import { useSignInWithGoogle,useSignInWithEmailAndPassword, useAuthState, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate,useLocation } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,signUser,signLoading,signError,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Loading
  if(gLoading || signLoading){
    return <div className="flex h-screen justify-center items-center"> <progress className="progress w-56"></progress> </div>
  };
  // Error message
  let signInError;
  if(signError || gError){
    signInError = <p className='text-red-500 text-center mt-4 text-sm'>⚠️ <small>{error?.message || gError?.message}</small></p>
  }
  if(user || gUser || signUser){
    navigate(from, { replace: true });
};
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    navigate('/appointment');
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center uppercase font-bold text-xl">
            Login
          </h2>
          <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
            {/* email input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
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
              <span className="label-text-alt text-primary mt-1">
                    Forgat password
                  </span>
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
              value="login"
              className="mt-4 font-bold text-white	btn"
            />
            <div className="mt-2 font-bold">
              <p><small>New in Doctors Portal?  <Link className="text-secondary" to="/signup">Create an account</Link></small></p>
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

export default Login;