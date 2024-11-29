import React from 'react'
import service from '../Json/Services.json'
import { Button, message, Modal } from 'antd';
import { useState } from 'react';

function ServiceCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecModalOpen, setIsSecModalOpen] = useState(false);

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
            {
                service.map(data => {
                    return (
                        <div key={data.title} className='card flex flex-col gap-3 w-[330px] rounded-xl  p-3 border-2'>
                            <div onClick={showModal} className='cursor-pointer ml-[300px] w-[25px] mt-[-20px] h-6 rounded-lg bg-gray-300 '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="24" color="#000000" fill="none">
                                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
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
                            <div className=' mt-[-10px]'>
                                <img src={data.image} alt="" srcset="" />
                            </div>
                            <div>
                                <h2 className='font-bold text-[18px]'>{data.title}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ServiceCard
