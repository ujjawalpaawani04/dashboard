import React from 'react'
import Card from "../../components/dashboard/home/Card"
import RecentResident from '../../components/dashboard/home/RecentResident'
import RecentActivity from '../../components/dashboard/home/RecentActivity'
import OccupancyOverview from '../../components/dashboard/home/OccupancyOverview' 
const Dashboard = () => {
  return (
    <>
  <main>
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

  </main>
     

    </>

  )
}

export default Dashboard