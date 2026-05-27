import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DashHeader from '../components/dashboard/DashHeader'
import Dashboard from '../pages/Dashboard/dashboard'

const DashboardLayout = () => {
  return (
  <>
  <div className = "flex">
   <Sidebar />
   <div className = "flex flex-col flex-grow ">
   <DashHeader />
   <main>
   <Dashboard />
   </main>

   </div>
   </div>
  </>
  )
}

export default DashboardLayout