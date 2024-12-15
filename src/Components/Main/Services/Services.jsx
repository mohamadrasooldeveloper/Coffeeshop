import React from 'react'
import './Services.css';
export default function Services() {
  return (
    <div className='Services flex items-center flex-wrap child:w-1/2 lg:child:w-auto gap-y-11 my-20 font-DanaDemiBold justify-between'>
        <div className="Services flex items-center flex-col md:flex-row gap-x-4 gap-y-5 text-center lg:text-right ">
            <img src="/Images/services/support.svg" alt="image/png" className='w-[108px] h-[73px]' />
            <div className="flex flex-col items-center">
            <h6 className='text-zinc-700 dark:text-white mb-1 md:mb-3.5'>پشتیبانی شبانه روزی</h6>
            <div className='flex items-center'>
            <span className='text-zinc-700 dark:text-white'>7روز هفته،24ساعته</span>

            </div>
            </div>
        </div>
        <div className="Services flex items-center flex-col md:flex-row gap-x-4 gap-y-5 text-center lg:text-right">
            <img src="/Images/services/express-delivery.svg" alt="image/png" className='w-[108px] h-[73px]' />
            <div className="flex flex-col items-center">
            <h6 className='text-zinc-700 dark:text-white pb-[14px]'>امکان نحویل اکسپرس</h6>
            <span className='text-zinc-700 dark:text-white'>ارسال بسته با سرعت باد</span>
            </div>
            
        </div>
        <div className="Services flex items-center flex-col md:flex-row gap-x-4 gap-y-5 text-center lg:text-right">
            <img src="/Images/services/pitcher.svg" alt="image/png" className='w-[108px]h-[73px]' />
            <div className="flex flex-col items-center">
            <h6 className='text-zinc-700 dark:text-white pb-[14px]'>رست تخصصی</h6>
            <span className='text-zinc-700 dark:text-white'>تازه برداشته شده وباکیفیت</span>
            </div>
        </div>
        <div className="Services flex items-center flex-col md:flex-row gap-x-4 gap-y-5 text-center lg:text-right">
            <img src="/Images/services/coffee.svg" alt="image/png" className='w-[108px] h-[73px]' />
            <div className="flex flex-col items-center">
            <h6 className='text-zinc-700 dark:text-white pb-[14px]'>اکسسوری قهوه</h6>
            <span className='text-zinc-700 dark:text-white'>وسایل و ادوات دم آوری</span>
            </div>
        </div>
    </div>
  )
}
