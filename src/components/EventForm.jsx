import React from 'react'
import GallaryForm1 from '../components/GallaryForm1'
import Button1 from '../components/Button1'
import EventForm2 from './EventForm2'


function EventForm() {

    return (
        <>
            <section className='main'>
                <div className="w-full mt-7 sm:mt-2 flex gap-[240px] ">

                    <div className={`flex flex-col gap-7  h-72 p-7 w-screen sm:w-[98%] rounded-xl mt-[-10px] ml-[-308px] sm:ml-0 bg-gray-100  `}>
                        <div>
                            <GallaryForm1 />
                        </div>

                        <div className='rounded-xl mt-8 w-screen  sm:w-[78vw] ml-[-27px] pt-3 p-7 bg-gray-100 '>
                        
                            <EventForm2 />


                        </div>

                        <div className='mt-[-14px] '>
                            <Button1 title={"ADD"} background={"bg-blue-800"} width={"w-[150px]"} height={"h-10"} color={"text-white"} round={"rounded-2xl"} text={"text-[14px]"} />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default EventForm
