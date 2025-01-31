import React from 'react'
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import Button1 from './Button1';

function LawyerForm() {
    const [btn, setbtn] = useState([<div>
        <input className="text-[12px] pl-5 h-9  border-2 rounded-2xl w-[33vw]" type="text" placeholder="Expertiese" />
    </div>])


    const handleBtn = ()=>{
setbtn((prev)=>[...prev, <div><input className="text-[12px] pl-5 h-9  border-2 rounded-2xl w-[33vw]" type="text" placeholder="Expertiese" key={prev.length} /></div> ])
    }

    const [image, setImage] = useState(null);
            const cloud = useCKEditorCloud({
                version: '44.0.0',
                premium: true
            });
        
            if (cloud.status === 'error') {
                return <div>Error!</div>;
            }
        
            if (cloud.status === 'loading') {
                return <div>Loading...</div>;
            }
        
            const {
                ClassicEditor,
                Essentials,
                Paragraph,
                Bold,
                Italic
            } = cloud.CKEditor;
        
            const { FormatPainter } = cloud.CKEditorPremiumFeatures;
        
        
            const handleImageChange = (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = () => setImage(reader.result);
                    reader.readAsDataURL(file);
                }
            };
  return (
    <>
    
    <div className=" w-screen md:w-[77vw] rounded-xl bg-gray-300">
                <div className=" w-full md:w-[77vw]  p-5">
                    <div className="bg-white rounded-xl p-10">
                        <div className="flex items-center space-x-4">
                            <div
                                onClick={() => document.getElementById("file-input").click()}
                                className="profile cursor-pointer p-4 bg-white rounded-md shadow  hover:bg-gray-200">
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
                                    className="w-32 h-32 rounded-md border border-gray-300"
                                />
                            )}

                            <input
                                type="file"
                                id="file-input"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div>
                            <input className="text-[12px] pl-5 h-9 mt-3 border-2 rounded-2xl w-[68vw]" type="text" placeholder="Enter Your Name" />
                        </div>
                        <div>
                            <input className="text-[12px] pl-5 h-9 mt-3 border-2 rounded-2xl w-[68vw]" type="text" placeholder="Enter Your Department" />
                        </div>
                        <div>
                            <input className="text-[12px] pl-5 h-9 mt-3 border-2 rounded-2xl w-[68vw]" type="text" placeholder="Number of Case" />
                        </div>
                        <div>

                            <div className="mt-5">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={'<p>description</p>'}
                                    config={{
                                        licenseKey: '<YOUR_LICENSE_KEY>',
                                        plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
                                        toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter']
                                    }}
                                />
                            </div>

                            <div className="mt-5 flex gap-3 flex-wrap">
                            {btn}
                        
                        
                            </div>

                            <div className="">
                                <Button1 onClick={handleBtn} title={"Add More Expertiese"}  text={"text-[12px]"}   color={"text-blue-500"} height={"h-14"} width={"w-[200px]"} svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none">
                  <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} />
                            </div>
                            <div className="mt-5 ml-[40vw] md:ml-[60vw]">
                                <Button1 title={"SUBMIT"} background={"bg-blue-800"} text={"text-[14px]"} border={"border-2"} round={"rounded-3xl"} color={"text-white"} height={"h-14"} width={"w-[140px]"} />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
   
    
    
    </>
  )
}

export default LawyerForm
