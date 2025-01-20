import React from 'react'
import Navbar2 from '../../components/Navbar2'
import LeftNav from '../../components/LeftNav'
import NewCard from '../../components/NewCard'

function Events() {
  return (
    <>
    <section className='top'>
        <Navbar2 buttonTitle={"Add New"} title1={"Events"} />
      </section>

      <section className='main'>
        <div className="w-full mt-[-20px] flex gap-[240px] ">
          <LeftNav />
          <div className={`flex p-7 gap-4 flex-wrap w-full sm:w-[78%] rounded-xl mt-7  ml-[-310px] sm:ml-[-230px] bg-gray-100  `}>
            <div className={`flex flex-col sm:flex-row sm:ml-0 ml-[-10px] gap-3 flex-wrap  mt-[-5px]  `}>
              <NewCard />
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default Events
