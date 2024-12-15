import React from 'react'

export default function FooterRight() {
  return (
    <div className='FooterRight '>
        <div className="FooterRight__image flex items-center gap-5 pb-6 md:pb-[18px] ">
            <img src="/Images/logo.svg" alt="image/svg" className='w-[57px] h-[54px]' />
            <img src="/Images/logo-type.svg" alt="image/svg" className='w-[138px] h-[54px]' />
        </div>
        <div className='max-w-[500px]'>
            <p>ما برآنیم تا درپیشرو بودن در فرایند تولید، نوع وکیفیت محصول، خدمات وتوزیع الگویی برای تولیدکنندگان ایرانی باشیم .و به مرجع فرهنگ قهوه ایران بدل شویم می پنداریم که نظر مردم ایران ومنطقه  باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می کوشیم.</p>
        </div>
    </div>
  )
}
