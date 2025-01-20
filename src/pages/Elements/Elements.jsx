import React from 'react'
import LeftNav from '../../components/LeftNav.jsx';
import { useForm } from "react-hook-form"

function Elements() {
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

      <section className='main'>
        <div className="left w-full mt-6 flex gap-[270px] ">
          <LeftNav />

          <div className={`flex p-7 gap-4 flex-wrap w-full sm:w-[76%] rounded-xl mt-7 ml-[-340px]  sm:ml-[-250px] bg-gray-100  `}>
            <div className='w-[70%]'>
              <form onSubmit={handleSubmit(onSubmit)} action=''>
                <label className='text-[10px] text-[gray]'>Know Your Rights</label>
                <input className='w-[144%] rounded-xl h-11 text-[14px] pl-2 border-2' type="text" placeholder='Enter text' {...register("username", { required: { value: true, message: "This is required Field" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.username && <span>{errors.username.message}</span>}
                <br />
                <label className='text-[10px] text-[gray]'>Nav Book a Consultation button</label>
                <input className='w-[144%] rounded-xl h-11 text-[14px] pl-2 border-2' type="text" placeholder='Enter text' {...register("username", { required: { value: true, message: "This is required Field" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.username && <span>{errors.username.message}</span>}
                <br />
                <label className='text-[10px] text-[gray]'>Testimonials</label>
                <input className='w-[144%] rounded-xl h-11 mt-2 text-[14px] pl-2 border-2' type='text' placeholder='Enter text' {...register("userOccupation", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                {errors.userOccupation && <span>{errors.userOccupation.message}</span>}
                <br />
                <label className='text-[10px] text-[gray]'>Home</label>
                <input className='w-[144%] rounded-xl h-11  mt-2 text-[14px] pl-2 border-2 ' type='text' placeholder='Enter text' {...register("userReview", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                {errors.userReview && <span>{errors.userReview.message}</span>}
                <br />
                <input className='w-[140px] ml-[210px] sm:ml-[60vw] h-8 mt-2 bg-blue-700 text-[white] font-semibold text-[14px] cursor-pointer rounded-xl' disabled={isSubmitting} type="submit" value="ADD" />
                {errors.forms && <span>{errors.forms.message}</span>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Elements
