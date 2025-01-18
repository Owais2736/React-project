import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LeftNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        {/* Hamburger Icon */}
        <div
         onClick={toggleMenu}
          className="block md:hidden p-3 cursor-pointer  text-blue-800"
         
        >
          {isOpen ? (
            <span className="text-xl  font-bold">&#x2715; {/* Cross Icon */}</span>
          ) : (
            <span className="text-xl  font-bold">&#9776; {/* Hamburger Icon */}</span>
          )}
        </div>

        {/* Sidebar Menu */}
        <ul
          className={`md:mt-7 max-h-[430px] w-[100vw] md:w-full overflow-y-scroll overflow-x-hidden font-semibold bg-white transition-transform duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
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

     
    </>
  );
}

export default LeftNavbar;
