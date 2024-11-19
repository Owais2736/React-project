import React from 'react';

function Button({title,background,width, height, round , text,color , svg}) {



  return (
    <>
      <button className={`${width} ${height} ${background} ${round} ${text} ${color} font-bold mr-6`}   >

        <div className='flex justify-center items-center gap-1'>
          <div>
          {svg} 
          </div>
          <div>
          {title}
          </div>
        </div>
      
      </button>
    </>
  );
}

export default Button;
