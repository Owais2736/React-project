import React from 'react'
import { useState } from 'react'
import Button1 from '../components/Button1'

function Navbar2({ buttonTitle, title1 }) {
    const [toogle, setToogle] = useState(false)

    const handleBtn = () => {
        setToogle(!toogle)
    }
    return (
        <>
            <div className='flex justify-between'>

                <div className={`font-bold text-[14px] ml-4 sm:ml-[21vw]  mt-4 ${!toogle ? "" : "hidden"}`}>{title1}</div>

                <div className={` mt-4`}>

                    <div className={`font-bold text-[14px] ${!toogle ? "hidden" : ""} ml-[21vw]  `}>Create Reviews</div>

                </div>

                <div className={`  ${!toogle ? "" : "mr-[800px]"}   ${!toogle ? "" : "mr-[60vw] mt-2"}   `}>
                    <Button1 onClick={handleBtn} title={toogle ? "Cancel" : `${buttonTitle}`} background="bg-blue-200" width="w-[120px]" height="h-10" round="rounded-3xl" text="text-[12px]" color="text-[blue]" svg={
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

        </>
    )
}

export default Navbar2
