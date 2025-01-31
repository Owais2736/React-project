import React from 'react'
import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import department from "../Json/department.json"

function DepartmentCard() {
    const [imdodalOpen, setImdodalOpen] = useState(false);
    const [isSecModalOpen, setIsSecModalOpen] = useState(false);

    const showModal = () => {
        setImdodalOpen(true);
        console.log("click");

    };
    const handleOk = () => {
        setIsSecModalOpen(true);
    };
    const handleCancel = () => {
        setImdodalOpen(false);
    };

    const handleSecOk = () => {
        setIsSecModalOpen(false);
        setImdodalOpen(false);
    };
    const handleSecCancel = () => {
        setIsSecModalOpen(false);
    };

    return (
        <>
            {
                department.map(data => {
                    return (
                        <div className='md:w-[24vw] w-[360px]  bg-white rounded-2xl '>
                            <div onClick={showModal} className='cursor-pointer ml-auto w-[25px] mt-[-20px] h-6 rounded-md bg-gray-300 '>
                                <svg className='mt-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Modal className='' open={imdodalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                            <div className='flex mt-[-35px] gap-4 p-3'>
                                <div className='h-[150px] w-[140px]'>
                                    <img className='w-full h-full' src="images/Departments/profile.png" alt="" srcset="" />
                                </div>
                                <div className='mt-3'>
                                    <h2 className='font-semibold text-[20px] leading-6'>{data.name} <br /> {data.name2}</h2>
                                    <p className='text-[14px] text-amber-700'>{data.noOfLawyer}</p>

                                    <div className='flex  mt-2'>
                                        <div className='w-8 rounded-full'>
                                            <img className='w-full h-full rounded-full' src={data.image1} alt="" srcset="" />
                                        </div>
                                        <div className='w-8 rounded-full ml-[-10px]'>
                                            <img className='w-full h-full  rounded-full' src={data.image2} alt="" srcset="" />
                                        </div>
                                        <div className='w-8 h-8 rounded-full ml-[-10px]'>
                                            <img className='w-full h-full rounded-full' src={data.image3} alt="" srcset="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-[12px] p-4 pt-0 text-gray-500'>{data.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default DepartmentCard
