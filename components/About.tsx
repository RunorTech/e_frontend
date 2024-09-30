'use client'
import React, { useState } from 'react'
import aboutImg from '@/app/assets/about.jpg'
import Image from 'next/image';
import styles from "@/components/index.module.css"

const About = () => {
    const [openMore, setOpenMore] = useState(false);
    const showMore = () => {
        setOpenMore(!openMore)
    }
 
    const observer: IntersectionObserver  = new IntersectionObserver((entries : IntersectionObserverEntry[]) => {
        entries.forEach((entry : IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add(`${styles.show}`)
            }
        });
    });

    const aboutDiv = document.querySelectorAll(`.${styles.hideElement}`);
    aboutDiv.forEach((el) => { observer.observe(el); console.log("el", el)})

    return (
        <section id="about" className={` bg-white text-black py-4`}>
            <div className='flex justify-center'>
                <div className='container '>
                    <h2 className={`${styles.hideElement} text-4xl  font-bold text-center mb-4`}>About Us</h2>
                    <div className='flex  flex-wrap justify-center items-center p-3 gap-10 '>
                        <div className={` ${styles.hideElement} w-96 shadow-lg shadow-slate-200 `}>
                            <Image className='rounded-3xl' src={aboutImg} alt="about image" />
                        </div>
                        <div className={`${styles.hideElement} w-[34rem] transition-all`}>
                            <p >
                                Bulk is an innovative food networking business in Lagos, Nigeria, offering key services that connects
                                food businesses which includes restaurants and local chefs with users / customers all across the globe.
                            </p>
                            <p className={`${openMore ? "block" : "hidden overflow-hidden"} mt-2 grid gap-2 `}>
                                <span>
                                    With a well-tailored application, bulk provides the option for customers to order food online from any
                                    restaurant of their choice and get the food delivered to their doorstep in minutes by exploring the
                                    “order food” option on the app and also enable users to find professional chefs and other catering
                                    businesses needed for various events and home services in their geographical zone by using the “find a
                                    chef” option on the app.
                                </span>
                                <span>
                                    With an experienced team of chefs available on the platform, directly from bulk we use fresh, locallysourced ingredients to create various flavorful and delicious dishes available on our menu. Our services
                                    feature a variety of uncommon delivery services that includes special delivery functions that allows
                                    customer to order surprise packages for their loved ones, Which Include Food Arts, Portraits, musical
                                    performances and many more are the value-added services we provide. BULK brings you the eating and
                                    cooking experiences that you could never imagine. <span className='underline text-lime-500 underline-offset-4 '><a href="#">TRY US TODAY!!!</a></span>
                                </span>

                            </p>
                            <div className='w-full flex justify-end transition-all'>
                                <button onClick={showMore} className='bg-lime-500 rounded-md my-4 text-slate-200 px-3 py-2 font-semibold'>{openMore ? "Show Less" : "Show More"}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
