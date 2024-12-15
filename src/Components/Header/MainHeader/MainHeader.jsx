import React from 'react';


import './MainHeader.css';
import './MainHeader.media.css'


export default function MainHeader() {
  return (
      <div className='min-h-[20rem] md:min-h-screen flex justify-end items-center md:w-[90%]'>

      <div className='MainHeader text-white justify-end'>
      <h1 className='shadow-Normal md:text-6xl md:mb-2 font-MorabbaBold text-[24px] md:text-[60px]'>قهوه عربیکا تانزانیا</h1>
      <h3 className=" text-orange-300 mt-2 font-Morabbalight text-[20px] md:text-[48px]">یک فنجان بالانس!</h3>
      <span className="block w-[100px] h-0.5 bg-orange-300 my-3 md:my-8"></span>
      <p className="text-xs md:text-2xl max-w-[201px] md:max-w-[460px]">
        قطعا نام آشنای عربیکا را شنیده‌اید، عربیکا یکی از گونه‌های قهوه است که در نواحی مختلف کمربند قهوه کشت می‌شود.
      </p>

      </div>
      </div>

  );
}
