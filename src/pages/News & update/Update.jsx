import React from 'react'
import Navbar2 from '../../components/Navbar2'
import LeftNav from '../../components/LeftNav'
import NewCard from '../../components/NewCard'

function Update() {
  return (
    <>
      <section className='top'>
        <Navbar2 buttonTitle={"Add New"} title1={"News and updates"} />
      </section>

      <section className='main'>
        <div className="w-full mt-[-20px] flex gap-[240px] ">
          <LeftNav />
          <div className={`flex p-7 gap-4 flex-wrap w-[78%] rounded-xl mt-7  ml-[-230px] bg-gray-100  `}>
            <div className={`flex  gap-3 flex-wrap  mt-[-5px]  `}>
              <NewCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Update
