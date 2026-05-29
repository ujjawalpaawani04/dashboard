import React from 'react'
import ResidentCards from '../../components/dashboard/Resident/ResidentCards'
import AllResident from '../../components/dashboard/Resident/AllResident'


const Residents = () => {


  return (
    <main className='bg-[#F5F5F5]'>

      <section className = "p-6">
        <ResidentCards />
       </section>
       <section>
        <AllResident /> 
       </section>
 
    </main>
  )
}

export default Residents
