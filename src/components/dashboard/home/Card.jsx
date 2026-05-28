
import React from 'react'
import eye from "../../../assets/images/dashboard/Eye.png"
import pen from "../../../assets/images/dashboard/Pen.png"
import trash from "../../../assets/images/dashboard/Trash-2.png"
import Resident from '../../../components/dashboard/home/Resident'
import Card from '../../../components/dashboard/home/Card'

const card = () => {
  return (
    <>
          {/* card-section */}
          <section>
          <div className="flex flex-wrap gap-4">
            <div className="bg-linear-to-r from-[#6366F1] to-[#3B82F6] p-5 rounded-3xl min-w-55 flex-1 text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] leading-3.5 uppercase tracking-[0.22em] opacity-80">Total Residents</p>
                  <p className="text-[32px] font-extrabold leading-9.5 mt-2">248</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-white/15 px-2 py-1">+12%</span>
                <span className="opacity-80">vs last month</span>
              </div>
            </div>
    
            <div className="bg-linear-to-r from-[#8B5CF6] to-[#6D28D9] p-5 rounded-3xl min-w-55 flex-1 text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] leading-3.5 uppercase tracking-[0.22em] opacity-80">New Requests</p>
                  <p className="text-[32px] font-extrabold leading-9.5 mt-2">98</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-white/15 px-2 py-1">+8%</span>
                <span className="opacity-80">since last week</span>
              </div>
            </div>
    
            <div className="bg-linear-to-r from-[#F59E0B] to-[#D97706] p-5 rounded-3xl min-w-55 flex-1 text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] leading-3.5 uppercase tracking-[0.22em] opacity-80">Pending Payments</p>
                  <p className="text-[32px] font-extrabold leading-9.5 mt-2">46</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-white/15 px-2 py-1">+6%</span>
                <span className="opacity-80">from last month</span>
              </div>
            </div>
    
            <div className="bg-linear-to-r from-[#10B981] to-[#047857] p-5 rounded-3xl min-w-55 flex-1 text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] leading-3.5 uppercase tracking-[0.22em] opacity-80">Active Blocks</p>
                  <p className="text-[32px] font-extrabold leading-9.5 mt-2">4</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-white/15 px-2 py-1">+18%</span>
                <span className="opacity-80">month over month</span>
              </div>
            </div>
          </div>
          </section>
          </>
  )
}

export default card