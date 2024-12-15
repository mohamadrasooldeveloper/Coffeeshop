import React from 'react'

import './Category.css';
export default function Category() {
  return (
    <div className='Category grid grid-cols-1 md:grid-cols-2 gap-5 my-[80px]'>
        <div className='Category__right  w-[100%] h-[142px] md:h-[248px] rounded-2xl flex justify-center flex-col pr-12'>
            <h5 className='font-DanaDemiBold text-2xl mb-4 md:mb-7 md:text-4xl text-white'>انواع قهوه</h5>                
            <span className='font-DanaMedium text-xl text-white'>ترکیبی و تک خاستگاه</span>
        </div>

        <div className='Category__left w-[100%] h-[142px] md:h-[248px] rounded-2xl flex justify-center flex-col pr-12'>
            <h5 className='font-DanaDemiBold text-2xl mb-4 md:mb-7 md:text-4xl text-white'>پودرهای فوری</h5>
            <span className='font-DanaMedium text-xl text-white'>نسکافه ،هات چاکلت، ماسالا</span>
        </div>
    </div>
  )
}
