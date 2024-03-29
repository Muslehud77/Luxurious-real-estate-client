import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

import { useForm } from "react-hook-form";
import useAxiosPublic from './../../Hooks/useAxiosPublic';

import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../Redux/user/userSlice";


const Login = () => {
  const dispatch = useDispatch()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const { state } = useLocation();
  const {disable,error} = useSelector((state)=>state.user)

  
  const [show, setShow] = useState(false);
 

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   
   dispatch(signInStart())

     await axiosPublic
       .post("/auth/sign-in", data, {
         withCredentials: true,
       })
       .then((res) => {
        navigate('/')
        dispatch(signInSuccess(res.data))
       })
       .catch((err) => {
         const errorType = err.response.data;
          dispatch(signInFailure(errorType.message));
       
       });





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
                {error && (
                  <p className="capitalize text-red-500 font-serif  rounded-xl">
                    {error}
                  </p>
                )}
                <input
                disabled={disable}
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
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
