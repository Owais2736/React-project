import React from "react"
import DashboardCard from "./components/DashboardCard"
import LeftNav from "./components/LeftNav"
import DasboardDepartment from "./components/DasboardDepartment"
import DasboardLawyer from "./components/DasboardLawyer"


function App() {

  return (
    <>
      <div className="font-bold text-[14px] ml-[22vw]">Bookings</div>
      <section className="main1">
        <div className="w-full  flex gap-[300px] ">
          <LeftNav />
          <div className=" flex flex-col gap-4">
            <div>
              <DashboardCard />
            </div>
            <div className="w-[93%] flex gap-4">
              <DasboardDepartment />
          <DasboardLawyer/>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
