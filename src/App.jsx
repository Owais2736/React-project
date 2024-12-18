import React from "react"
import { useState } from "react";
import Button1 from "./components/Button1";

import DashboardCard from "./components/DashboardCard"
import LeftNav from "./components/LeftNav"

import DasboardLawyer from "./components/DasboardLawyer"
import DepartmentForm from './components/DepartmentForm'
import { Link } from "react-router-dom"
import depart from './Json/dashboardDepartment.json'
import TeamForm from "./components/TeamForm";


function App() {
  const [toogle, setToogle] = useState(false)

  const handleBtn = () => {
    setToogle(!toogle)
  }
  
  




  return (
    <>
    <section className='top'>
        <div className='flex  justify-between'>
          <div className={`font-bold text-[14px] ml-[21vw]  mt-4 ${!toogle ? "" : "hidden"}`}>Bookings</div>
          <div className={` mt-4`}>
            <div className={`font-bold text-[14px] ${!toogle ? "hidden" : ""} ml-[21vw]  `}>Create Department</div>
          </div>
          <div className={`${!toogle ? "hidden" : "block"}  ${!toogle ? "" : "mr-[57vw]"}   ${!toogle ? "" : "mr-[60vw] mt-2"}   `}>
            <Button1 onClick={handleBtn} title={toogle ? "Cancel" : ""} background="bg-blue-200" width="w-[120px]" height="h-10" round="rounded-3xl" text="text-[12px]" color="text-[blue]" 
               />
          </div>
        </div>
      </section>

      <section className="main1">
        <div className="w-full  flex gap-4 ">
          <LeftNav />
          <div className={` flex flex-col gap-4 ${!toogle ? "" : "hidden"}`}>
            <div>
              <DashboardCard />
            </div>
            <div className="w-[78vw] flex gap-4">
              {/* department card */}
            <div className="w-[55vw] min-h-[370px] bg-gray-100 rounded-2xl">

                <div className=" flex justify-between items-center ml-5">
                    <div className="font-semibold text-[14px]">
                        Departments
                    </div>
                    <ul className="flex justify-end gap-6 p-4">
                        <li onClick={handleBtn} title={toogle ? "Cancel" : "Add New"} background="bg-blue-200" width="w-[120px]" height="h-10" round="rounded-3xl" text="text-[12px]" color="text-[blue]" className="cursor-pointer text-blue-700 text-[14px] font-semibold">+Add new</li>
                        <Link to="/department"> <li className="cursor-pointer text-[14px] font-semibold">View All</li></Link>
                    </ul>
                </div>

                <div className="flex flex-wrap gap-3 p-3 pt-0 ">
                    {
                        depart.map(data => {
                            return (
                             <div className='w-[250px] bg-white  rounded-2xl '>

                                    <div className='flex  gap-4 p-3'>
                                        <div className='h-[120px] w-[100px]'>
                                            <img className='w-full h-full' src="src/images/Departments/profile.png" alt="" srcset="" />
                                        </div>
                                        <div className=''>
                                            <h2 className='font-semibold text-[16px] leading-6'>{data.name} <br /> {data.name2}</h2>
                                            <p className='text-[12px] text-amber-700'>{data.noOfLawyer}</p>

                                            <div className='flex  mt-2'>
                                                <div className='w-7 rounded-full'>
                                                    <img className='w-full h-full rounded-full' src={data.image1} alt="" srcset="" />
                                                </div>
                                                <div className='w-7 rounded-full ml-[-10px]'>
                                                    <img className='w-full h-full  rounded-full' src={data.image2} alt="" srcset="" />
                                                </div>
                                                <div className='w-7 h-8 rounded-full ml-[-10px]'>
                                                    <img className='w-full h-full rounded-full' src={data.image3} alt="" srcset="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
          <DasboardLawyer/>

            </div>
          </div>

          <div className={`mt-3 ${!toogle ? "hidden" : ""}`}>
            <TeamForm/>
           </div>
        </div>
      </section>

     



    </>
  )
}

export default App
