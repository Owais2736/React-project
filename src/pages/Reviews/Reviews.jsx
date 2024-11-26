import React from 'react'
import { useState } from 'react';
import { Button, message, Modal } from 'antd';
import reviews from "../../Json/reviews.json"
import Button1 from '../../components/Button1.jsx';
import { useForm } from "react-hook-form"
import LeftNav from '../../components/LeftNav.jsx';


function Reviews() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecModalOpen, setIsSecModalOpen] = useState(false);
  const [toogle, setToogle] = useState(false)

  const handleBtn = () => {
    setToogle(!toogle)
  }

  const showModal = () => {
    setIsModalOpen(true);
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


  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()


  const onSubmit = async (data) => {
    console.log(data)

  }
  return (
    <>
      <section className='top'>
        <div className='flex justify-between'>

          <div className={`font-bold text-[14px] ml-[21vw]  mt-4 ${!toogle ? "" : "hidden"}`}>Reviews</div>

          <div className={` mt-4`}>

            <div className={`font-bold text-[14px] ${!toogle ? "hidden" : ""} ml-[21vw]  `}>Create Reviews</div>

          </div>

          <div className={`  ${!toogle ? "" : "mr-[800px]"}   ${!toogle ? "" : "mr-[60vw] mt-2"}   `}>
            <Button1 onClick={handleBtn} title={toogle ? "Cancel" : "Add New"} background="bg-blue-200" width="w-[120px]" height="h-10" round="rounded-3xl" text="text-[12px]" color="text-[blue]" svg={
              toogle || (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none">
                  <path
                    d="M12 8V16M16 12L8 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )
            } />
          </div>

        </div>
      </section>

      <section className='main'>

        <div className="w-full  flex gap-[270px] ">

          <LeftNav/>

          <div className={`flex p-7 gap-4 flex-wrap w-[78%] rounded-xl mt-7  ml-[-250px] bg-gray-100  ${!toogle ? "" : "hidden"} `}>
            {reviews.map(review => {
              return (
                <div className='w-80 p-3 bg-[white]  border-2 rounded-[30px] flex flex-col gap-3 h-[250px]'>
                  <div onClick={showModal} className='ml-64 mt-1 bg-gray-100 rounded-md h-6 w-7 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="24" color="#000000" fill="none">
                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></div>

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

                  <div className='flex gap-3 items-center mt-[-30px] '>
                    <div className='w-[100px] h-[100px]'>
                      <img className='w-full h-full' src={review.src} alt="" />
                    </div>

                    <div className='font-semibold'>
                      <h2 className=''>{review.name}</h2>
                      <p >{review.occupation}</p>
                    </div>

                  </div>

                  <div>
                    <p className='text-[12px]'>{review.description}</p>
                  </div>
                </div>
              )
            })
            }
          </div>

          <div className={`w-[75%] ml-[-230px] mt-4 flex gap-4 rounded-xl bg-gray-200 p-11  ${!toogle ? "hidden" : ""} `}>
            <div className='w-24 cursor-pointer border-2 h-20 rounded-xl'>
              <img className='rounded-xl' src="src/images/Reviews/profile.jpg" alt="" srcset="" />
              <input className='w-24 rounded-lg' type="file" />
            </div>

            <div className='w-[70%]'>
              <form onSubmit={handleSubmit(onSubmit)} action=''>
                <input className='w-[120%] rounded-xl h-8 text-[14px] pl-2 border-2' type="text" placeholder='Enter Name' {...register("username", { required: { value: true, message: "This is required Field" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.username && <span>{errors.username.message}</span>}
                <br />
                <input className='w-[120%] rounded-xl h-8 mt-2 text-[14px] pl-2 border-2' type='text' placeholder='Enter Occupation' {...register("userOccupation", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                {errors.userOccupation && <span>{errors.userOccupation.message}</span>}

                <br />

                <input className='w-[120%] rounded-xl min-h-32  mt-2 text-[14px] pl-2 border-2 ' type='text' placeholder='Enter Reviews' {...register("userReview", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                {errors.userReview && <span>{errors.userReview.message}</span>}
                <br />
                <input className='w-[140px] h-8 mt-2 bg-blue-700 text-[white] font-semibold text-[14px] cursor-pointer rounded-xl' disabled={isSubmitting} type="submit" value="ADD" />
                {errors.forms && <span>{errors.forms.message}</span>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
