import React from 'react'
import eye from "../../assets/images/dashboard/Eye.png"
import pen from "../../assets/images/dashboard/Pen.png"
import trash from "../../assets/images/dashboard/Trash-2.png"
import Resident from '../../components/dashboard/home/Resident'
import Card from '../../components/dashboard/home/Card'

const Dashboard = () => {
  return (
    <>
    <main className = "px-6 py-5">
    <Card />
    <Resident />
    </main>
    </>

  )
}

export default Dashboard