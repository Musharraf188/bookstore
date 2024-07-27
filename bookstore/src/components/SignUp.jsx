import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center border">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} className="dialog">
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-1">
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-80 px-2 py-1.5 rounded border outline-none"
                {...register("name", { required: "This field is required" })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mt-4 space-y-1">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-2 py-1.5 rounded border outline-none"
                {...register("email", { required: "Email is required", pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Entered value does not match email format"
                } })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mt-4 space-y-1">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-2 py-1.5 rounded border outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters"
                  }
                })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300">
                Signup
              </button>
              <p>
                Already registered?{" "}
                <button
                  className="text-blue-500 cursor-pointer underline"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
      </>
  );
}
