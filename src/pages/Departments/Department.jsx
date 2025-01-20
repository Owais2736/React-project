import React from 'react'
import Navbar2 from '../../components/Navbar2'
import LeftNav from '../../components/LeftNav'
import DepartmentCard from '../../components/DepartmentCard'

function Department() {
  return (
    <>
      <section className='top mt-8 sm:mt-3'>
        <Navbar2 buttonTitle={"Add New"} title1={"26 Departments"} />
      </section>

      <section className='main'>
        <div className="w-full mt-[-20px] flex gap-[240px] ">
          <LeftNav />
          <div className={`flex flex-col sm:flex-row p-7 gap-4 flex-wrap w-full sm:w-[78%] rounded-xl mt-7 ml-[-315px] sm:ml-[-230px] bg-gray-100  `}>
            <div className={`flex flex-col sm:flex-row justify-start ml-[-14px]  gap-3 flex-wrap  mt-[-5px]  `}>
              <DepartmentCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Department
