import React from 'react'

const OccupancyOverview = () => {
    const overview = [
                { label: 'Block A Residents', value: '62/80', percent: 0.78, color: 'bg-[#3B82F6]' },
                { label: 'Block B Residents', value: '74/90', percent: 0.82, color: 'bg-[#8B5CF6]' },
                { label: 'Block C Residents', value: '52/70', percent: 0.74, color: 'bg-[#10B981]' },
                { label: 'Block D Residents', value: '60/78', percent: 0.77, color: 'bg-[#F59E0B]' },
              ]
  return (
         <div className="rounded-[28px] bg-white p-6 shadow-[0px_12px_50px_rgba(7,74,193,0.08)]">
            <div>
              <h3 className="text-[17px] font-bold text-[#0F172A]">Occupancy Overview</h3>
              <p className="text-sm text-[#64748B]">Block residency capacity</p>
            </div>

            <div className="mt-6 space-y-4">
              {overview.map((block) => (
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
  )
}

export default OccupancyOverview