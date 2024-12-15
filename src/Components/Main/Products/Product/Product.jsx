import React from 'react';
import { Link } from "react-router-dom";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useCart } from '../../../ContextCart/ContextCart';
import products from './products'; 


export default function Product() {
  const { addToCart } = useCart(); 

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Product grid grid-cols-2 lg:grid-cols-4 gap-[14px] md:gap-5">
      {products.map((product) => (
        <div key={product.id} className='Product__item bg-white dark:bg-zinc-700 shadow-Normal rounded-2xl p-2 md:p-5 relative'>
          <div>
            <img src={product.img} alt="product" />
            <h4 className='dark:text-white text-[14px] md:text-[20px] text-zinc-700'>{product.name}</h4>
          </div>
          <div className='Product__price flex items-center mb-4 mt-[10px] font-black'>
            {product.discountedPrice ? (
              <>
                <span className='text-teal-600 text-[12px] md:text-[18px] font-bold pl-[5px] md:pl-[10px]'>
                  {product.discountedPrice} تومان
                </span>
                <span className='text-gray-400 text-[14px] md:text-[16px] line-through'>
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
                  <span className='text-red-400 text-[14px] md:text-[18px]'>
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
          <div className='Product__score flex justify-between items-center'>
            <Link className="Product__icon flex items-center">
              <MdOutlineLocalGroceryStore
              size={16}
                onClick={() => handleAddToCart(product)}
                className='shop bg-gray-100 text-gray-400 w-[26px] h-[26px] p-[5px] md:w-[36px] md:h-[36px] md:p-[7px] rounded-[24px] hover:text-white hover:bg-teal-600 cursor-pointer transition-all dark:bg-zinc-800 dark:hover:bg-teal-600'
              />
              <GoArrowSwitch size={16} className='text-gray-400 w-4 h-4 md:w-9 md:h-7 mr-1 hover:text-teal-600' />
            </Link>
            <div className="Product__star flex items-center">
              {[...Array(5)].map((_, index) => (
                index < product.rating ? (
                  <FaRegStar key={index} className="text-gray-300 w-4 h-4 md:w-6 md:h-6" />
                ) : (
                  <FaRegStar key={index} className="text-yellow-400 w-4 h-4 md:w-6 md:h-6" />
                )
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
