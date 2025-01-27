import React from 'react'
import { useState } from 'react'
import LeftNav from '../../components/LeftNav'
import FaqsForm1 from '../../components/FaqsForm1'
import FaqsForm2 from '../../components/FaqsForm2'
import Button1 from '../../components/Button1'

function Laws() {
  const [form, setform] = useState([<FaqsForm2 />, <FaqsForm2 />, <FaqsForm2 />, <FaqsForm2 />])

  const handleBtn = () => {
    setform((preForm) => [...preForm, <FaqsForm2 key={preForm.length} />])

  }
  return (
    <>
     <section className='main'>
        <div className="w-full flex gap-[240px] ">
          <LeftNav />

          <div className={` p-7  w-full sm:w-[78%] rounded-xl mt-7  ml-[-310px] sm:ml-[-230px] bg-gray-100  `}>
            <FaqsForm1 />

            <div className={` flex  flex-col sm:flex-row   gap-4 flex-wrap w-full  rounded-xl mt-3   sm:ml-0 pt-5  bg-gray-100  `}>

              {form}
            </div>
            <div className={` mt-3  cursor-pointer  `}>
              <Button1 onClick={handleBtn} title={"Add New"} background="bg-blue-200" width="w-[120px]" height="h-10" round="rounded-3xl" text="text-[12px]" color="text-[blue]" svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none">
                  <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} />
            </div>

          </div>

        </div>
        
      </section>

    
    </>
  )
}

export default Laws
