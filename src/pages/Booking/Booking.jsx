import React from "react"
import DashboardCard from "../../components/DashboardCard"
import { useState } from "react"
import Button1 from "../../components/Button1"
import LeftNav from "../../components/LeftNav"

function Booking() {
  const [toogle, setToogle] = useState("booking")
  const [date, setDate] = useState("2023-03-23")
  const [anotherDate, setAnotherDate] = useState("2024-10-11")

  const handleChange = (e) => {
    setDate(e.target.value)

  }

  const handleAnotherChange = (e) => {
    setAnotherDate(e.target.value)
  }
  return (
    <>
      <section className="top">
        <div className="flex justify-between mt-3"  >
          <div className="  flex gap-3 font-bold text-[14px]  ml-[21vw]" >
            <li className={`list-item cursor-pointer ${toogle === "booking" ? "text-blue-500" : ""} `} onClick={() => { setToogle("booking"); console.log("click"); }} >Booking</li>
            <li className={`list-item cursor-pointer ${toogle === "pending" ? "text-blue-500" : ""} `} onClick={() => { setToogle("pending"); console.log("click"); }} >Pending Booking</li>
            <li className={`list-item cursor-pointer ${toogle === "completed" ? "text-blue-500" : ""} `} onClick={() => setToogle("completed")} >Completed</li>
            <li className={`list-item cursor-pointer ${toogle === "canceled" ? "text-blue-500" : ""}`} onClick={() => setToogle("canceled")}>Canceled</li>
          </div>
          <div className="flex">
            <div>
              <Button1 title="From" input={[<input type="date" value={date} onChange={handleChange} />]} background={"bg-blue-100"} height={'h-11'} width={"w-[160px]"} round={"rounded-xl"} text={"text-[12px]"} />
            </div>
            <div>
              <Button1 title="To" input={[<input type="date" value={anotherDate} onChange={handleAnotherChange} />]} background={"bg-blue-100"} height={'h-11'} width={"w-[160px]"} round={"rounded-xl"} text={"text-[12px]"} />
            </div>
          </div>

        </div>
      </section>

      <section className="main1">
        <div className="w-full  flex gap-[300px] ">
<LeftNav/>

          {toogle === "booking" && (
            <div className="Booking">
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
            </div>

          )}

          {toogle === "pending" && (
            <div className="Pending" >
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
            </div>

          )}

          {toogle === "completed" && (
            <div className="completed">
              <DashboardCard />
              <DashboardCard />
            </div>

          )}

          {toogle === "canceled" && (
            <div className="canceled">
              <DashboardCard />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
export default Booking
