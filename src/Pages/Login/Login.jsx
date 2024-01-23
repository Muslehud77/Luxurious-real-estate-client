import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr(null);
    const email = data.email;
    const password = data.password;
  };

  return (
    <div className="relative  ">
      <section className="w-full container  mx-auto px-8  pb-10 items-center gap-8 ">
        <div className="flex justify-center items-center mt-10">
          <div className="max-w-md relative z-10 border py-8 md:py-10 px-5 md:px-12 mx-auto space-y-8 bg-white rounded-md">
            <h2 className="font-semibold text-3xl">Login your account</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <p className="font-semibold">Your Email</p>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-100"
              />
              {errors.email && (
                <span className="text-red-500">Email is required!</span>
              )}
              <p className="font-semibold">Password</p>
              <div className="relative">
                <input
                  id="password"
                  {...register("password", { required: true })}
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  placeholder="Password "
                  className="input input-bordered w-full bg-gray-100 text-black"
                />

                <div
                  className="hover:cursor-pointer absolute right-3 bottom-3 text-black text-xl"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {!show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.password && (
                <span className="text-red-500">Password is required!</span>
              )}
              <div className="space-y-2">
                {err && (
                  <p className="capitalize text-red-500 font-serif  rounded-xl">
                    {err}
                  </p>
                )}
                <input
                  type="submit"
                  value="login"
                  className="btn btn-neutral w-full"
                />
              </div>
            </form>
            <div>
              <span>
                Don't Have An Account ?{" "}
                <Link
                  state={state}
                  className="hover:font-semibold text-blue-700"
                  to="/register"
                >
                  Register
                </Link>
              </span>
              <div className="mt-3">
                <div className="flex justify-center gap-5 items-center mb-2">
                  <div className="w-16 h-[1px] bg-black"></div>
                  <h2 className="text-xl font-bold ">or</h2>
                  <div className="w-16 h-[1px] bg-black"></div>
                </div>

                <div className="space-y-2">
                  <button
                    // onClick={() => socialLogin(googleSignIn)}
                    className="btn w-full btn-outline"
                  >
                    <FcGoogle className="text-2xl" /> continue with Google
                  </button>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
