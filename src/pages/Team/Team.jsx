import React from 'react'
import { useState } from 'react'
import Button1 from '../../components/Button1'
import { Button, message, Modal } from 'antd';
import LeftNav from '../../components/LeftNav'
import team from '../../Json/team.json'

function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecModalOpen, setIsSecModalOpen] = useState(false);
  const [toogle, setToogle] = useState(false)

  const handleBtn = () => {
    setToogle(!toogle)
  }
  const showModal = () => {
    setIsModalOpen(true);
    console.log("click");

  };
  const handleOk = () => {
    setIsSecModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSecOk = () => {
    setIsSecModalOpen(false);
    setIsModalOpen(false);
  };
  const handleSecCancel = () => {
    setIsSecModalOpen(false);
  };

  return (
    <>
      <section className='top'>
        <div className='flex justify-between items-center mt-8'>
          <div className={`font-bold text-[14px] ml-[21vw]  mt-4 ${!toogle ? "" : "hidden"}`}>26 Lawyers</div>
          <div className={` mt-4`}>
            <div className={`font-bold text-[14px] ${!toogle ? "hidden" : ""} ml-[21vw]  `}>Create Team</div>
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
        <div className="w-full mt-[-10px] flex gap-[270px] ">
          <LeftNav />
          <div className={`flex flex-col sm:flex-row p-4 gap-4 flex-wrap w-full sm:w-[78%] rounded-xl mt-4 ml-[-350px]  sm:ml-[-250px] bg-gray-100  ${!toogle ? "" : "hidden"} `}>
            {team.map(data => {
              return (
                <div key={data.name} className='card w-[full] sm:w-[24vw] h-[400px] rounded-xl  bg-white'>
                  <Modal className='' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <center>
                      <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20%" height="20%" color="red" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M11.992 15H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12L12 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></p>
                      <br />
                      <p className='font-bold text-[30px]'>Are you sure?</p>
                      <p className='text-[16px] leading-9'>Are you sure that you want to delete?</p>
                    </center>
                  </Modal>
                  <Modal className='' open={isSecModalOpen} onOk={handleSecOk} onCancel={handleSecCancel}>
                    <center>
                      <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20%" height="20%" color="green" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></p>
                      <br />
                      <p className='font-bold text-[30px]'>Successfully Delete</p>
                    </center>
                  </Modal>
                  <div className='flex flex-col pl-4 gap-3'>
                    <div className='flex gap-5 pt-9  items-center mt-[-30px] '>
                      <div className='w-[50px] rounded-lg h-[50px]'>
                        <img className='h-full w-full rounded-lg' src={data.src} alt="" srcset="" />
                      </div>
                      <div className='font-semibold'>
                        <h2 className='font-bold text-[16px]'>{data.name}</h2>
                        <p className='text-[12px] text-[brown]'>{data.department}</p>
                      </div>
                      <div onClick={showModal} className=' w-[27px] mt-[-10px] ml-4 rounded-lg bg-gray-400 cursor-pointer '>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="24" color="#000000" fill="none">
                          <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <Button1 title={"100+ Cases"} borderColor={"border-orange-400"} border={"border-2"} round={"rounded-lg"} width={"w-[160px]"} height={"h-14"} svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35px" height="35px" color="brown" fill="none">
                        <path d="M9.42613 3.06269C10.6836 2.35423 11.3124 2 12 2C12.6876 2 13.3164 2.35423 14.5739 3.06269L16.3239 4.04861C17.6292 4.78401 18.2819 5.15171 18.6409 5.76664C19 6.38157 19 7.13157 19 8.63158V10.3684C19 11.8684 19 12.6184 18.6409 13.2334C18.2819 13.8483 17.6292 14.216 16.3239 14.9514L14.5739 15.9373C13.3164 16.6458 12.6876 17 12 17C11.3124 17 10.6836 16.6458 9.42613 15.9373L7.67613 14.9514C6.37081 14.216 5.71815 13.8483 5.35908 13.2334C5 12.6184 5 11.8684 5 10.3684V8.63158C5 7.13157 5 6.38157 5.35908 5.76664C5.71815 5.15171 6.37081 4.78401 7.67613 4.04861L9.42613 3.06269Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M9 10.1667C9 10.1667 9.75 10.1667 10.5 11.5C10.5 11.5 12.8824 8.16667 15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.8825 15L17.5527 18.2099C17.9833 20.2723 18.1986 21.3035 17.7563 21.7923C17.3141 22.281 16.546 21.8606 15.0099 21.0198L12.7364 19.7753C12.3734 19.5766 12.1919 19.4773 12 19.4773C11.8081 19.4773 11.6266 19.5766 11.2636 19.7753L8.99008 21.0198C7.45397 21.8606 6.68592 22.281 6.24365 21.7923C5.80139 21.3035 6.01669 20.2723 6.44731 18.2099L7.11752 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>} />
                    </div>
                    <div className=''>
                      <p className='text-[12px] text-[gray] w-[270px]'>{data.description}</p>
                    </div>
                    <div className='font-bold text-[16px] '>
                      <h2>Experties</h2>
                    </div>
                    <div className='flex'>
                      <div>
                        <Button1 title={"Civil Litigotion"} background={"bg-red-400"} color={"text-white"} round={"rounded-xl"} width={"w-[120px]"} height={"h-10"} text={"text-[14px]"} />
                      </div>
                      <div className=' ml-[-20px]'>
                        <Button1 title={"Criminal Defence"} background={"bg-red-400"} color={"text-white"} round={"rounded-xl"} width={"w-[150px]"} height={"h-10"} text={"text-[14px]"} />
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <Button1 title={"Family Law"} background={"bg-red-400"} color={"text-white"} round={"rounded-xl"} width={"w-[100px]"} height={"h-10"} text={"text-[14px]"} />
                      </div>
                      <div className=' ml-[-20px]'>
                        <Button1 title={"Corporate Law"} background={"bg-red-400"} color={"text-white"} round={"rounded-xl"} width={"w-[150px]"} height={"h-10"} text={"text-[14px]"} />
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <Button1 title={"Itellactual Property Law"} background={"bg-red-400"} color={"text-white"} round={"rounded-xl"} width={"w-[200px]"} height={"h-10"} text={"text-[14px]"} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
