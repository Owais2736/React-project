import React from 'react'
import { useState } from 'react'
import LeftNav from '../../components/LeftNav'
import Card1 from '../../components/Card1'
import Button1 from '../../components/Button1'
import Card2 from '../../components/Card2'

function AppContent() {
  const [toogle, setToogle] = useState("onboarding")
  return (
    <>
      <section className='top'>
        <div >
          <ul className="  flex gap-3 font-bold text-[14px] justify-center  " >
            <li className={`list-item cursor-pointer  ${toogle === "onboarding" ? "text-blue-500" : ""} `} onClick={() => { setToogle("onboarding"); console.log("click"); }} >On Boarding</li>
            <li className={`list-item cursor-pointer ${toogle === "termsAndCondition" ? "text-blue-500" : ""} `} onClick={() => { setToogle("termsAndCondition"); console.log("click"); }} >Terms and Conditions</li>
            <li className={`list-item cursor-pointer ${toogle === "privacy" ? "text-blue-500" : ""} `} onClick={() => setToogle("privacy")} >Privacy</li>
          </ul>
        </div>
      </section>

      <section className='main'>
        <div className="w-full  flex gap-[270px] ">
          <LeftNav />

          {toogle === "onboarding" && (
            <div className={`flex p-7 gap-3 flex-wrap w-[78%] rounded-xl mt-7  ml-[-250px] bg-gray-100  `}>
              <Card1 title={"Onboarding screen 01"} />
              <Card1 title={"Onboarding screen 02"} />
              <Card1 title={"Onboarding screen 03"} />
            </div>
          )}

          {toogle === "termsAndCondition" && (
            <div className={`flex p-7 gap-3 flex-wrap w-[78%] rounded-xl mt-7  ml-[-250px] bg-gray-100  `}>
              <Card2 />
            </div>
          )}

          {toogle === "privacy" && (
            <div className={`flex p-7 gap-3 flex-wrap w-[78%] rounded-xl mt-7  ml-[-250px] bg-gray-100  `}>
              <Card2 />
            </div>
          )}
        </div>
        <div className='fixed right-0 mt-4 '>
          <Button1 text={"text-[12px]"} title={"UPDATE"} round={"rounded-2xl"} background={"bg-blue-700"} width={"w-[120px]"} height={"h-9"} color={"text-[white]"} />
        </div>
      </section>
    </>
  )
}

export default AppContent
