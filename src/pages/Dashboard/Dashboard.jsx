import React from 'react'
import eye from "../../assets/images/dashboard/Eye.png"
import pen from "../../assets/images/dashboard/Pen.png"
import trash from "../../assets/images/dashboard/Trash-2.png"

const Dashboard = () => {
  return (
    <section className="px-6 py-5 space-y-6">

        {/* card-section */}
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

      <div className="grid gap-6 xl:grid-cols-[3fr_1fr]">
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
               
                  <tr  className="">
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6366F1] to-[#3B82F6] text-sm font-semibold text-[#ffffff]">AM</div>
                        <div>
                          <p className="font-semibold text-[#0F172A]">Amit Mehta</p>
                          <p className="text-xs text-[#94A3B8]"><bdi>owner</bdi></p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[#475569]">A-101</td>
                    <td className="py-4 px-3 text-[#475569]">123-456-7890</td>
                    <td className="py-4 px-3 text-[#475569]">👪&nbsp;4</td>
                    <td className="py-4 px-3">
                      <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-[#16A34A] bg-[#DCFCE7]">Active</span>
                    </td>
                    <td className="py-4 px-3 flex items-center gap-2">
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#EFF6FF]"><img src={eye} alt="View" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#F0FDF4]"><img src={pen} alt="Edit" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#FFF1F2]"><img src={trash} alt="Delete" /></button>
                    </td>
                  </tr>

                  <tr  className="bg-[#F8FAFC]">
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#F59E0B] to-[#D97706] text-sm font-semibold text-[#ffffff]">SJ</div>
                        <div>
                          <p className="font-semibold text-[#0F172A]">Suniota Joshi</p>
                          <p className="text-xs text-[#94A3B8]"><bdi>Tenant</bdi></p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[#475569]">A-101</td>
                    <td className="py-4 px-3 text-[#475569]">123-456-7890</td>
                    <td className="py-4 px-3 text-[#475569]">👪&nbsp;4</td>
                    <td className="py-4 px-3">
                      <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-[#D97706] bg-[#FEF3C7]">Inactive</span>
                    </td>
                    <td className="py-4 px-3 flex items-center gap-2">
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#EFF6FF]"><img src={eye} alt="View" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#F0FDF4]"><img src={pen} alt="Edit" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#FFF1F2]"><img src={trash} alt="Delete" /></button>
                    </td>
                  </tr>
            
                  <tr  className="">
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#10B981] to-[#047857] text-sm font-semibold text-[#ffffff]">PS</div>
                        <div>
                          <p className="font-semibold text-[#0F172A]">Priya Sharma</p>
                          <p className="text-xs text-[#94A3B8]"><bdi>Tenant</bdi></p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[#475569]">A-101</td>
                    <td className="py-4 px-3 text-[#475569]">123-456-7890</td>
                    <td className="py-4 px-3 text-[#475569]">👪&nbsp;4</td>
                    <td className="py-4 px-3">
                      <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-[#DC2626] bg-[#FEE2E2]">Pending</span>
                    </td>
                    <td className="py-4 px-3 flex items-center gap-2">
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#EFF6FF]"><img src={eye} alt="View" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#F0FDF4]"><img src={pen} alt="Edit" /></button>
                      <button className="rounded-[8px] border border-[#E2E8F0] px-2 py-2 text-[11px] text-[#475569] bg-[#FFF1F2]"><img src={trash} alt="Delete" /></button>
                    </td>
                  </tr>
            
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[#64748B]">
            <p>Showing 4 of 248 residents</p>
            <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] p-2">
              <button className="h-9 w-9 rounded-full bg-white text-[#334155] shadow-sm">‹</button>
              <button className="h-9 w-9 rounded-full bg-[#3B82F6] text-white">1</button>
              <button className="h-9 w-9 rounded-full bg-white text-[#334155] shadow-sm">2</button>
              <button className="h-9 w-9 rounded-full bg-white text-[#334155] shadow-sm">3</button>
              <button className="h-9 w-9 rounded-full bg-white text-[#334155] shadow-sm">›</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] bg-white p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[17px] font-bold text-[#0F172A]">Recent Activity</h3>
                <p className="text-sm text-[#64748B]">Latest updates</p>
              </div>
              <button className="rounded-xl border border-[#E2E8F0] px-4 py-2 text-sm text-[#0F172A]">Refresh</button>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: 'New Resident Added', subtitle: 'Amit Mehta joined Block A', time: '2 mins ago', color: 'bg-[#E0F2FE]', icon: '👤' },
                { title: 'Complaint Submitted', subtitle: 'Water leakage in Block C', time: '15 mins ago', color: 'bg-[#FEF3C7]', icon: '💬' },
                { title: 'Event Created', subtitle: 'Annual Meet on 20 July', time: '1 hr ago', color: 'bg-[#DCFCE7]', icon: '📅' },
                { title: 'Notice Published', subtitle: 'Monthly maintenance due', time: '3 hrs ago', color: 'bg-[#EDE9FE]', icon: '🔔' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-[20px] bg-[#F8FAFC] p-4">
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

export default Dashboard