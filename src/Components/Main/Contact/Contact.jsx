import React from 'react'
import { Link } from 'react-router-dom';
import { LuPhone } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";


export default function Contact() {
  return (
    <div className='Contact text-zinc-700 dark:text-white flex items-center flex-col md:flex-row'>
        <div className="Contact__image pl-5">
            <img src="/Images/contact.png" alt="image/png" className='w-full' />
        </div>
        <div className="Contact__main">
            <div className="Contact__main-text font-Morabbalight">
                <h3 className='text-[24px] md:text-[48px]'>یکی از بهترین قهوه ها</h3>
                <span className='text-[18px] md:text-[30px] pb-5 md:pb-4'>کیفیت قهوه را از ما بخواهید...</span>
                <p className='text-[40px]'>. . .</p>
                <p className='text-[18px] md:text-[24px] pb-5 md:pb-4'>فضای گرم و دلنشین مارا احساس کنید، جایی که همه می توانند قهوه معطری پیداکنند و دسرهای خوشمزه مارا که کاملا با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شمارا می سازد</p>
            </div>
                
                <Link className="Contact__main-phone text-[16px] border-2 w-[209px] md:w-[216px] gap-2 rounded-[100px] text-orange-300 border-orange-300 py-[10px] px-6 flex items-center">
                <LuPhone size={32} className='hidden md:block'/>
                <LuPhoneCall size={32} className='block md:hidden'/>
                 ثبت سفارش تلفنی
                 </Link>
        </div>
    </div>
  )
}
