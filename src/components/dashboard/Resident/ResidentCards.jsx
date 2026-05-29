import React from 'react'

const ResidentCards = () => {
     const ResidentCards = [{
    icon : "👪",
    title : "Total Residents",
    number : 40,
    percentage : "+12%"
   },{
    icon : "😎",
    title : "Active",
    number : 15,
    percentage : "79%"
   },{
    icon : "😏",
    title : "Pending",
    number : 4,
    percentage : "10%"
   },{
    icon : "😴",
    title : "Inactive",
    number : 5,
    percentage : "5%"
   }] 

   let color = {
    "Total Residents" : { bg: "bg-[#EEF2FF]", text: "text-[#4F46E5]" },
    "Active" : { bg: "bg-[#F0FDF4]", text: "text-[#16A34A]" },
    "Pending" : { bg: "bg-[#FEF9C3]", text: "text-[#CA8A04]" },
    "Inactive" : { bg: "bg-[#FEF2F2]", text: "text-[#DC2626]" }
   }
  return (
      <div className='flex gap-4 w-[1400px] mx-auto'>
      {ResidentCards.map((element)=>{
        return   <div className = "flex  gap-5 px-5 h-[80px] bg-[#ffffff] items-center rounded-[12px] grow-1">
      <div className ={`p-3 ${color[element.title]?.bg}  rounded-[10px]`}>{element.icon}</div>
      <div>
        <p className  = "text-[12px] leading-[14.4px] text-[#6B7280] font-normal ">{element.title}</p>
        <span className  = "text-[22px] leading-[26.4px] text-[#111827] font-bold ">{element.number}</span>
      </div>
      <span className  = {`text-[12px] leading-[14.4px] ${color[element.title]?.text} font-semibold inline-block px-[10px] py-1 ${color[element.title]?.bg} rounded-full text-[#16A34A]`}>{element.percentage}</span>
    </div>
      })}
  
    </div>
  )
}

export default ResidentCards