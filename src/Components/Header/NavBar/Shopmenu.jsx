import React from 'react'
import { Link } from "react-router-dom";


export default function Shopmenu({isOpen}) {
  return (
    isOpen &&(

            <div className="submenu absolute w-[208px] pt-[21px] px-6 bg-white dark:bg-zinc-700 rounded-2xl border-t-[3px] border-t-orange-300">
              <ul className=' hover:text-orange-300 leading-6 pb-4'>
                <li  className='pb-4'><Link className='text-[16px] text-zinc-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300'>قهوه ویژه</Link></li>
                <li  className='pb-4'><Link className='text-[16px] text-zinc-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300'>ویژه در سطح جهانی</Link></li>
                <li  className='pb-4'><Link className='text-[16px] text-zinc-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300'>قهوه درجه یک</Link></li>
                <li  className='pb-4'><Link className='text-[16px] text-zinc-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300'>ترکیبات تجاری</Link></li>
                <li  className='pb-4'><Link className='text-[16px] text-zinc-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300'>کپسول قهوه</Link></li>
                <li  className='pb-4'><Link className='text-[16px] text-zinc-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300'>قهوه زینو بریزیلی</Link></li>
              </ul>
            </div>
    )
    
  )
}
