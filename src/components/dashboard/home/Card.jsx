
import React from 'react'
import eye from "../../../assets/images/dashboard/Eye.png"
import pen from "../../../assets/images/dashboard/Pen.png"
import trash from "../../../assets/images/dashboard/Trash-2.png"
import Resident from '../../../components/dashboard/home/Resident'
import Card from '../../../components/dashboard/home/Card'

const cards = [{title : "Total Residents", NoOfResidents : 248, increament : "+12%", CompareTime : "vs last month", img : pen, color : "from-[#6366F1] to-[#3B82F6]"},
{title : "New Requests", NoOfResidents : 98, increament : "+8%", CompareTime : "since last week", img : eye, color : "from-[#8B5CF6] to-[#6D28D9]"},
{title : "Pending Payments", NoOfResidents : 46, increament : "+6%", CompareTime : "from last month", img : pen, color : "from-[#F59E0B] to-[#D97706]"},
{title : "Active Blocks", NoOfResidents : 4, increament : "+18%", CompareTime : "month over month", img : trash, color : "from-[#10B981] to-[#047857]"}
]

const card = () => {
  return (
    <>
          {/* card-section */}
          <section>
          <div className="flex flex-wrap gap-4">
            {cards.map((element, index)=>{
              return  <div className={`bg-linear-to-r ${element.color} p-5 rounded-3xl min-w-55 flex-1 text-white shadow-lg`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] leading-3.5 uppercase tracking-[0.22em] opacity-80">{element.title}</p>
                  <p className="text-[32px] font-extrabold leading-9.5 mt-2">{element.NoOfResidents}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-white/15 px-2 py-1">{element.increament}</span>
                <span className="opacity-80">{element.CompareTime}</span>
              </div>
            </div>
            })}

          </div>
          </section>
          </>
  )
}

export default card