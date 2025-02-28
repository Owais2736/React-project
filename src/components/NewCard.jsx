import React from 'react'
import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import news from '../Json/NewAndUpdate.json'

function NewCard() {
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
                news.map(data => {
                    return (

                        <div key={data.name} className=' w-[320px] md:w-[36vw] bg-white rounded-xl'>
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
                            <div className='flex gap-4 p-3 mt-[-35px]'>
                                <div className='w-[200px] '>
                                    <img className='w-full h-[140px]' src={data.image} alt="" srcset="" />
                                </div>
                                <div>
                                    <h2>{data.title1} <br />{data.title2}</h2>
                                    <p className='text-[12px] text-gray-500'>{data.description1}<br />{data.description2}</p>
                                    <div className='flex justify-between mt-3'>
                                        <div>
                                            <p className='text-[14px] text-amber-700'>{data.name}</p>
                                        </div>
                                        <div>
                                            <h2 className='text-[14px] text-amber-700 font-semibold'>{data.date}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default NewCard
