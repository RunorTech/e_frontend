import React from 'react'
import styles from "@/components/index.module.css"
import { PiChefHatThin } from "react-icons/pi";
import { AiTwotoneLike } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FacebookSvg } from './AuthForm';

const Hero = () => {
  return (
    <section className={`${styles.backgroundImgHero} w-full h-screen `}>
      <div className="h-full  backdrop-blur-sm bg-black/30 flex items-center ">
        <div className=' container mx-auto flex flex-col gap-10 px-4 '>
          <div>
            <div className='flex gap-2'><h1 className='text-3xl font-bold'>BULKFOOD</h1><span className='text-4xl  rotate-45 '><PiChefHatThin /></span></div>
            <p className='text-slate-300'> Bulk is an innovative food networking business offering key services that connects
              food businesses which includes restaurants and local chefs with potential customers. </p>
          </div>
          <div>
          <a href="/sign-in">  <button className='bg-lime-500 rounded-md text-xl font-semibold px-4 py-3'>Get started</button></a>
          </div>
          <div className=''>
            <div className='flex gap-2 mb-5'>
              <p>Follow us On</p>
              <span className='text-green-700 text-2xl'><AiTwotoneLike /></span>
            </div>
            <div className='flex w-full justify-between  gap-4'>
              <a className='button-style-follow ' href=""><span className=''><FacebookSvg w={30} h={30} /></span><span>Facebook</span></a>
              <a className='button-style-follow ' href=""><span className='text-blue-700 text-2xl'><FaTwitter /></span><span>Twitter</span></a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
