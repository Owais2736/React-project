import React from 'react'
import { useState } from 'react'
import Button1 from '../../components/Button1'
import LeftNav from '../../components/LeftNav'
import NewCard from '../../components/NewCard'
import EventForm from '../../components/EventForm'

function Update() {
   const [toogle, setToogle] = useState(false)
      
        const handleBtn = () => {
          setToogle(!toogle)
        }
  return (
    <>
     <section className='top'>
        <div className='flex justify-between items-center text-center mt-8 sm:mt-3'>
          <div className={`font-bold text-[14px] ml-4 sm:ml-[21vw]   ${!toogle ? "" : "hidden"}`}>News And Updates</div>
          <div className={` mt-4`}>
            <div className={`font-bold text-[14px] ${!toogle ? "hidden" : ""} ml-4 sm:w-[160px] w-[100px] sm:ml-[19vw]  `}>Create News</div>
          </div>
          <div className={`  ${!toogle ? "" : "mr-[800px]"}   ${!toogle ? "" : "mr-[60vw] mt-2"}  cursor-pointer  `}>
            <Button1 onClick={handleBtn} title={toogle ? "Cancel" : "Add New"} background="bg-blue-200" width="w-[120px]" height="h-10" round="rounded-3xl" text="text-[12px]" color="text-[blue]" svg={
              toogle || (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none">
                  <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>)} />
          </div>
        </div>
      </section>

      <section className='main'>
        <div className="w-full mt-[-20px] flex gap-[240px] ">
          <LeftNav />
          <div className={`flex  p-7 gap-4 flex-wrap w-full sm:w-[78%] rounded-xl mt-7 ml-[-310px]  sm:ml-[-230px] bg-gray-100 ${!toogle ? "" : "hidden"}  `}>
            <div className={`flex flex-col sm:flex-row sm:ml-0 ml-[-10px] gap-3 flex-wrap  mt-[-5px]  `}>
              <NewCard />
            </div>
          </div>
          <div className={`mt-10 sm:ml-[0px]  ml-[70px] ${!toogle ? "hidden" : ""}`}>
            <EventForm />
           </div> 
        </div>
      </section>
    </>
  )
}

export default Update
