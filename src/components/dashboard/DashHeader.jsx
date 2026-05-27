import React from 'react'
import bellIcon from "../../assets/images/dashboard/Bell.png"

const DashHeader = () => {
  return (
  <header className  ="flex justify-between items-center px-6 h-[68px] w-full]  bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
      {/* left content */}
    <div>
      
        <h3 className = "text-[18px] text-[#0F172A] font-bold ">Dashboard Overview</h3>
        {/* breadcrumb */}
         <div className = "flex gap-[6px] items-center">
            <span className = "text-xs font-medium">Home</span>
            <span className='text-[12px]'>🦾</span>
            <span className = "text-[#3B82F6] text-xs font-medium">Dashboard</span>
         </div>


    </div>

    {/* right-content */}
    <div className = "flex gap-5 items-center">
        {/* search */}
        <div className = "flex h-[40px] gap-[14px] bg-[#F8FAFC] items-center rounded-[10px] px-[14px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            <img src = "" alt = "Search" />
            <input type = "search" placeholder = "Search resident...." />
        </div>
        {/* calendar*/}
        <div className = "px-[14px] py-[6px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-[8px]">
          
            <input type = "date" placeholder = "search resident...." className = "text-[12px] leading-[14.4px]"/>
        </div>

        {/* notification */}
        <div className = "w-[40px] h-[40px] rounded-[10px] bg-[#E2E8F0] flex items-center justify-center">
            <div className = "inline-flex items-center relative ">
                <img src={bellIcon} alt = "bellIcon" />
                <span className = "absolute top-[-4px] right-[-1px] w-[8px] h-[8px] bg-[#EF4444] rounded-full"></span>
                </div>
        </div>
        {/* brightness */}
        <div className = "w-[40px] h-[40px] rounded-[10px] bg-[#E2E8F0] flex items-center justify-center">
            <div className = "inline-flex items-center relative ">
                <img src={bellIcon} alt = "bellIcon" />
                <span className = "absolute top-[-4px] right-[-1px] w-[8px] h-[8px] bg-[#EF4444] rounded-full"></span>
                </div>
        </div>

        <div className="w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[#6366F1] to-[#3B82F6] flex items-center justify-center">
            <span className = "text-[13px] text-white font-bold">RK</span>
        </div>

    </div>
    </header>
  )
}

export default DashHeader