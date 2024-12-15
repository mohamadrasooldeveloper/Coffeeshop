import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductsSales from "./ProductsSales";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";


const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <div className="relative">
      <div className="ProductsSalesTitle flex items-center justify-between mt-10 mb-5 md:mt-[80px] md:mb-[48px]">
        <div className="ProductsSalesTitle flex flex-col">
          <h3 className="font-black xd:text-[24px] md:text-[48px] mb-[6px] dark:text-white pb-[2px] md:pb-[6px]">
            محصولات پرفروش
          </h3>
          <span className="dark:text-white text-[18px] md:text-[30px] text-zinc-700">
            پیشنهاد قهوه خورها....
          </span>
        </div>

        <div className="ProductsSalesTitle__icon flex items-center gap-3 md:gap-[18px]">
          <button
            ref={prevRef}
            className="bg-white w-9 h-9 md:w-11 md:h-11 p-[5px] md:p-[9px] rounded-full hover:bg-gray-300"
          >
            <FaChevronRight size={26} />
          </button>
          <button
            ref={nextRef}
            className="bg-white w-9 h-9 md:w-11 md:h-11 p-[5px] md:p-[9px] rounded-full hover:bg-gray-300"
          >
            <FaChevronLeft size={26} />
          </button>
        </div>
      </div>

      {isReady && (
        <Swiper
          spaceBetween={14}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            340:{
              spaceBetween:14,
                slidesPerView:2
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1370: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
        >
          {ProductsSales.map((product) => (
            <SwiperSlide key={product.id} className=" grid grid-cols-2 md:grid-cols-4">
              <div className="product-card bg-white dark:bg-zinc-700 shadow-Normal rounded-2xl p-2 md:p-5 relative">
                <img src={product.img} alt={ProductsSales.name} className="product-image" />
                <h3 className="product-name text-[14px] md:text-[20px] dark:text-white text-zinc-700 pb-[6px] md:pb-[14px]">{product.name}</h3>
               
                  <div className="product-price pb-4">
                    {product.discountedPrice ? (
              <>
               <span className='text-teal-600 text-[12px] md:text-[12px] lg:text-[18px] font-bold pl-[5px] md:pl-[10px]'>
                  {product.discountedPrice} تومان
                </span>
                <span className='text-gray-400 text-[9px] md:text-[9px] lg:text-[16px] line-through'>
                  {product.price} تومان
                </span>
                <span className="discounte absolute top-[24px] right-[24px] text-zinc-700 dark:text-white bg-orange-300 pt-1 pb-[3px] px-[14px] rounded-[100px]">{product.discounte}</span>
              </>
            ) : product.price ? (
              <span className='text-teal-600 text-[14px] md:text-[18px] font-bold'>
                {product.price} تومان
              </span>
            ) : (
              product.desc && (
                <div className="flex flex-col">
                  <span className='text-red-400  text-[14px] md:text-[18px]'>
                    {product.desc}
                  </span>
                  {product.discounte && (
                    <span className='top-1.5 absolute right-1.5 font-DanaDemiBold text-white dark:text-zinc-800 rounded-full px-3'>
                      {product.discounte}
                    </span>
                  )}
                </div>
              )
            )}
                  </div>
                  <div className='Product__score flex justify-between md:justify-center lg:justify-between items-center'>
            <div className="Product__icon flex items-center">
             <Link className="Product__icon flex items-center" to="./Cart" >
              <MdOutlineLocalGroceryStore className='bg-gray-100 text-gray-400  w-[26px] h-[26px] p-[5px] md:w-[36px] md:h-[36px] md:p-[7px] rounded-[24px] hover:text-white hover:bg-teal-600 cursor-pointer transition-all dark:bg-zinc-800 dark:hover:bg-teal-600 '/>
             </Link>
              <GoArrowSwitch size={16} className='text-gray-400 w-4 h-4 md:w-9 md:h-7 mr-1 hover:text-teal-600'/>
            </div>
            <div className="Product__star flex items-center">
              {[...Array(5)].map((_, index) => (
                index < product.rating ? (
                  <FaRegStar key={index} className="text-gray-300 w-4 h-4 md:w-[18px] md:h-6" />
                ) : (
                  <FaRegStar key={index} className="text-yellow-400  w-4 h-4  md:w-[18px] md:h-6" />
                )
              ))}
            </div>
          </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductSlider;
