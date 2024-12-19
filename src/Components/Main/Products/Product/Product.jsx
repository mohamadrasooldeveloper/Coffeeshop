import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useCart } from '../../../ContextCart/ContextCart';
import products from './products'; 
import { HiMiniXMark } from "react-icons/hi2";



export default function Product() {
  const { addToCart } = useCart(); 
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  
  const handleAddToCart = (product) => {
    if (product.desc === "فعلا موجود نیست"){
      setErrorMessage('محصول فعلا موجود نیست');
      setTimeout(() => setErrorMessage(null), 3000)

    } else{
      addToCart(product);
      setSuccessMessage('محصول با موفقیت به سبد خرید اضافه شد');
      setTimeout(() => setSuccessMessage(null), 3000);

    }
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
      {product.discounte && (
        <span className="discounte absolute top-[24px] right-[24px] text-zinc-700 dark:text-white bg-orange-300 pt-1 pb-[3px] px-[14px] rounded-[100px]">
          {product.discounte}
        </span>
      )}
    </>
  ) : (
    <span className={
      `${
        product.price ? 'text-teal-600 text-[14px] md:text-[20px] font-bold':
        'text-red-400 text-[14px] md:text-[20px] font-bold'
      }`
    }>
      {product.price ? `${product.price} تومان` : product.desc}
    </span>
  )}
</div>

          <div className='Product__score flex justify-between items-center'>
            <Link className="Product__icon flex items-center">
              <MdOutlineLocalGroceryStore
              size={16}
                onClick={() => handleAddToCart(product)}
                className='transition-transform transform hover:scale-110 bg-gray-100 text-gray-400 w-[26px] h-[26px] md:w-[36px] md:h-[36px] p-[5px] md:p-[7px] rounded-[24px] hover:text-white hover:bg-teal-600 cursor-pointer dark:bg-zinc-800 dark:hover:bg-teal-600'
              />
              <GoArrowSwitch size={16} className='text-gray-400 w-4 h-4 md:w-9 md:h-7 mr-1 hover:text-teal-600' />
            </Link>
            <div className="Product__star flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaRegStar key={index} className={ index < product.rating ? "text-gray-300 w-4 h-4 md:w-6 md:h-6" : "text-yellow-400 w-4 h-4 md:w-6 md:h-6"}/>
                
              ))}
            </div>
          </div>
          
        </div>
      ))}
        {successMessage &&(
        <div className="success-message flex items-center gap-4 p-2 shadow-Normal fixed bottom-4 right-4 bg-teal-600 text-white text-center py-3 rounded-xl transform transition-all duration-500 ease-in-out">
          {successMessage}
          <HiMiniXMark size={26} className='cursor-pointer' onClick={() => setSuccessMessage(null)}/>
        </div>
      )}
      {errorMessage && (
         <div className="flex items-center gap-4 p-2 shadow-Normal fixed bottom-4 right-4 bg-red-400 text-white text-center py-3 rounded-xl transform transition-all duration-500 ease-in-out">
         {errorMessage}
         <HiMiniXMark size={26} className='cursor-pointer' onClick={() => setErrorMessage(null)}/>
       </div>
      )}
    </div>
    
  );
}
