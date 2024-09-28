import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { foodData } from '@/constant/foodCard';
import Image from 'next/image';


const FoodCard = () => {

    return (
        <Swiper
        breakpoints={{
            // When the screen width is >= 1024px (Desktop)
            1024: {
                slidesPerView: 3,
            },
            // When the screen width is >= 768px (Tablet)
            768: {
                slidesPerView: 2,
            },
            // When the screen width is < 768px (Mobile)
            0: {
                slidesPerView: "auto",
            },
        }}
        autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
        loop={true}
        cssMode={true}
        centeredSlides={true}
        slidesPerView={'auto'} 
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {foodData.map((item, index) => (
            <SwiperSlide key={item.$id} virtualIndex={index} className='px-6' >
                <article className='bg-white w-full text-black p-3 rounded-lg shadow-lg shadow-slate-100'>
                 <div className='flex justify-center'>
                    <div className='w-full'>
                       <div className=''>
                       <div className='max-w-[100%] h-56 relative'>
                            <Image 
                                className='object-cover rounded-md' 
                                src={item.img} 
                                alt="food image" 
                                layout="fill" 
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <h3>food name</h3>
                            <p>chef name</p>
                            <p>ingredient:</p>
                            <span className='text-end mb-6'>
                                <ul>
                                <li>flour</li>
                                <li>flour</li>
                                <li>flour</li>
                                <li>flour</li>
                                </ul>
                            </span>
                        </div>
                       </div>
                        <div className='flex justify-end'>
                            <button className='rounded-lg bg-lime-500 px-3 py-2 font-semibold'>Place Order</button>
                        </div>
                   </div>
                </div>
                </article>
            </SwiperSlide>
        ))}
    </Swiper>
    )
}

export default FoodCard;
            