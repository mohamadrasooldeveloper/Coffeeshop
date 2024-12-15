import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterItem() {
  return (
    <div className='FooterItem  mt-10'>
        <h3 className='text-2xl text-white mb-6 md:mb-7'>دسترسی سریع</h3>
        <div className='flex flex-col gap-y-2.5 md:gp-y-5 flex-wrap h-44 gap-x-10 md:gap-x-16 '>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        حریم خصوصی
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        عودت کالا
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        شرایط استفاده
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        ثبت سفارش
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        پرسش های متداول
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        فرصت های شغلی
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        ضمانت نامه ها
        </Link>
        <Link className='flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 md:text-xl'>
        <span className='w-2.5 h-1 inline-block bg-current rounded-full'></span>
        ارتباط باما
        </Link>
        </div>
    </div>
  )
}
