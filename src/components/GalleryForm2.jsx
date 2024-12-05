import React from 'react'
import { useForm } from 'react-hook-form'


function GalleryForm2() {
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
     <form onSubmit={handleSubmit(onSubmit)} action=''>
                <label className='text-[10px] text-[gray]' >Heading</label><br />
                <input className='w-[74vw] rounded-xl h-12 text-[14px] pl-2 ' type="text" placeholder='Enter Heading' {...register("username", { required: { value: true, message: "This is required Field" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.username && <span>{errors.username.message}</span>}
                

            </form>
    
    </>
  )
}

export default GalleryForm2
