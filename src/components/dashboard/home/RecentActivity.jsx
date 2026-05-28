import React from 'react'

const RecentActivity = () => {
    const activities = [
                { title: 'New Resident Added', subtitle: 'Amit Mehta joined Block A', time: '2 mins ago', color: 'bg-[#E0F2FE]', icon: '👤' },
                { title: 'Complaint Submitted', subtitle: 'Water leakage in Block C', time: '15 mins ago', color: 'bg-[#FEF3C7]', icon: '💬' },
                { title: 'Event Created', subtitle: 'Annual Meet on 20 July', time: '1 hr ago', color: 'bg-[#DCFCE7]', icon: '📅' },
                { title: 'Notice Published', subtitle: 'Monthly maintenance due', time: '3 hrs ago', color: 'bg-[#EDE9FE]', icon: '🔔' },
              ]
  return (
       <div className="rounded-[28px] bg-white p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[17px] font-bold text-[#0F172A]">Recent Activity</h3>
                <p className="text-sm text-[#64748B]">Latest updates</p>
              </div>
              <button className="rounded-xl border border-[#E2E8F0] px-4 py-2 text-sm text-[#0F172A]">Refresh</button>
            </div>



            <div className="mt-6 flex flex-col">
              {activities.map((item) => (
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
  )
}

export default RecentActivity