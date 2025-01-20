import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'




function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return (
        <>

            <div className='flex sm:justify-between justify-start w-screen z-10 sticky top-0 h-[80px] bg-white items-center sm:p-10  '>

  {/* Hamburger Icon */}
  <div
         onClick={toggleMenu}
          className="block md:hidden p-3   cursor-pointer  text-blue-800"
         
        >
          {isOpen ? (
            <span className="text-xl   font-bold"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg></span>
          ) : (
            <span className="text-xl  font-bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg></span>
          )}
        </div>

 <div className="cursor-pointer mt-9 md:hidden block  ml-[-10px]  ">
      

        {/* Sidebar Menu */}
        <ul
          className={`md:mt-7 mt-[450px] ml-[-60px] max-h-[430px] w-screen md:w-full overflow-y-scroll overflow-x-hidden font-semibold bg-white transition-transform duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <center>
          <div className='w-[200px]  h-auto'>
                        <img className='w-full h-full' src="images/Navbar/logo.png" alt="Logo" srcset="" />
                    </div> 
                    </center>  
          <NavLink to="/">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/booking">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Booking
            </li>
          </NavLink>
          <NavLink to="/team">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Team
            </li>
          </NavLink>
          <NavLink to="/department">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Departments
            </li>
          </NavLink>
          <NavLink to="/service">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Services
            </li>
          </NavLink>
          <NavLink to="/news">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              News and updates
            </li>
          </NavLink>
          <NavLink to="/event">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Events
            </li>
          </NavLink>
          <NavLink to="/gallery">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Gallery
            </li>
          </NavLink>
          <NavLink to="/review">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Reviews
            </li>
          </NavLink>
          <NavLink to="/faqs">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              FAQs
            </li>
          </NavLink>
          <NavLink to="/law">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Laws
            </li>
          </NavLink>
          <NavLink to="/element">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              Elements
            </li>
          </NavLink>
          <NavLink to="/webcontent">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              WebContent
            </li>
          </NavLink>
          <NavLink to="/appcontent">
            <li className="ml-5 text-[14px] hover:border-2 border-blue-800 rounded-[60px] cursor-pointer p-2 w-[90%]">
              App content
            </li>
          </NavLink>
           <footer>
        <div className="w-1/5 h-[80px] ml-6 font-semibold text-[14px] fixed bottom-0">
          setting
        </div>
      </footer>
        </ul>
      </div>
      

                <div className='flex items-center sm:gap-16 gap-6 sm:p-14 p-10  '>
                    <div className='w-[100px] md:w-[130px] h-auto'>
                        <img className='w-full h-full' src="images/Navbar/logo.png" alt="Logo" srcset="" />
                    </div>

                    <div className='w-[140px] md:w-[150px] text-[24px] h-[70px] font-bold mt-9 '>
                        <p className='text-center'><span className='text-blue-800'>38</span> Bookings</p>

                    </div>

                </div>



                <div className='hidden sm:flex sm:items-center sm:gap-5'>
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

                        <img className='w-[40px] h-[40px] border-2 rounded-[100px] mt-[3px] ml-[3px]' src="images/Navbar/profile.png" alt="profile" srcset="" />


                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
