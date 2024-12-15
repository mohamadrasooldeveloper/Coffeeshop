import React, { useState, useEffect } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { CgBriefcase } from "react-icons/cg";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { LuPhoneOutgoing } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { TbLogin2 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../../ContextCart/ContextCart';
import './NavMobile.css'

const SubMenu = ({ isOpen, links, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='Sub__mobile'>
      {links.map((link, index) => (
        <Link
          key={index}
          className='SubMenu__link text-zinc-600 dark:text-white py-1 flex flex-col hover:text-orange-300'
          to={link.path}
          onClick={onClose}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default function NavMobile() {
  const [darkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isShopSubmenuOpen, setIsShopSubmenuOpen] = useState(false);
  const { cartItems } = useCart(); 

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleShop = () => setIsShopOpen(!isShopOpen);
  const closeNav = () => setIsNavOpen(false);
  const closeShop = () => setIsShopOpen(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleShopSubmenu = () => {
    setIsShopSubmenuOpen(!isShopSubmenuOpen);
  };

  const closeSubmenu = () => {
    setIsShopSubmenuOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.NavMobile__item') && !event.target.closest('.icon__mobile')) {
        setIsNavOpen(false);
      }
      if (!event.target.closest('.shop__item') && !event.target.closest('.mobile__shop')) {
        setIsShopOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='NavMobile'>
      <div className="Mobile bg-white dark:bg-zinc-700 h-16 px-4 flex justify-between items-center">
        <FaBarsStaggered
          size={30}
          className='Mobile__icon cursor-pointer icon__mobile'
          onClick={toggleNav}
        />
        <img src="Images/logo-type.svg" alt="Logo" className='text-orange-300' />
        <MdOutlineLocalGroceryStore
          onClick={toggleShop}
          size={30} 
          className='Mobile__icon cursor-pointer mobile__shop' />
      </div>

      <div className={`NavMobile__item ${isNavOpen ? 'active' : ''} w-[256px] bg-white dark:bg-zinc-700 absolute bottom-0 top-0 z-50 px-4`}>
        <div className='NavMobile__item-logo flex justify-between mt-3 items-center'>
          <div className='flex w-[155px] h-10 gap-x-[10px]'>
            <img src="/Images/logo.svg" alt="Logo" />
            <img src="/Images/logo-type.svg" alt="Logo Type" />
          </div>
          <AiOutlineClose
            size={20}
            className='text-zinc-600 dark:text-white cursor-pointer close__mobile'
            onClick={closeNav} 
          />
        </div>
        <span className='w-[224px] absolute bg-gray-100 dark:bg-white/10 h-0.5 my-6'></span>

        <ul className='Mobile__item text-zinc-600 dark:text-white flex flex-col gap-y-4 mt-12'>
          <li className='hover:text-orange-300 hover:bg-orange-200/20 hover:rounded-md py-2 px-2'>
            <Link className='flex items-center gap-x-2'>
              <FiHome size={20} /> صفحه اصلی
            </Link>
          </li>
          <li className='hover:text-orange-300 py-2 px-2'>
            <div className='flex items-center justify-between cursor-pointer ShopMenu' onClick={toggleShopSubmenu}>
              <div className='flex items-center gap-x-2'>
                <HiOutlineShoppingBag size={20} /> فروشگاه
              </div>
              <FiChevronDown size={20} className={`${isShopSubmenuOpen ? 'rotate-180' : ''} transition-transform`} />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 bg-white dark:bg-zinc-700 rounded'>
              <SubMenu
                isOpen={isShopSubmenuOpen}
                links={[
                  { path: '/shop/special-coffee', label: 'قهوه ویژه' },
                  { path: '/shop/global-special', label: 'ویژه در سطح جهانی' },
                  { path: '/shop/premium-coffee', label: 'قهوه درجه یک' },
                  { path: '/shop/commercial-blends', label: 'ترکیبات تجاری' },
                  { path: '/shop/coffee-capsules', label: 'کپسول قهوه' },
                  { path: '/shop/zanilo-brazilian', label: 'قهوه زینلو برزیلی' },
                ]}
                onClose={closeSubmenu}
              />
            </div>
          </li>
          <li className='hover:text-orange-300 hover:bg-orange-200/20 hover:rounded-md py-2 px-2'>
            <Link className='flex items-center gap-x-2'>
              <HiOutlineChatBubbleLeftEllipsis size={20} /> دیکشنری
            </Link>
          </li>
          <li className='hover:text-orange-300 hover:bg-orange-200/20 hover:rounded-md py-2 px-2'>
            <Link className='flex items-center gap-x-2'>
              <CgBriefcase size={20} /> درباره ما
            </Link>
          </li>
          <li className='hover:text-orange-300 hover:bg-orange-200/20 hover:rounded-md py-2 px-2'>
            <Link className='flex items-center gap-x-2'>
              <HiOutlineDocumentChartBar size={20} /> بلاگ
            </Link>
          </li>
          <li className='hover:text-orange-300 hover:bg-orange-200/20 hover:rounded-md py-2 px-2'>
            <Link className='flex items-center gap-x-2'>
              <LuPhoneOutgoing size={20} /> تماس باما
            </Link>
          </li>
        </ul>

        <span className='w-[224px] absolute bg-gray-100 dark:bg-white/10 h-0.5 my-6'></span>

        <div className="Mobile__icon text-orange-300 flex flex-col gap-y-6 mt-16">
          <Link to="/login" className="flex items-center gap-x-2">
            <TbLogin2 size={20} /> ورود | ثبت نام
          </Link>
          <button onClick={toggleTheme} className="flex items-center gap-x-2">
            {darkMode ? <IoMoonOutline size={20} /> : <FiSun size={20} />}
            <span>{darkMode ? 'تم روشن' : 'تم تاریک'}</span>
          </button>
          <Link className="flex items-center gap-x-2">
            <FiShoppingCart size={20} /> سبد خرید
          </Link>
        </div>
      </div>

      <div className={`shop__item ${isShopOpen ? 'active' : ''} w-[256px] bg-white dark:bg-zinc-700 absolute bottom-0 top-0 left-0 z-50 px-4`}>
        <div className='flex justify-between items-center pt-5 '>
          <AiOutlineClose size={20} className='text-zinc-700 dark:text-white cursor-pointer' onClick={closeShop} />
          <span className='text-zinc-700 dark:text-white'>سبد خرید</span>
        </div>
        <span className='bg-gray-300 dark:bg-white/10 w-[224px] h-0.5 absolute my-5 rounded-2xl'></span>

        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="Cart__item flex flex-col items-start justify-between mt-12"
            >
              <div className="flex">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[90px] h-[90px] object-cover mr-2"
                />
                <div className="flex flex-col gap-y-[28px]">
                  <h4 className="text-zinc-700 dark:text-white">{item.name}</h4>
                  <div className="flex items-center gap-5">
                    <div className="flex flex-col">
                      <span className="text-teal-600">14,500 تخفیف</span>
                      <span className="text-zinc-700 dark:text-white">
                        {item.price} تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="bg-gray-300 dark:bg-white/10 w-[224px] h-0.5 rounded-2xl mt-[29px] mb-[23px]"></span>
            </div>
          ))}
          <div className='flex items-center absolute bottom-0 gap-x-4 pb-8'>
            <button><Link className='dark:bg-emerald-500 bg-teal-600 text-white py-[11px] px-[17px] rounded-xl'>
              ثبت سفارش
            </Link></button>

            <div className='flex flex-col items-center'>
              <span className='text-[12px] text-gray-300'>مبلغ قابل پرداخت:</span>
              <span className='text-[16px] text-zinc-700 dark:text-white'>
                {cartItems.reduce((total, item) => total + Number(item.price), 0)} تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
