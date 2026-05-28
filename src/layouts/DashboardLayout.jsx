import React from 'react'
import { Outlet } from "react-router";
import Sidebar from '../components/dashboard/common/Sidebar'
import DashHeader from '../components/dashboard/common/DashHeader'

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col grow">
          <DashHeader />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DashboardLayout