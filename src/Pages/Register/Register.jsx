import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
import { useForm } from "react-hook-form";
const Register = () => {
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
    const name = data.name;
    const email = data.email;
    const photoUrl = data.photoUrl;
    const password = data.password;

    if (password.length < 6) {
      setErr("Password must be at least 6 characters!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErr("Password must contain at least 1 upper case letter!");
      return;
    }

    if (!specialCharacter.test(password)) {
      setErr("Password should have at least 1 special character!");
      return;
    }

    if (!/\d/.test(password)) {
      setErr("Password must contain at least 1 number!");
      return;
    }
    console.log(data);
  };



  return (
    <section className="relative mb-10">
      <div>
        <div className="max-w-md relative z-10  py-10 px-12 mx-auto space-y-8  border mt-10 text-black backdrop-blur-md rounded-md">
          <h2 className="font-semibold text-3xl">Register Account</h2>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <p className="font-semibold">Your Name</p>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            {errors.name && (
              <span className="text-red-500">Name is required!</span>
            )}
           

            <p className="font-semibold">Your Email</p>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            {errors.email && (
              <span className="text-red-500">Email is required!</span>
            )}
            <p className="font-semibold">Set Password</p>
            <div className="relative">
              <input
                id="password"
                type={`${show ? "text" : "password"}`}
                name="password"
                {...register("password", { required: true })}
                placeholder="Password must be at-least 6 characters"
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
            {err && (
              <div className="text-red-500 rounded-lg p-2 bg-white font-serif font-light">
                <p>{err}</p>
              </div>
            )}
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <input
                  {...register("terms", {
                    required: " Check Terms and Conditions!",
                  })}
                  value="yes"
                  type="checkbox"
                  className="checkbox checkbox-sm bg-white"
                />

                <label>
                  Accept
                  <a className="hover:underline" href="">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              {errors.terms && (
                <span className="text-red-500">{errors.terms.message}</span>
              )}
              <input
                type="submit"
                value="Register"
                className="btn btn-neutral outline outline-white bg-black text-white w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
