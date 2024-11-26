import React from "react"
import DashboardCard from "./components/DashboardCard"
import LeftNav from "./components/LeftNav"

function App() {
  
  return (
    <>

      <div className="font-bold text-[14px] ml-[22vw]">Bookings</div>
      <section className="main1">
        <div className="w-full  flex gap-[300px] ">
<LeftNav/>
          <div className="">
            <DashboardCard/>
        </div>
        </div>
      </section>
    </>
  )
}

export default App
