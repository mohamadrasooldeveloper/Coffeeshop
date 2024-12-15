import React from 'react'
import './Blog.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft} from "react-icons/fa6";


export default function Blog() {
  return (
    <div className='Blog rounded-2xl my-20 flex flex-col lg:flex-row justify-between items-center py-[23px] px-3 md:px-11'>
        <div className="Blog__title flex items-center font-Morabbalight font-black">
            <img src="/Images/club/diamond.png" alt="image/png" className='Blog__title-image w-[110px] h-[98px] '/>
            <div className='flex flex-col items-center pr-6'>
            <h3 className='h3 rext-[24px] md:text-[48px] text-white pb-2'>کافی کلاب</h3>
            <p className='text-white font-Morabbalight'>میدونستی میتونی با امتیازهات قهوه بگیری؟</p>

            </div>
        </div>
        <div className='flex items-center lg:flex-none gap-0 xs:gap-[12px] lg:gap-[122px] pt-[35px] lg:pt-0 lg:justify-between px-3 lg:px-0'>
        <div className="Blog__ticket flex  gap-x-2 md:gap-x-5">
            <div className='w-[62px] xs:w-[72px]  md:w-[98px] flex flex-col items-center bg-white rounded-2xl'>
                <img className=' pb-[6px] pt-[6px] px-[16px] md:pt-[25px] md:px-[25px]' src="/Images/club/Discovery.svg" alt="image/svg" />
                <span className='pb-1 text-[12px] md:text-[14px]'>چرخ و بخت</span>
            </div>
            <div className='w-[62px] xs:w-[72px] md:h-[98px] md:w-[98px] flex flex-col items-center bg-white rounded-2xl'>
                <img className=' pb-[6px] pt-[6px] px-[16px] md:pt-[25px] md:px-[25px]' src="/Images/club/Activity.svg" alt="image/svg" />
                <span className='pb-1 text-[12px] md:text-[14px]'>ماموریت ها</span>
            </div>
            <div className='w-[62px] xs:w-[72px] md:h-[98px] md:w-[98px] flex flex-col items-center bg-white  rounded-2xl'>
                <img className=' pb-[6px] pt-[6px] px-[16px] md:pt-[25px] md:px-[25px]' src="/Images/club/Ticket-Star.svg" alt="image/svg" />
                <span className='pb-1 text-[12px] md:text-[14px]'>جایزه ها</span>
            </div>
        </div>
        <div className="Blog__left flex flex-col items-center">
            <span className='text-[24px] md:text-[30px] font-black text-white'>542</span>
            <span className='text-white text-[12px] md:text-[14px] pb-[8px]'>امتیازشما</span>
            <Link className='flex w-[90px] h-[26px] md:w-[110px] md:h-[32px] py-1 px-[6px] md:py-[6px] md:px-[10px]  items-center text-white rounded-[100px] text-[12px] md:text-[14px]'>
            دریافت جایزه
            <FaChevronLeft/>
            </Link>
        </div>
        </div>
    </div>
  )
}
