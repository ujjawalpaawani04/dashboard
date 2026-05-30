import React from 'react'
import PersonalInfo from './PersonalInfo'
import ResidentDetails from './ResidentDetails'
import ResidentImage from './ResidentImage'
import ResidentDocuments from './ResidentDocuments'



const ResidentForm = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-[820px] flex flex-col gap-5">
          <PersonalInfo />
          <ResidentDetails />
    
        </div>
        <div className="w-[360px] space-y-5">
          <ResidentImage />
          <ResidentDocuments />
        </div>
      </div>
    </>
  )
}

export default ResidentForm