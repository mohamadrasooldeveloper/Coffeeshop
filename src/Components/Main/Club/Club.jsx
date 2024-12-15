import React from 'react';
import { Link } from "react-router-dom";
import clubData from './ClubData';
import { RiArrowLeftSLine } from "react-icons/ri";


export default function ClubList() {
  return (
    <>
       <div className='Products my-10 flex justify-between items-center mb-[48px]'>
        <div className="Products__title">
            <h3 className='font-black xd:text-[20px] md:text-[48px] mb-[6px] dark:text-white'>مطالب خواندنی</h3>
        </div>
        <div className='Products__title-link'>
            <Link to="/newproducts" className='text-orange-300 flex hover:bg-orange-200/20 hover:rounded-sm'>
            مشاهده همه مطالب
            <RiArrowLeftSLine size={20}/>
            </Link>
        </div>
    </div>


    <div className="Club my-20 flex flex-wrap gap-[14px] md:gap-5 ">
      {clubData.map((club) => (
        <div key={club.id} className="Club__item w-full sm:w-[48%] md:w-[300px] p-[10px] bg-white dark:bg-zinc-700 shadow-Normal rounded-2xl flex flex-col justify-between">
          <div>
            <img src={club.img} alt={club.name} className='w-[100%] rounded-2xl object-cover' />
          </div>
          <div className='flex pt-4 items-center text-teal-600 justify-between'>
            <h4 className='text-zinc-700 font-DanaDemiBold dark:text-white text-[14px] md:text=[18px]'>{club.name}</h4>
            <div className="Club__data flex items-center">
            <span className='block w-px h-[61px] bg-gray-100 dark:bg-white/10% ml-4 mr-12 mb-2'></span>
            <div className='flex flex-col items-center pb-2 space-y-1'>
            <span className='text-[12px] md:text-[24px] font-black'>{club.add}</span>
              <span className='text-[12px] md:text-[14px]'>{club.Months}</span>
              <span className='text-[12px] md:text-[14px]'>{club.year}</span>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}
