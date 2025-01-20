import React from 'react'
import LeftNav from '../../components/LeftNav'
import GallaryForm1 from '../../components/GallaryForm1'
import GalleryForm2 from '../../components/GalleryForm2'
import GalleryForm3 from '../../components/GalleryForm3'
import Button1 from '../../components/Button1'

function Gallery() {
  return (
    <>
      <section className='main'>
        <div className="w-full mt-7 sm:mt-2 flex gap-[240px] ">
          <LeftNav />
          <div className={`flex flex-col gap-7  h-72 p-7 w-full sm:w-[78%] rounded-xl mt-[-10px] ml-[-308px] sm:ml-[-230px] bg-gray-100  `}>
            <div>
              <GallaryForm1 />
            </div>

            <div className='rounded-xl mt-8 w-screen  sm:w-[78vw] ml-[-27px] pt-3 p-7 bg-gray-100 '>
              <GalleryForm2 />
            </div>
            <div className='rounded-xl mt-[-15px] w-screen sm:w-[78vw] ml-[-27px] pt-3 p-7 bg-gray-100 '>
              <GalleryForm3 />
            </div>
            <div className='mt-[-14px] ml-[200px] sm:ml-[65vw]'>
              <Button1 title={"Update"} background={"bg-blue-800"} width={"w-[150px]"} height={"h-10"} color={"text-white"} round={"rounded-2xl"} text={"text-[14px]"} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
