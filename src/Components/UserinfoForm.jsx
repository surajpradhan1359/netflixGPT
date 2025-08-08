import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateProfileOfUser } from "../helpers/firebaseHelpers.js";
import { auth } from "../firebase/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateProfile } from "../helpers/firebaseHelpers.js";

export const UserinfoForm = () => {
  //firebase user
  const authUser = auth.currentUser;
  //dispatch
  const dispatch = useDispatch();
  //navigate
  const navigate = useNavigate();
  const name = useSelector((state) => state.auth.user?.name);
  const photoURL = useSelector((state) => state.auth.user?.photoURL);
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  //navigate to browse if name and photoURL are set
  useEffect(() => {
    if(name && photoURL) {
      navigate("/browse");
    };
  }, [name]);
  
  return (
    <form
      onSubmit={handleSubmit((data) =>
        updateProfile(authUser, data.name, data.image, dispatch)
      )}
      className="bg-black/60 rounded min-w-[250px] p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <h1 className="text-3xl text-white font-bold mb-2 tracking-wide">
        User Info
      </h1>
      <div>
        <label className="text-white tracking-wide text-lg">Full Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-3 my-2 w-full bg-gray-600 rounded"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Name must be at most 20 characters",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/i,
              message: "Name must contain only letters and spaces",
            },
          })}
        />
        <p className="text-red-500 text-sm  ">
          {errors?.name?.message ? errors?.name?.message : ""}
        </p>
      </div>
      <div className="mt-3">
        <label className="text-white tracking-wide text-lg">
          Enter Image URL:
        </label>
        <input
          type="url"
          placeholder="Enter your image url"
          className="p-3 my-2 w-full bg-gray-600 rounded"
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              value:
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
              message: "Invalid URL",
            },
          })}
        />
        <p className="text-red-500 text-sm">
          {errors?.image?.message ? errors?.image?.message : ""}
        </p>
      </div>
      <div className="mt-3">
        <button className="p-3 my-2 w-full bg-red-600 rounded cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
};
