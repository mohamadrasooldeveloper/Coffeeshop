import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function ProductsTitle() {
  return (
    <div className='Products my-10 flex justify-between items-center mb-[48px]'>
        <div className="Products__title">
            <h3 className='font-black xd:text-[20px] md:text-[48px] mb-[6px] dark:text-white'>جدیدترین محصولات</h3>
            <span className='dark:text-white text-[16px] md:text-[30px] text-zinc-700'>فراوری شده از دانه قهوه</span>
        </div>
        <div className='Products__title-link'>
            <Link to="/newproducts" className='text-orange-300 flex hover:bg-orange-200/20 hover:rounded-sm'>
            جدیدترین محصولات
            <RiArrowLeftSLine size={20}/>
            </Link>
        </div>
    </div>
  )
}
