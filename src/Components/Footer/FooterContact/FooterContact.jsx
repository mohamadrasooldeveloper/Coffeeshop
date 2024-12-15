import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { RiTelegramLine } from "react-icons/ri"; // تغییر به RiTelegramLine
import { FaInstagram } from "react-icons/fa";

export default function FooterContact() {
  return (
    <div className="FooterContact mt-[30px]">
      <h3 className="text-2xl text-white mb-6 md:mb-7">درتماس باشیم</h3>
      <div>
        <p className="flex items-center flex-wrap">
          <SlLocationPin size={24} />
          خیابان میرداماد، خیابان البرز، کوچه قبادیان شرقی ، پلاک 33
        </p>
        <div className="flex items-center flex-wrap gap-x-5 mt-6 mb-4 md:mb-10 md:mt-5">
          <span className="flex items-center gap-x-2 md:gap-x-3  hover:text-orange-300">
            <HiOutlineMail size={24} />
            info@Coffee.com
          </span>
          <span className="flex items-center gap-x-2 md:gap-x-3  hover:text-orange-300">
            <LuPhone size={24} />
            09021236628
          </span>
          <span className="flex items-center hover:text-orange-300">
            021-6789012
          </span>
        </div>
      </div>
      <div className="flex items-center text-center gap-x-[6px] text-orange-300">
        <a href="https://t.me/golden_coffee" className="flex items-center w-[165px] md:w-[190px] gap-x-2 text-4 md:text-5 text-center border-2 border-orange-300 rounded-[12px] py-3 px-[14px] hover:text-white" target="_blank" rel="noopener noreferrer">
          <RiTelegramLine size={26} /> {/* استفاده از RiTelegramLine */}
          @golden_coffee
        </a>
        <a href="https://www.instagram.com/golden_coffee" className="flex items-center gap-x-2 w-[165px] md:w-[190px] text-4 md:text-5 text-center border-2 border-orange-300 rounded-[12px] py-3 px-[14px] hover:text-white" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={26} />
          @golden_coffee
        </a>
      </div>
    </div>
  );
}
