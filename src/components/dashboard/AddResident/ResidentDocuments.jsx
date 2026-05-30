import React from 'react'
import { useFormContext } from 'react-hook-form'

const ResidentDocuments = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      
          
            <h2 className="text-[15px ] leading-[18px] font-semibold px-6 py-5 border-b border-gray-200 ">Family Details</h2>
         
         


        <div className="grid grid-cols-1 gap-6 p-8">
          <div>
            <label className="mb-2 block font-medium text-gray-700">Family Size</label>
            <input
              type="number"
              min="1"
              placeholder="Number of members"
              className="h-11 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
              {...register('familySize', {
                required: 'Family size is required',
                min: { value: 1, message: 'Enter at least 1 member' },
              })}
            />
            {errors.familySize && (
              <p className="mt-1 text-sm text-red-500">{errors.familySize.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">Vehicle Number</label>
            <input
              type="text"
              placeholder="e.g. MH-12-AB-1234"
              className="h-11 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500"
              {...register('vehicleNumber')}
            />
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-300 bg-gray-50 px-4 py-4">
            <div>
              <p className="text-sm font-medium text-gray-900">Has Pets?</p>
              <p className="text-sm text-gray-500">Pet owner</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                {...register('hasPets')}
              />
              <div className="h-6 w-11 rounded-full bg-gray-200 transition peer-checked:bg-indigo-600"></div>
              <div className="pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      
         
            <h2 className="text-[15px ] leading-[18px] font-semibold px-6 py-5 border-b border-gray-200 ">Required Documents</h2>
   

        <div className="space-y-3 p-8">
          {[
            { label: 'ID Proof (Aadhar / PAN)', value: 'idProof' },
            { label: 'Address Proof', value: 'addressProof' },
            { label: 'NOC from previous society', value: 'nocProof' },
            { label: 'Vehicle Registration (if any)', value: 'vehicleRegistration' },
          ].map((doc) => (
            <label key={doc.value} className="flex cursor-pointer items-center gap-3 text-sm transition hover:border-indigo-500">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                {...register('documents')}
                value={doc.value}
              />
              <span className="text-gray-700">{doc.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResidentDocuments