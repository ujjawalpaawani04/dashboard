import React from 'react'
import { TfiImport } from "react-icons/tfi";

const ResidentImage = () => {
  return (
    <div className='bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]'>
      <h2 className='px-6 py-5 tyext-[15px] leading-[18px] font-semibold'>Profile Photo</h2>
      <div className='flex flex-col items-center justify-center gap-4 px-6 py-5'>
        <div className='w-[96px] h-[96px] rounded-full bg-[#EEF2FF] flex items-center justify-center'>
        👦
        </div>
        <div className='flex flex-col gap-2 items-center justify-center '>
          <div className='flex gap-2 px-5 py-2 bg-[#EEF2FF] items-center rounded-[8px]'> 
           
            <label for="residentImage" className='text-[#4F46E5] flex gap-2 px-5 items-center'> <TfiImport className='text-[#4F46E5]' /> Upload Photo</label>
            <input type= "file" id = "residentImage" className='hidden'/>
            </div>
              <p className='text-[12px] leading-[14.4px] text-[#9CA3AF]'>JPG, PNG up to 5MB</p>
        </div>
      
      </div>
    </div>
  )
}

export default ResidentImage