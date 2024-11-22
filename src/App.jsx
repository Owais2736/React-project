import React from "react"
import LeftNavbar from "./components/LeftNavbar"
import DashboardCard from "./components/DashboardCard"

function App() {
  
  return (
    <>

      <div className="font-bold text-[14px] ml-[22vw]">Bookings</div>
      <section className="main1">
        <div className="w-full  flex gap-[300px] ">

          <div className='w-[20%]'>
            <div className='w-[20%] fixed mt-[-45px]'>
              <LeftNavbar />
            </div>

          </div>

          <div className="">
            <DashboardCard/>
        </div>
        </div>
      </section>
    </>
  )
}

export default App
