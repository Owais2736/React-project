import React from "react"
import LeftNavbar from "../../components/LeftNavbar"
import DashboardCard from "../../components/DashboardCard"
import { useState } from "react"
import Button1 from "../../components/Button1"


function Booking() {

  const [toogle, setToogle] = useState("booking")

  return (
    <>

      <section className="top">
        <div className="flex justify-between mt-3"  >


          <div className="  flex gap-3 font-bold text-[14px]  ml-[21vw]" >

            <li className={`list-item cursor-pointer ${toogle === "booking" ? "text-blue-500" : ""} `} onClick={() => {setToogle("booking"); console.log("click");}} >Booking</li>
            <li className={`list-item cursor-pointer ${toogle === "pending" ? "text-blue-500" : ""} `} onClick={() => {setToogle("pending"); console.log("click");}} >Pending Booking</li>
            <li className={`list-item cursor-pointer ${toogle === "completed" ? "text-blue-500" : ""} `} onClick={() => setToogle("completed")} >Completed</li>
            <li className={`list-item cursor-pointer ${toogle === "canceled" ? "text-blue-500" : ""}`} onClick={() => setToogle("canceled")}>Canceled</li>
          </div>


<div className="flex">


          <div>

          <Button1 title="From" input={[<input type="date" value="2023-3-23" />]} background={"bg-blue-100"} height={'h-11'} width={"w-[160px]"} round={"rounded-xl"} text={"text-[12px]"} />
          </div>
          <div>

<Button1 title="To" input={[<input type="date" value="2024-10-3" />]} background={"bg-blue-100"} height={'h-11'} width={"w-[160px]"} round={"rounded-xl"} text={"text-[12px]"} />
</div>
</div>

        </div>
      </section>

      <section className="main1">
        <div className="w-full  flex gap-[300px] ">

          <div className='w-[20%]'>
            <div className='w-[20%] fixed mt-[-90px]'>
              <LeftNavbar />
            </div>

          </div>


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
