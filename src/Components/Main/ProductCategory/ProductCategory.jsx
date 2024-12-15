import React from 'react';
import productCategories from './ProductCategory';

export default function ProductCategory() {
  return (
    <div className="ProductCategory flex justify-center gap-y-6 gap-x-[29px] md:gap-[65px] flex-wrap">
      {productCategories.map((category) => (
        <div key={category.id} className="ProductCategory__image flex items-center flex-col w-25 md:w-50 text-center">
          <img src={category.img} alt={category.name} />
          <h5 className='text-[14px] md:text-xl text-zinc-700 dark:text-white font-DanaDemiBold'>{category.name}</h5>
        </div>
      ))}
    </div>
  );
}
