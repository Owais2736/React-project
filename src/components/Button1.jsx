import React from 'react';

function Button({title,background,width, height, round , text,color , svg , onClick,tooglee, input, border,borderColor }) {



  return (
    <>

      <button onClick={onClick} className={`${width} ${height} ${border} ${borderColor} ${background} ${round} ${text} ${color} font-bold mr-6`}   >

        <div className='flex justify-center items-center gap-1'>
          <div>
          {svg} 
          </div>
          <div>
          {title}
          </div>
          <div>{input}</div>
          <div>
          {tooglee}
          </div>
        </div>
      
      </button>
    </>
  );
}

export default Button;
