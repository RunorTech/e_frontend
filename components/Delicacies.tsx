import React from 'react'
import FoodCard from './FoodCard'
import styles from "@/components/index.module.css"

const Delicacies = () => {
  return (
    <section id="delicacies" className={`${styles.backgroundImgHero} w-full`}>

      <div className='backdrop-blur-sm bg-black/30 py-12'>
        <h2 className={`${''} text-4xl  font-bold text-center mb-8`}>Popular Dishes</h2>
        <div className='container mx-auto flex justify-center'>
          <FoodCard />
        </div>
      </div>
    </section>
  )
}

export default Delicacies
