import React from 'react'
import LeftNav from '../../components/LeftNav'
import NewCard from '../../components/NewCard'

function WebContent() {
  return (
  <>
   <section className='main'>
        <div className="w-full mt-[-20px] flex gap-[240px] ">
          <LeftNav />
          <div className={`flex p-7 gap-4 flex-wrap w-full sm:w-[78%] rounded-xl mt-7  ml-[-310px] sm:ml-[-230px] bg-gray-100  `}>
  
          </div>
        </div>
      </section>   
  
  
  </>
  )
}

export default WebContent
