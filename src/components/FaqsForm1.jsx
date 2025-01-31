import React from 'react'
import { useState } from 'react'

function FaqsForm1() {
    const [form, setForm] = useState({ shortHeading: "Enter short Heading", heading: "Enter heading" })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 >Section 1</h2>

            <div className='flex mt-3 gap-[25vw] md:gap-[32vw] text-gray-500 mb-1 text-[12px]'>
                <label htmlFor="">Short heading</label>
                <label htmlFor="">Heading</label>
            </div>

            <div className='flex gap-2 w-full'>
                <input className='w-[50%] text-gray-500 h-9 p-2 rounded-md' type="text" name="shortHeading" id="" value={form.shortHeading ? form.shortHeading : ""} onChange={handleChange} />
                <input className='w-[50%] text-gray-500 h-9 p-2 rounded-md' type="text" name='heading' value={form.heading ? form.heading : ""} onChange={handleChange} />
            </div>
        </>
    )
}

export default FaqsForm1
