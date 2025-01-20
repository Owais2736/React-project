import React from 'react'
import { useState } from 'react';
import Button1 from "../components/Button1"
import dashboard from '../Json/dashboard.json'
import { Button, Card, Modal } from 'antd';

function DashboardCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //   const handleComplete = () => {
  // console.log('click');
  //     setIsModalOpen(false);

  //   };

  //   const handleCancelled = () => {
  // console.log('click');
  //     setIsModalOpen(false);
  //   };
  return (
    <>

      <div className='flex flex-col ml-6 sm:flex-row w-[95vw]  mt-2 gap-6 sm:w-[73vw]'>
        {dashboard.map(data => {
          return (
            <div onClick={showModal} key={data.name} className="card1 p-5 sm:w-[31vw] w-[93vw] ml-[-27px] sm:ml-0 rounded-xl flex flex-col gap-1 bg-gray-100 "  >

              <Modal
                open={isModalOpen}
                footer={null}

              // onCancel={handleCancelled}

              >

                <br />
                <div className="flex justify-between gap-5">
                  <div className="font-bold text-[20px]">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="flex gap-2">

                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                        <path d="M18.2505 10.5H19.6403C21.4918 10.5 22.0421 10.7655 21.9975 12.0838C21.9237 14.2674 20.939 16.8047 17 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M5.94627 20.6145C2.57185 18.02 2.07468 14.3401 2.00143 10.5001C1.96979 8.8413 2.45126 8.5 4.65919 8.5H15.3408C17.5487 8.5 18.0302 8.8413 17.9986 10.5001C17.9253 14.3401 17.4281 18.02 14.0537 20.6145C13.0934 21.3528 12.2831 21.5 10.9194 21.5H9.08064C7.71686 21.5 6.90658 21.3528 5.94627 20.6145Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M11.3089 2.5C10.7622 2.83861 10.0012 4 10.0012 5.5M7.53971 4C7.53971 4 7 4.5 7 5.5M14.0012 4C13.7279 4.1693 13.5 5 13.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div className="font-bold">
                      <p>Coffee</p>
                    </div>
                  </div>


                </div>

                <div className="department text-[14px]">
                  <p>{data.department}</p>

                </div>

                <div className="flex gap-2 mt-3">

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                      <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.5 8H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="font-semibold text-[14px]">
                    <p>{data.date}</p>
                  </div>
                </div>

                <div className="flex justify-start  mt-5">

                  <div>
                    <Button1 title="Evening" background="bg-white" round="rounded-xl" width="w-[100px]" height="h-9" svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                      <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>} />
                  </div>

                  <div>
                    <Button1 title="Office" background="bg-white" round="rounded-xl" width="w-[100px]" height="h-9" svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                      <path d="M14 22V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M18.5 15H17.5M18.5 11H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M18 8H14V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>} />
                  </div>

                </div>

                <div className="flex gap-2 justify-center mt-3">
                  <div className="text-[12px] text-[blue] ml-[-15px]"><p>Lawyer</p></div>
                  <div className="w-64 h-[6px] mt-2 bg-blue-600 border-2"></div>
                </div>

                <div className="flex gap-3 justify-center mt-3 ml-[-100px]">

                  <div className="w-12 h-5 rounded-xl">
                    <img className="rounded-xl" src="src/images/Reviews/profile.jpg" alt="" srcset="" />
                  </div>

                  <div className="leading-5">
                    <h2 className="font-semibold text-[16px]">{data.name}</h2>
                    <p className="text-[14px]">{data.department}</p>
                  </div>


                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button type="primary" onClick={showModal} style={{ marginRight: '10px' }}>
                    Complete
                  </Button>
                  <Button onClick={showModal}>Cancelled</Button>
                </div>
              </Modal>


              <div className="flex justify-between gap-5">
                <div className="font-bold text-[20px]">
                  <h2>{data.name}</h2>
                </div>


                <div className="flex gap-2">

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                      <path d="M18.2505 10.5H19.6403C21.4918 10.5 22.0421 10.7655 21.9975 12.0838C21.9237 14.2674 20.939 16.8047 17 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5.94627 20.6145C2.57185 18.02 2.07468 14.3401 2.00143 10.5001C1.96979 8.8413 2.45126 8.5 4.65919 8.5H15.3408C17.5487 8.5 18.0302 8.8413 17.9986 10.5001C17.9253 14.3401 17.4281 18.02 14.0537 20.6145C13.0934 21.3528 12.2831 21.5 10.9194 21.5H9.08064C7.71686 21.5 6.90658 21.3528 5.94627 20.6145Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M11.3089 2.5C10.7622 2.83861 10.0012 4 10.0012 5.5M7.53971 4C7.53971 4 7 4.5 7 5.5M14.0012 4C13.7279 4.1693 13.5 5 13.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="font-bold">
                    <p>Coffee</p>
                  </div>
                </div>


              </div>

              <div className="department text-[14px]">
                <p>{data.department}</p>

              </div>

              <div className="flex gap-2 mt-3">

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                    <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.5 8H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className="font-semibold text-[14px]">
                  <p>{data.date}</p>
                </div>
              </div>

              <div className="flex justify-start   mt-5">

                <div>
                  <Button1 title="Evening" background="bg-white" round="rounded-xl" width="w-[100px]" height="h-9" svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>} />
                </div>

                <div>
                  <Button1 title="Office" background="bg-white" round="rounded-xl" width="w-[100px]" height="h-9" svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="brown" fill="none">
                    <path d="M14 22V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M18.5 15H17.5M18.5 11H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M18 8H14V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>} />
                </div>

              </div>



              <div className="flex gap-3 ml-5 justify-start mt-3">
                <div className="text-[12px] text-[blue] ml-[-15px]"><p>Lawyer</p></div>
                <div className="w-64 h-[6px] mt-2 bg-blue-600 border-2"></div>
              </div>

              <div className="flex gap-3 justify-start mt-3 ">

                <div className="w-12 h-5 rounded-xl">
                  <img className="rounded-xl" src="src/images/Reviews/profile.jpg" alt="" srcset="" />
                </div>

                <div className="leading-5">
                  <h2 className="font-semibold text-[16px]">{data.name}</h2>
                  <p className="text-[14px]">{data.department}</p>
                </div>
              </div>

            </div>

          )
        })}
      </div>
    </>
  )
}

export default DashboardCard
