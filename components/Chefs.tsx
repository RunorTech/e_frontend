import React from 'react'
import styles from "@/components/index.module.css"

const Chefs = () => {
    return (
        <section className='bg-white text-black py-12 '>
            <div className='grid grid-cols-1 gap-5  place-content-center place-items-center'>
                <h2 className={`${styles.hideElement} text-4xl  font-bold text-center mb-4`}>Our Top Chefs</h2>
                <div className='flex gap-2'>
                    <div className='h-28 w-28 flex justify-center items-center rounded-full bg-lime-500'>
                        <div className='h-24 w-24 rounded-full bg-white text-center grid grid-cols-1 place-content-center place-items-center'>
                            avatar
                        </div>
                    </div>
                    <div className='h-28 w-28 flex justify-center items-center rounded-full bg-lime-500'>
                        <div className='h-24 w-24 rounded-full bg-white text-center grid grid-cols-1 place-content-center place-items-center'>
                            avatar
                        </div>
                    </div>
                    <div className='h-28 w-28 flex justify-center items-center rounded-full bg-lime-500'>
                        <div className='h-24 w-24 rounded-full bg-white text-center grid grid-cols-1 place-content-center place-items-center'>
                            avatar
                        </div>
                    </div>
                </div>
                <div className='relative h-96 max-sm:h-full'>
                    <div className="background-video-container">
                        <video autoPlay muted loop className="background-video w-full h-96  max-sm:h-full ">
                            <source src="/video/FastDownload.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>

                    </div>
                    <div className='absolute top-0 flex items-center justify-center backdrop-blur-sm bg-black/30 w-full h-full'>
                        <div className='grid grid-cols-1 gap-8 text-white place-content-center place-items-center px-4' >
                            <p className='text-2xl font-semibold'>we have the most amazing chef accross the globe </p>
                            <button className=' px-4 py-3 bg-lime-500 font-semibold' >Find Chef</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Chefs
