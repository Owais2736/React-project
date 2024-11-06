import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftNavbar() {
  return (
    <>
      <div className='w-1/5 mt-7 max-h-[430px] overflow-y-scroll font-semibold'>
        <ul>
            
          <NavLink
            to="/" >
            <li className='ml-5 text-[14px] rounded-[60px] cursor-pointer p-2 w-[90%] hover:border-2 border-blue-800'>Dashboard</li>
          </NavLink>

          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Booking</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Team</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Departments</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Services</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>News and updates</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Events</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Gallery</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Reviews</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>FAQs</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Laws</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>Elements</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>WebContent</li>
          <li className='ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2  w-[90%]'>App content</li>
        </ul>
      </div>

      <footer>
        <div className='w-1/5 h-[80px] ml-6 font-semibold text-[14px] fixed bottom-0'>
setting

        </div>
      </footer>
    </>
  );
}

export default LeftNavbar;
