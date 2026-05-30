import React from 'react'
import ResidentForm from '../../components/dashboard/AddResident/ResidentForm'
import { useForm, FormProvider } from 'react-hook-form'
import { MdGroupAdd } from "react-icons/md";
import formBGImage  from "../../assets/images/dashboard/form-background-image.png"

const AddResident = () => {
  const methods = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <main className="bg-[#f5f5f5]">
        <section 
          className="px-6 py-8"
          style={{
            backgroundImage: `url(${formBGImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className='min-w-min mx-auto flex flex-col items-center'>
                <ResidentForm />
                {/* Submit Button */}
        <div className = "flex items-center gap-3 justify-center mt-6" >
          <button
            type="reset"
            className=" rounded-xl bg-white px-6 h-11  transition hover:bg-indigo-700 hover:text-white"
          >
            Cancel
          </button>
          <button
          
            className=" rounded-xl bg-white px-6 h-11  transition hover:bg-indigo-700 hover:text-white"
          >
          
            Save as Draft
          </button>
          <button
            type="submit"
            className=" px-6 h-11 rounded-xl bg-indigo-600  text-white transition hover:bg-indigo-700 flex items-center gap-2"
          >
                <MdGroupAdd />
               <span>Add Resident</span>
          </button>
        </div>
 
          </form>
        </FormProvider>
   </section>
   </main>
  )
}

export default AddResident