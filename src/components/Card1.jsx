import React from 'react'
import { useForm } from 'react-hook-form'

function Card1({title}) {


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

<div className='flex flex-col gap-3'>


<div>
<h2 className='text-[14px] text-[gray]'>{title}</h2>
</div>

   <div className='w-full sm:w-[24vw] rounded-3xl p-4 bg-gray-200'>

  
    <form onSubmit={handleSubmit(onSubmit)} action=''>
        <label className='text-[10px] text-[gray]' >Heading</label>
                <input className='w-[100%] rounded-xl h-8 text-[14px] pl-2 border-2' type="text" placeholder='Enter Heading' {...register("username", { required: { value: true, message: "This is required Field" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.username && <span>{errors.username.message}</span>}
                <br />
                <label className='text-[10px] text-[gray]' >Sub Heading</label>
                <input className='w-[100%] rounded-xl h-20  text-[14px] pl-2 border-2' type='text' placeholder='Sub Heading' {...register("userOccupation", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                {errors.userOccupation && <span>{errors.userOccupation.message}</span>}
              </form>
   
              </div>
              </div>

             
   </>
  )
}

export default Card1
