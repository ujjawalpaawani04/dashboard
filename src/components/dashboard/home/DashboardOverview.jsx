import React from 'react'
import Card from './card'
import RecentResident from './RecentResident'
import RecentActivity from './RecentActivity'
import OccupancyOverview from './OccupancyOverview'

const DashboardOverview = () => {
  return (
    <>
    {/* card-section */}
    <section className = "px-6 py-5">
    <Card />
    </section>
    {/* resident, activity section */}
    <section className = "px-6 py-5">
     <div className="grid gap-6 xl:grid-cols-[3fr_1fr]">
    <RecentResident />
      <div className="space-y-6">
    <RecentActivity />
    <OccupancyOverview />
    </div>
    </div>
    </section>

    </>
   
  )
}

export default DashboardOverview