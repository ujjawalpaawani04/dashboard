import React from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
    const b = useForm();
    console.log(b);
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit Function
  const onSubmit = (data) => {
    console.log(data);

    // Backend API Example
    /*
    fetch("http://localhost:5000/api/resident", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    */
  };

  return (
    <div className="w-[70%] overflow-hidden rounded-2xl border border-gray-200 bg-white">
      
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-200 px-8 py-6">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
          👤
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Personal Information
          </h2>

          <p className="text-gray-500">
            Enter resident&apos;s personal details
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2"
      >
        
        {/* First Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            First Name *
          </label>

          <input
            type="text"
            placeholder="Enter first name"
            className="h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
            {...register("firstName", {
              required: "First name is required",
            })}
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Last Name *
          </label>

          <input
            type="text"
            placeholder="Enter last name"
            className="h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
            {...register("lastName", {
              required: "Last name is required",
            })}
          />

          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email Address *
          </label>

          <div className="flex h-14 items-center rounded-xl border border-gray-300 px-4">
            <span className="mr-3">✉️</span>

            <input
              type="email"
              placeholder="resident@email.com"
              className="w-full outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
          </div>

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Phone Number *
          </label>

          <div className="flex h-14 items-center rounded-xl border border-gray-300 px-4">
            <span className="mr-3">📞</span>

            <span className="mr-2 text-gray-500">+91</span>

            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full outline-none"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
          </div>

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Date of Birth
          </label>

          <input
            type="date"
            className="h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
            {...register("dob")}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Gender
          </label>

          <select
            className="h-14 w-full rounded-xl border border-gray-300 px-4 text-gray-700 outline-none focus:border-indigo-500"
            {...register("gender", {
              required: "Please select gender",
            })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {errors.gender && (
            <p className="mt-1 text-sm text-red-500">
              {errors.gender.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="h-14 rounded-xl bg-indigo-600 px-8 text-white transition hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;