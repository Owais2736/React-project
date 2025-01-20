import React from 'react'
import LeftNav from '../../components/LeftNav'
import ServiceCard from '../../components/ServiceCard'
import Navbar2 from '../../components/Navbar2'
function Services() {
  return (
    <>
      <section className='top mt-8 sm:mt-3'>
        <Navbar2 buttonTitle = {"Add Services"} title1 = {"Services"}/>
      </section>
      
      <section className='main'>
        <div className="w-full mt-1 sm:mt-[-20px]  flex gap-[240px] ">
          <LeftNav />
          <div className={`flex  gap-4 flex-wrap  mt-7  `}>
            <ServiceCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
