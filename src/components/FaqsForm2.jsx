import React from 'react'
import { Button, message, Modal } from 'antd';


import { useState } from 'react'

function FaqsForm2() {
    const [form, setform] = useState({desc:"Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning." , name: "What types of cases does your firm handle?"})

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


    const handleChange = (e)=>{
        setform({...form,[e.target.name]:e.target.value})

    }
  return (
   
   <>
<div className='w-full sm:w-[36vw] bg-gray-200 rounded-xl p-4'>
<div className='flex justify-between'>
    <div>
        <h2 className='text-[12px] text-gray-500'>Question</h2>
    </div>
    <div onClick={showModal} className='cursor-pointer  w-[25px]  h-6 rounded-lg bg-gray-300 '>
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
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

</div>

<input className='w-full h-9 rounded-lg mt-3 text-[14px] p-2' type="text" name='name' value={form.name?form.name:""} onChange={handleChange} />

<h2 className='text-[12px] text-gray-500 mt-2'>Answer</h2>
<textarea 
  className='w-full rounded-lg mt-2 text-[14px] p-3' 
  name='desc'
  value={form.desc?form.desc:""} 
  rows={4} 
  onChange={handleChange}
/>
</div>


   </>
  )
}

export default FaqsForm2
