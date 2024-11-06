import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {
    return (
        <>

            <div className='flex justify-between w-screen sticky top-0 h-[80px] items-center p-10 '>



                <div className='flex items-center gap-16 p-14  '>
                    <div className='w-[130px] h-auto'>
                        <img className='w-full h-full' src="src/images/Navbar/logo.png" alt="Logo" srcset="" />
                    </div>

                    <div className='w-[150px] text-[24px] h-[70px] font-bold mt-9 '>
                        <p className='text-center'><span className='text-blue-800'>38</span> Bookings</p>

                    </div>

                </div>



                <div className='flex items-center gap-5'>
                    <div className='w-[200px] h-[40px] border-2 rounded-[50px]'>
                        <input className='w-full h-full text-[14px] pl-4' type="text" placeholder='Search' />
                    </div>

                    <div className='w-[130px] h-[40px] border-2 rounded-[50px] '>
                        <select className='w-full h-full text-[14px] pl-4' name="language" id="language">
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Russian">Russian</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </div>


                    <div className='w-[120px] h-[70px] mt-5'>
                        <h2 className='text-[20px] font-bold'>Ahmed Aziz</h2>
                        <p className='text-[14px] text-blue-800 pl-6 leading-[10px]'>Supper Admin</p>
                    </div>

                    <div className='w-[50px] h-[50px] border-2 rounded-[100px]'>

                        <img className='w-[40px] h-[40px] border-2 rounded-[100px] mt-[3px] ml-[3px]' src="src/images/Navbar/profile.png" alt="profile" srcset="" />


                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
