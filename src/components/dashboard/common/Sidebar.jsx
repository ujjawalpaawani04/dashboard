import React from 'react'
import colonyLogo from "../../../assets/images/dashboard/colony-logo.png"
import dashboardIcon from "../../../assets/images/dashboard/dashboard-icon.png"
import { Link } from 'react-router'

const mainMenu = [{
  img : colonyLogo,
  title : "Dashboard",
  notification : "New",
  navigate : "/dashboard"
},{
  img : colonyLogo,
  title : "Residents",
  notification : "248",
   navigate : "/dashboard/Residents"
},{
  img : colonyLogo,
  title : "Add Resident",
  notification : null,
   navigate : "/dashboard/AddResident"
},{
  img : colonyLogo,
  title : "Families",
  notification : null,
   navigate : "/#"
},{
  img : colonyLogo,
  title : "Galleries",
  notification : null,
   navigate : "/#"
}]

const management = [{img : colonyLogo,
  title : "Notices",
  notification : null},{img : colonyLogo,
  title : "Events",
  notification : null},{img : colonyLogo,
  title : "Complaints",
  notification : null},{img : colonyLogo,
  title : "Payments",
  notification : null},{img : colonyLogo,
  title : "Settings",
  notification : null}]

const Sidebar = () => {
  return (
   <aside className="flex flex-col  w-[260px] bg-[#0f1729] min-h-screen">
    <div className ="flex gap-[12px] items-center p-[20px]">
        <div className ="flex justify-center items-center w-[38px] h-[38px] border border-gray-600 border rounded-[10px] bg-gradient-to-r from-[#6366F1] to-[#3B82F6]"><img src={colonyLogo} alt="Colony-Logo" className = "w-[20px] h-[20px] object-contain"/></div>
        <div className ="content-center">
            <h2 className="text-[15px] font-bold text-white leading-[14px]">ColonyPro <br/>   <span className ="text-[#64748B] text-[10px]">Admin Dashboard</span></h2>
          
        </div>
    </div>

    {/* Main Menu */}
    <div className ="pt-4 px-3">
        <span className ="text-[#475569] font-semibold text-[10px]">MAIN MENU</span>
        <div className = "flex flex-col gap-[8px] mt-1">
       {mainMenu.map((element, index)=>{
        return      <Link to={element.navigate}>
        <div className ={`flex justify-between items-center h-[40px] px-3  rounded-lg  ${index === 0 ? 'bg-gradient-to-r from-[#6366F1] to-[#3B82F6]' : 'hover:bg-gradient-to-r from-[#6366F1] to-[#3B82F6]'}`}>
     
               <div className ="flex gap-[10px] items-center">
                 <img src = {element.img} alt= {element.title} className = 'w-[16px] h-[16px] object-contain'/>
                <h3 className ="text-[13px] text-white">{element.title}</h3>
                </div>
            
          
        {
          element.notification ? <div className="inline-flex items-center justify-center rounded-full bg-white px-2 py-1 ">
              <span className="text-[9px] text-[#3B82F6] font-bold leading-[10.8px]">{element.notification}</span>
          </div> : ""
        }
            </div>    </Link>
       })}

        </div>
    </div>

    {/* Management*/}
    <div className ="pt-4 px-3">
        <span className ="text-[#475569] font-semibold text-[10px]">MANAGEMENT</span>
        <div className = "flex flex-col gap-[8px] mt-1">
          {management.map((element, index) => {
  return (
    <div
      key={index}
      className="flex justify-between items-center h-[40px] px-3 rounded-lg hover:bg-gradient-to-r from-[#6366F1] to-[#3B82F6]"
    >
      <div className="flex gap-[10px] items-center">
        <img
          src={element.img}
          alt="Dashboard-icon"
          className="w-[16px] h-[16px] object-contain"
        />

        <h3 className="text-[13px] text-white">
          {element.title}
        </h3>
      </div>

      {/* Conditional Rendering */}
      {element.title === "Notices" ? (
        <div className="bg-[#F59E0B] w-[8px] h-[8px] rounded-full"></div>
      ) : element.title === "Complaints" ? (
        <div className="inline-flex items-center justify-center rounded-full bg-[#EF4444] px-2 py-1">
          <span className="text-[9px] text-white font-bold leading-[10.8px]">
            12
          </span>
        </div>
      ) : null}
    </div>
  );
})}


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

