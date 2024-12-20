import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { TbLogin2 } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../../ContextCart/ContextCart';
import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePlus } from 'react-icons/hi';
import DeleteModal  from '../../Modal/Modal';

import './NavBar.css';
import './NavBar.media.css';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems,setCartItems } = useCart(); 
  const [cartHovered, setCartHovered] = useState(false); 
  const [buttonHovered, setButtonHovered] = useState(false); 
  const [timeoutId, setTimeoutId] = useState(null);
  const [isDelayActive, setIsDelayActive] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const totalAmount = useMemo(
    () => cartItems.reduce((total, item) => total + item.price, 0),
    [cartItems]
  );
  
    const showModal = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    if (itemToDelete) {
      setCartItems(cartItems.filter(item => item !== itemToDelete));
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };


  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };
  const handleButtonEnter = () => {
    setButtonHovered(true);
    setShowCart(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setIsDelayActive(false); 
    }
  };


  const handleButtonLeave = () => {
    setButtonHovered(false);
    if (!cartHovered && !isDelayActive) {
      const id = setTimeout(() => {
        setShowCart(false);
        setIsDelayActive(false);
      }, 500);
      setTimeoutId(id);
      setIsDelayActive(true);
    }
  };

  
  const handleCartEnter = () => {
    setCartHovered(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setIsDelayActive(false);
    }
  };


  const handleCartLeave = () => {
    setCartHovered(false);
    if (!buttonHovered && !isDelayActive) {
      const id = setTimeout(() => {
        setShowCart(false);
        setIsDelayActive(false);
      }, 500);
      setTimeoutId(id);
      setIsDelayActive(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className='hidden NavBar bg-black/50 font-DanaMedium'>
    <div className='NavBar__menu'>
      <img src="/Images/logo.svg" alt="image/svg" />
      <ul className='NavBar__item h-full gap-x-4 md:gap-x-6'>
        <li><Link to="/"> صفحه اصلی</Link></li>
        <li
          onMouseEnter={toggleShopMenu}
          onMouseLeave={toggleShopMenu}
          className='relative'
        >
          <Link to="/shop"> فروشگاه</Link>
          {isShopMenuOpen && (
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
          )}
        </li>
        <li><Link to="/dictionary"> دیکشنری</Link></li>
        <li><Link to="/blog"> بلاگ</Link></li>
        <li><Link to="/about-us"> درباره ما</Link></li>
        <li><Link to="/contact-us"> تماس با ما</Link></li>
      </ul>
    </div>

      <div className="NavBar__left flex items-center xl:gap-x-10">
        <div className="icon">
          <div 
            className="flex space-x-4 relative"
            onMouseEnter={handleButtonEnter} 
            onMouseLeave={handleButtonLeave}
          >
            <Link to="/cart" className="relative">
              <MdOutlineLocalGroceryStore size={30} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {showCart && (
              <div
                className="Cart absolute bg-white dark:bg-zinc-700"
                onMouseEnter={handleCartEnter} 
                onMouseLeave={handleCartLeave}
              >
                {cartItems.length === 0 ? (
                  <>
                    <FiShoppingCart size={55} className="text-gray-400 mt-[56px]" />
                    <h4 className="pt-3 pb-11 text-zinc-700 dark:text-white">
                      هنوز محصولی به سبد خرید اضافه نشده
                    </h4>
                    <button
                      className="Cart__button bg-teal-600 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                    >
                      مشاهده صفحه فروشگاه
                    </button>
                  </>
                ) : (
                  <div>
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="Cart__item flex flex-col h-auto w-[400px] items-start justify-between relative p-5"
                      >
                        <div className="flex">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-[120px] h-[120px] object-cover mr-2"
                          />
                          <div className="flex flex-col gap-y-[28px]">
                            <h4 className="text-zinc-700 dark:text-white">{item.name}</h4>
                            <div className="flex items-center gap-5">
                            <div className="flex items-center justify-center border-[1px] rounded-[100px] border-gray-300">
                                <span className="text-orange-300 px-[14px] font-black cursor-pointer">
                                <HiOutlinePlus size={25} />
                              </span>
                              <span className="text-orange-300 text-[25px] pt-[8px]">1</span>
                              <span className="text-orange-300 px-[14px] cursor-pointer"onClick={() => showModal(item)}>
                                <FiTrash2 size={25} />
                              </span>
                              <DeleteModal 
                              isOpen={isModalOpen}
                              onDelete={handleDelete}
                             onCancel={handleCancel}
                               />
                            </div>

                              <div className="flex flex-col">
                                <span className="text-teal-600">14,500 تخفیف</span>
                                <span className="text-zinc-700 dark:text-white">
                                  {item.price} تومان
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="bg-gray-300 dark:bg-white/10 w-[360px] h-0.5 rounded-2xl mt-[29px] mb-[23px]"></span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center mt-10 px-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">مبلغ قابل پرداخت:</span>
                        <span className="text-zinc-700 font-black text-[20px] dark:text-white">
                          {totalAmount} تومان
                        </span>
                      </div>
                      <button className="py-[14px] px-[28px] bg-teal-600 hover:bg-emerald-600 dark:bg-emerald-500 text-white rounded-xl">
                        ثبت سفارش
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <button onClick={toggleTheme}>
            {darkMode ? <IoMoonOutline size={30} /> : <FiSun size={30} />}
          </button>
        </div>

        <span className='block w-px h-14 bg-white/50 mx-4'></span>
        <div className="NavBar__login font-Dana">
          <Link to="/login" className="flex items-center">
            <TbLogin2 size={30} />
            <span className="ml-2 lg:block">ورود | ثبت نام</span>
          </Link>
        </div>
      </div>
    </div>
  
  );
}
