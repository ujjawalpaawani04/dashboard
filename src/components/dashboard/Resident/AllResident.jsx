import React from 'react'
import {useState} from "react"
import eye from "../../../assets/images/dashboard/Eye.png"
import pen from "../../../assets/images/dashboard/Pen.png"
import trash from "../../../assets/images/dashboard/Trash-2.png"

const AllResident = () => {
          const [page, setPage] = useState(1);
          const itemsPerPage = 7;
          const indexStart = (page - 1 ) * itemsPerPage;
    
      const ResidentInfo =[
      { name: "Amit Mehta", sortName: "AM", houseNo: "A-101", phone: "123-456-7890", family: "4", status: "Active" },
      { name: "Sunita Joshi", sortName: "SJ", houseNo: "B-203", phone: "234-567-8901", family: "2", status: "Inactive" },
      { name: "Priya Sharma", sortName: "PS", houseNo: "C-305", phone: "345-678-9012", family: "3", status: "Pending" },
      { name: "Ujjawal Dhiman", sortName: "UD", houseNo: "D-110", phone: "456-789-0123", family: "5", status: "Active" },
      { name: "Rohit Verma", sortName: "RV", houseNo: "E-402", phone: "567-890-1234", family: "6", status: "Active" },
      { name: "Neha Kapoor", sortName: "NK", houseNo: "F-215", phone: "678-901-2345", family: "2", status: "Inactive" },
           { name: "Amit Mehta", sortName: "AM", houseNo: "A-101", phone: "123-456-7890", family: "4", status: "Active" },
      { name: "Sunita Joshi", sortName: "SJ", houseNo: "B-203", phone: "234-567-8901", family: "2", status: "Inactive" },
      { name: "Priya Sharma", sortName: "PS", houseNo: "C-305", phone: "345-678-9012", family: "3", status: "Pending" },
        { name: "Ujjawal Dhiman", sortName: "UD", houseNo: "D-110", phone: "456-789-0123", family: "5", status: "Active" },
      { name: "Rohit Verma", sortName: "RV", houseNo: "E-402", phone: "567-890-1234", family: "6", status: "Active" },
      { name: "Neha Kapoor", sortName: "NK", houseNo: "F-215", phone: "678-901-2345", family: "2", status: "Inactive" },
     
    ]
    
          const currentData = ResidentInfo.slice(indexStart, indexStart + itemsPerPage);
          const totalPages  = Math.ceil(ResidentInfo.length /itemsPerPage );
  return (
   <>
          {/* left-column */}
        <div className="bg-white rounded-[28px] p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)] w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-[18px] font-bold text-[#0F172A]">All Residents</h2>
              <p className="text-sm text-[#64748B]">Showing {ResidentInfo.length} registered members</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-xl bg-[#3B82F6] px-4 py-2 text-sm  text-white shadow-lg">All</button>
              <button className="rounded-xl hover:bg-[#3B82F6] px-4 py-2 text-sm  border border-[#CBD5E1] shadow-lg text-[#0F172A] hover:text-white">Active</button>
              <button className="rounded-xl hover:bg-[#3B82F6] px-4 py-2 text-sm  text-[#0F172A] border border-[#CBD5E1] shadow-lg hover:text-white">Pending</button>
              <button className="rounded-xl hover:bg-[#3B82F6] px-4 py-2 text-sm  text-[#0F172A] border border-[#CBD5E1] shadow-lg hover:text-white">Inactive</button>
              <button className="rounded-xl border border-[#CBD5E1] px-4 py-2  hover:bg-[#3B82F6] text-sm text-[#0F172A] hover:text-white bg-white shadow-sm">Filter</button>
              <button className="rounded-xl hover:bg-[#3B82F6] px-4 py-2 text-sm  text-[#0F172A] shadow-lg border border-[#CBD5E1] hover:text-white ">Add Resident</button>
    
                       </div>
          </div>

          {/* resident-information */}

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-[#334155]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[11px] uppercase text-[#64748B] bg-[#F8FAFC] font-semibold">
                  <th className="py-4 px-3">Resident</th>
                  <th className="py-4 px-3">House No.</th>
                  <th className="py-4 px-3">Phone</th>
                  <th className="py-4 px-3">Family</th>
                  <th className="py-4 px-3">Status</th>
                  <th className="py-4 px-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
               
               {currentData.map((element, index)=>{
                let statusClass = "";
                let sortNameBG  = ""
                if(element.status === "Active"){
                  statusClass = "text-[#16A34A] bg-[#DCFCE7]";
                  sortNameBG = "bg-gradient-to-r from-[#10B981] to-[#047857]";
                }else if(element.status === "Inactive"){
                  statusClass = "text-[#D97706] bg-[#FEF3C7]";
                  sortNameBG = "bg-gradient-to-r from-[#F59E0B] to-[#F97316]";
                }else if(element.status === "Pending"){
                  statusClass = "text-[#DC2626] bg-[#FEE2E2]";
                  sortNameBG = "bg-gradient-to-r from-[#EF4444] to-[#F87171]";
                }
                return  <tr  className="">
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${sortNameBG} text-sm font-semibold text-[#ffffff]`}>{element.sortName}</div>
                        <div>
                          <p className="font-semibold text-[#0F172A]">{element.name}</p>
                          <p className="text-xs text-[#94A3B8]"><bdi>owner</bdi></p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[#475569]">{element.houseNo}</td>
                    <td className="py-4 px-3 text-[#475569]">{element.phone}</td>
                    <td className="py-4 px-3 text-[#475569]">👪&nbsp;{element.family}</td>
                    <td className="py-4 px-3">
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${statusClass}`}>{element.status}</span>
                    </td>
                    <td className="py-4 px-3 flex items-center gap-2">
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#EFF6FF]"><img src={eye} alt="View" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#F0FDF4]"><img src={pen} alt="Edit" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#FFF1F2]"><img src={trash} alt="Delete" /></button>
                    </td>
                  </tr>
               })}
        


              </tbody>
            </table>
          </div>

          {/* pagination */}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[#64748B]">
            <p>Showing {itemsPerPage} of {ResidentInfo.length} residents</p>
            <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] p-2">
              <button className="h-9 w-9 rounded-full bg-white text-[#334155] shadow-sm" onClick={() => setPage(page - 1)}>‹</button>
             {Array.from({length : totalPages}, (_, index)=>  <button className="h-9 w-9 rounded-full bg-[#3B82F6] text-white" onClick={() => setPage(index + 1)}>
                {index + 1}
              </button>
             )}
              <button className="h-9 w-9 rounded-full bg-white text-[#334155] shadow-sm" onClick={() => setPage(page + 1)}>›</button>
            </div>
          </div>
        </div>
</>
  )
}


export default AllResident