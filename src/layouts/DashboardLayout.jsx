import React from 'react'
import Sidebar from '../components/dashboard/common/Sidebar'
import DashHeader from '../components/dashboard/common/DashHeader'
import Dashboard from '../pages/dashboard'

const DashboardLayout = () => {
  return (
  <>
  <div className = "flex">
   <Sidebar />
   <div className = "flex flex-col flex-grow ">
   <DashHeader />
   <Dashboard />

   </div>
   </div>
  </>
  )
}

export default DashboardLayout