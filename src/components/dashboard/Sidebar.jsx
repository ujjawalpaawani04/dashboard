import React from 'react'
import colonyLogo from "../../assets/images/dashboard/colony-logo.png"
import dashboardIcon from "../../assets/images/dashboard/dashboard-icon.png"

const Sidebar = () => {
  return (
   <aside className="flex flex-col h-[100vh] w-[260px] bg-[#0f1729]">
    <div className ="flex gap-[12px] items-center p-[20px]">
        <div className ="flex justify-center items-center w-[38px] h-[38px] border border-gray-600 border rounded-[10px] bg-gradient-to-r from-[#6366F1] to-[#3B82F6]"><img src={colonyLogo} alt="Colony-Logo" className = "w-[20px] h-[20px] object-contain"/></div>
        <div className ="content-center">
            <h2 className="text-[15px] font-bold text-white leading-[14px]">ColonyPro <br/>   <span className ="text-[#64748B] text-[10px]">Admin Dashboard</span></h2>
          
        </div>
    </div>

    {/* Main Menu */}
    <div className ="pt-4 px-3">
        <span className ="text-[#475569] font-semibold text-[10px]">MAIN MENU</span>
        <div className = "flex flex-col gy-[2px] mt-1">

            {/* Dashboard Item */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg  bg-gradient-to-r from-[#6366F1] to-[#3B82F6]">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Dashboard</h3>
                </div>
          
          <div className="inline-flex items-center justify-center rounded-full bg-white px-2 py-1 ">
              <span className="text-[9px] text-[#3B82F6] font-bold leading-[10.8px]">New</span>
          </div>
            </div>

            {/* Residents Item */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Residents</h3>
                </div>
          
          <div className="inline-flex items-center justify-center rounded-full bg-[#1E293B] px-2 py-1 ">
              <span className="text-[9px] text-[#64748B] font-bold leading-[10.8px]">248</span>
          </div>
            </div>

            {/* Add Resident */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Add Resident</h3>
                </div>
        
            </div>

            {/* Families Item */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Families</h3>
                </div>
        
            </div>

            {/* Galleries */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Gallaries</h3>
                </div>
        
            </div>

        </div>
    </div>

    {/* Management*/}
    <div className ="pt-4 px-3">
        <span className ="text-[#475569] font-semibold text-[10px]">MANAGEMENT</span>
        <div className = "flex flex-col gy-[2px] mt-1">

            {/* Notices Item */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg  ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Notices</h3>
                </div>
          
          <div className=" bg-[#F59E0B] w-[8px] h-[8px] rounded-full">
             
          </div>
            </div>


            {/* Events Resident */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Events</h3>
                </div>
        
            </div>
            
            {/* Complaints Item */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Complaints</h3>
                </div>
          
          <div className="inline-flex items-center justify-center rounded-full bg-[#EF4444] px-2 py-1 ">
              <span className="text-[9px] text-[#fff] font-bold leading-[10.8px]">12</span>
          </div>
            </div>

            {/* Payments Item */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Payments</h3>
                </div>
        
            </div>

            {/* Settings */}
            <div className ="flex justify-between items-center h-[40px] px-3  rounded-lg ">
               <div className ="flex gap-[10px] items-center">
                 <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">Settings</h3>
                </div>
        
            </div>

        </div>
    </div>

    {/* Admin */}
            <div className ="flex justify-between items-center px-4 h-[68px] bg-[#1E293B] ">
               <div className ="flex gap-[10px] items-center">
                <span className='text-white flex gap-[10px] items-center h-[36px] w-[36px] px-3  rounded-full  bg-gradient-to-r from-[#6366F1] to-[#3B82F6] '>RJ</span>
              
                <h3 className ="text-[13px] text-white leading-[14px]">Rajesh Kumar <br/> <span className = "text-[10px]">Super Admin</span></h3>
                </div>
          
              <img src = {dashboardIcon} alt= "Dashboard-icon" className = 'w-[16px] h-[16px] object-contain'/>
          </div>
          

   </aside>
  )
}

export default Sidebar

