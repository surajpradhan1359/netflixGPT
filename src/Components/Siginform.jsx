import React from "react";
import { useForm } from "react-hook-form";
import { SigninFormHelper } from "../helpers/SigninFormHelper";
import { useDispatch } from "react-redux";

export const Siginform = () => {
  const [isSignin, setIsSignin] = React.useState(true);

  //dispatch
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <form
      onSubmit={handleSubmit((data) =>
        SigninFormHelper(data, isSignin, dispatch)
      )}
      className="p-4 sm:p-10 h-screen sm:h-auto  md:max-w-[400px] bg-black sm:bg-black/70 relative sm:absolute sm:top-1/4 sm:left-1/2 transform sm:-translate-x-1/2 s,:-translate-y-1/2 rounded w-full"
    >
      <h1 className="text-3xl text-white font-bold mb-2 tracking-wide md:text-2xl md:mt-0 mt-16">
        {isSignin ? "Sign In" : "Sign Up"}
      </h1>
      <div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 my-2 w-full bg-gray-600 rounded"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <p className="text-red-600 text-sm">{errors.email?.message}</p>
        </div>
        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-gray-600 rounded"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
              },
            })}
          />
          <p className="text-red-600 text-sm tracking-wide">
            {errors.password?.message}
          </p>
        </div>
        <button
          className="bg-red-500 w-full py-3 my-2 rounded font-bold cursor-pointer tracking-wide mb-10"
          type="submit"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
      </div>
      <div className="text-gray-400 text-sm">
        {isSignin ? "New to Netflix?" : "Already have an account?"}
        <span
          className="text-white cursor-pointer hover:underline font-bold ml-1"
          onClick={() => setIsSignin(!isSignin)}
        >
          {isSignin ? "Sign Up" : "Sign In"}
        </span>
      </div>
    </form>
  );
};
