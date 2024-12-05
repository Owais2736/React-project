import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';

function GalleryForm3() {
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
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
            <form onSubmit={handleSubmit(onSubmit)} action=''>
                <div className="bg-gray-100 flex items-center mt-2  min-h-12">
                    <div className="flex items-center space-x-4">
                        <div
                            onClick={() => document.getElementById("file-input").click()}
                            className="cursor-pointer p-4 bg-white rounded-lg shadow hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-36 h-24 text-gray-600" >
                                <path d="M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6" />
                                <path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" />
                                <path d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z" />
                                <path d="M11.9998 6H12.0088" strokeLinecap="round" />
                            </svg>
                        </div>

                        {image && (
                            <img
                                src={image}
                                alt="Selected"
                                className="w-32 h-32 rounded-lg border border-gray-300"
                            />
                        )}

                        <input
                            type="file"
                            id="file-input"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}
export default GalleryForm3
