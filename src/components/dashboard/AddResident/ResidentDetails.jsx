import React from "react";
import { useFormContext } from "react-hook-form";

const ResidentDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

 

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
  // Submission is handled by the parent form

  return (
    <div className=" overflow-hidden rounded-2xl border border-gray-200 bg-white">
      
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-200 px-8 py-6">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
          👤
        </div>

        <div>
          <h2 className="text-[15px] leading-[18px] font-semibold text-gray-900">
           Residence Details
          </h2>

          <p className="text-gray-500">
            Housing and block assignment
          </p>
        </div>
      </div>

      {/* Residence Details */}
      <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">
        
        {/* Block */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Block *
          </label>

          <input
            type="text"
            placeholder="Enter block"
            className="h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
            {...register("Block", {
              required: "Block is required",
            })}
          />

          {errors.Block && (
            <p className="mt-1 text-sm text-red-500">
              {errors.Block.message}
            </p>
          )}
        </div>

        {/* House Number */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            House Number *
          </label>

          <input
            type="text"
            placeholder="Enter house number"
            className="h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
            {...register("HouseNumber", {
              required: "House number is required",
            })}
          />

          {errors.HouseNumber && (
            <p className="mt-1 text-sm text-red-500">
              {errors.HouseNumber.message}
            </p>
          )}
        </div>

        {/* Resident-type */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Resident Type *
          </label>

          <select
            className="h-14 w-full rounded-xl border border-gray-300 px-4 text-gray-700 outline-none focus:border-indigo-500 relative z-2"
            {...register("residentType", {
              required: "Resident type is required",
            })}
          >
            <option value="">Select Resident Type</option>
            <option value="owner">Owner</option>
            <option value="tenant">Tenant</option>
          </select>

          {errors.residentType && (
            <p className="mt-1 text-sm text-red-500">
              {errors.residentType.message}
            </p>
          )}
        </div>

        {/* Move-in Date */}
        <div>
          <label className="mb-2 block font-medium text-gray-700 ">
            Move-in Date 
          </label>

          <div className="flex h-14 items-center rounded-xl border border-gray-300 px-4 focus-within:border-indigo-500">
           

            <input
              type="date"
              placeholder="Enter move-in date"
              className="w-full outline-none"
              {...register("moveInDate", {
                required: "Move-in date is required",
              })}
            />
          </div>

          {errors.moveInDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.moveInDate.message}
            </p>
          )}
        </div>

             <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-gray-700">
            Additional Notes
          </label>

          <textarea
            placeholder="Enter additional notes"
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-indigo-500"
            {...register("additionalNotes")}
          />
        </div>

  

   

      </div>
    </div>
  );
};

export default ResidentDetails;