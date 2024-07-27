import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 space-y-1">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-2 py-1.5 rounded border outline-none"
                  {...register("email", { required: "This field is required" })}
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
                    required: "This field is required",
                  })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-5">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300"
                >
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link to="/signup"
                    className="text-blue-500 cursor-pointer underline"
                  >
                    Signup
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
