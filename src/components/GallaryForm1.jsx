import React from 'react'
import { useForm } from 'react-hook-form'

function GallaryForm1() {
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
                <label className='text-[10px] text-[gray]' >Meta Tags</label><br />
                <input className='w-[74vw] rounded-xl h-12 text-[14px] pl-2 ' type="text" placeholder='Enter Meta Tags' {...register("username", { required: { value: true, message: "This is required Field" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.username && <span>{errors.username.message}</span>}
                <br />
                <div className='flex gap-3 mt-1'>
                    <div>
                        <label className='text-[10px] text-[gray]' >Meta Description</label><br />
                        <input className='w-[36vw] rounded-xl h-28   text-[14px] pl-2 ' type='text' placeholder='Enter Meta Description' {...register("userOccupation", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                        {errors.userOccupation && <span>{errors.userOccupation.message}</span>}
                    </div>
                    <div>
                        <label className='text-[10px] text-[gray]' >Scheme Code</label><br />
                        <input className='w-[37vw] rounded-xl h-28   text-[14px] pl-2 ' type='text' placeholder='Scheme Code' {...register("userOccupation", { required: { value: true, message: "This is required field" }, minLength: { value: 5, message: "Min length is 5" } })} />
                        {errors.userOccupation && <span>{errors.userOccupation.message}</span>}
                    </div>
                </div>

            </form>


        </>
    )
}

export default GallaryForm1
