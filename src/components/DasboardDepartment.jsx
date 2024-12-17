import React from 'react'
import { Link } from "react-router-dom"
import depart from '../Json/dashboardDepartment.json'

function DasboardDepartment() {
    return (
        <>
        
            <div className="w-[40vw] min-h-[370px] bg-gray-100 rounded-2xl">

                <div className=" flex justify-between items-center ml-5">
                    <div className="font-semibold text-[14px]">
                        Departments
                    </div>
                    <ul className="flex justify-end gap-6 p-4">
                        <li className="cursor-pointer text-blue-700 text-[14px] font-semibold">+Add new</li>
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

        </>
    )
}

export default DasboardDepartment
