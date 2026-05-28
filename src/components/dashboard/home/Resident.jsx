
import React from 'react'
import {useState} from "react"
import eye from "../../../assets/images/dashboard/Eye.png"
import pen from "../../../assets/images/dashboard/Pen.png"
import trash from "../../../assets/images/dashboard/Trash-2.png"
import Card from '../../../components/dashboard/home/Card'

const Resident = () => {
       const [page, setPage] = useState(1);
      const itemsPerPage = 8;
      const indexStart = (page - 1 ) * itemsPerPage;

  const ResidentInfo =[
  { name: "Amit Mehta", sortName: "AM", houseNo: "A-101", phone: "123-456-7890", family: "4", status: "Active" },
  { name: "Sunita Joshi", sortName: "SJ", houseNo: "B-203", phone: "234-567-8901", family: "2", status: "Inactive" },
  { name: "Priya Sharma", sortName: "PS", houseNo: "C-305", phone: "345-678-9012", family: "3", status: "Pending" },
  { name: "Ujjawal Dhiman", sortName: "UD", houseNo: "D-110", phone: "456-789-0123", family: "5", status: "Active" },
  { name: "Rohit Verma", sortName: "RV", houseNo: "E-402", phone: "567-890-1234", family: "6", status: "Active" },
  { name: "Neha Kapoor", sortName: "NK", houseNo: "F-215", phone: "678-901-2345", family: "2", status: "Inactive" },
  { name: "Karan Malhotra", sortName: "KM", houseNo: "G-118", phone: "789-012-3456", family: "4", status: "Pending" },
  { name: "Anjali Singh", sortName: "AS", houseNo: "H-320", phone: "890-123-4567", family: "3", status: "Active" },
  { name: "Vikas Yadav", sortName: "VY", houseNo: "I-225", phone: "901-234-5678", family: "7", status: "Inactive" },
  { name: "Pooja Mishra", sortName: "PM", houseNo: "J-410", phone: "112-233-4455", family: "5", status: "Pending" },
  { name: "Rahul Chauhan", sortName: "RC", houseNo: "K-109", phone: "223-344-5566", family: "2", status: "Active" },
  { name: "Sneha Patil", sortName: "SP", houseNo: "L-507", phone: "334-455-6677", family: "4", status: "Inactive" },
  { name: "Arjun Nair", sortName: "AN", houseNo: "M-611", phone: "445-566-7788", family: "6", status: "Pending" },
  { name: "Meera Iyer", sortName: "MI", houseNo: "N-208", phone: "556-677-8899", family: "3", status: "Active" },
  { name: "Dev Khanna", sortName: "DK", houseNo: "O-701", phone: "667-788-9900", family: "8", status: "Inactive" },
  { name: "Riya Desai", sortName: "RD", houseNo: "P-315", phone: "778-899-0011", family: "1", status: "Pending" },
  { name: "Harsh Gupta", sortName: "HG", houseNo: "Q-420", phone: "889-900-1122", family: "5", status: "Active" },
  { name: "Tanya Arora", sortName: "TA", houseNo: "R-512", phone: "990-011-2233", family: "4", status: "Inactive" }
]

      const currentData = ResidentInfo.slice(indexStart, indexStart + itemsPerPage);
      const totalPages  = Math.ceil(ResidentInfo.length /itemsPerPage );
  return (
    <section className = "mt-[18px]">
        <div className="grid gap-6 xl:grid-cols-[3fr_1fr]">

          {/* left-column */}
        <div className="bg-white rounded-[28px] p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-[18px] font-bold text-[#0F172A]">Recent Residents</h2>
              <p className="text-sm text-[#64748B]">Latest registered members</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-xl border border-[#CBD5E1] px-4 py-2 text-sm text-[#0F172A] bg-white shadow-sm">Filter</button>
              <button className="rounded-xl bg-[#3B82F6] px-4 py-2 text-sm font-semibold text-white shadow-lg">Add New</button>
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
            <p>Showing 8 of 248 residents</p>
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

       
            {/* Right-column */}
        <div className="space-y-6">

           {/* Recent-activity */}
          <div className="rounded-[28px] bg-white p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[17px] font-bold text-[#0F172A]">Recent Activity</h3>
                <p className="text-sm text-[#64748B]">Latest updates</p>
              </div>
              <button className="rounded-xl border border-[#E2E8F0] px-4 py-2 text-sm text-[#0F172A]">Refresh</button>
            </div>



            <div className="mt-6 flex flex-col">
              {[
                { title: 'New Resident Added', subtitle: 'Amit Mehta joined Block A', time: '2 mins ago', color: 'bg-[#E0F2FE]', icon: '👤' },
                { title: 'Complaint Submitted', subtitle: 'Water leakage in Block C', time: '15 mins ago', color: 'bg-[#FEF3C7]', icon: '💬' },
                { title: 'Event Created', subtitle: 'Annual Meet on 20 July', time: '1 hr ago', color: 'bg-[#DCFCE7]', icon: '📅' },
                { title: 'Notice Published', subtitle: 'Monthly maintenance due', time: '3 hrs ago', color: 'bg-[#EDE9FE]', icon: '🔔' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start border-b border-b-[#f1f5f9] rounded-none bg-white py-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.color}`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#0F172A]">{item.title}</p>
                    <p className="text-sm text-[#64748B]">{item.subtitle}</p>
                  </div>
                  <span className="text-xs text-[#94A3B8]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>


{/* Occupancy Overview */}
          <div className="rounded-[28px] bg-white p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)]">
            <div>
              <h3 className="text-[17px] font-bold text-[#0F172A]">Occupancy Overview</h3>
              <p className="text-sm text-[#64748B]">Block residency capacity</p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: 'Block A Residents', value: '62/80', percent: 0.78, color: 'bg-[#3B82F6]' },
                { label: 'Block B Residents', value: '74/90', percent: 0.82, color: 'bg-[#8B5CF6]' },
                { label: 'Block C Residents', value: '52/70', percent: 0.74, color: 'bg-[#10B981]' },
                { label: 'Block D Residents', value: '60/78', percent: 0.77, color: 'bg-[#F59E0B]' },
              ].map((block) => (
                <div key={block.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-[#0F172A]">
                    <span>{block.label}</span>
                    <span className="text-[#2563EB]">{block.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#E2E8F0]">
                    <div className={`${block.color} h-2 rounded-full`} style={{ width: `${block.percent * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Resident