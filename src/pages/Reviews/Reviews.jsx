import React from 'react'
import LeftNavbar from '../../components/LeftNavbar'
import reviews from "../../Json/reviews.json"


function Reviews() {
  return (
    <>
      <div className="w-full flex ">

        <div className="w-[40%]">

          <LeftNavbar />

        </div>



        <div className="flex p-7 flex-wrap w-[77%] ml-[-250px] bg-gray-100">


          {reviews.map(review => {
            return (
              <div className='w-1/3 p-3 bg-[white]  border-2 rounded-[30px] flex flex-col gap-3 h-[250px]'>

                <div className='flex gap-3 items-center '>
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

      </div>

    </>
  )
}

export default Reviews
