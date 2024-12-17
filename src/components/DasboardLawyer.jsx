import React from 'react'
import { Link } from 'react-router-dom'
import lawyer from '../Json/dashboardLawer.json'

function DasboardLawyer() {
    return (
        <>
            <div className="w-[35vw] min-h-[370px] bg-gray-100 rounded-2xl">

                <div className=" flex justify-between items-center ml-5">
                    <div className="font-semibold text-[14px]">
                        Our Lawyers
                    </div>
                    <ul className="flex justify-end gap-6 p-4">
                        <li className="cursor-pointer text-blue-700 text-[14px] font-semibold">+Add new</li>
                        <Link to="/team"> <li className="cursor-pointer text-[14px] font-semibold">View All</li></Link>
                    </ul>
                </div>

                <div className="flex flex-wrap gap-3 p-4 pt-0">
                    {lawyer.map(data => {
                        return (
                            <div key={data.name} className='card w-[212px]   rounded-xl  bg-white'>

                                <div className='flex flex-col pl-4 gap-3'>
                                    <div className='flex gap-5 pt-9  items-center mt-[-30px] '>
                                        <div className='w-[50px] rounded-lg h-[50px]'>
                                            <img className='h-full w-full rounded-lg' src={data.src} alt="" srcset="" />
                                        </div>
                                        <div className='font-semibold'>
                                            <h2 className='font-bold text-[16px]'>{data.name}</h2>
                                            <p className='text-[12px] text-[brown]'>{data.department}</p>
                                        </div>

                                    </div>

                                    <div className=''>
                                        <p className='text-[12px] text-[gray] w-[270px]'>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default DasboardLawyer
