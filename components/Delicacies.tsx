import React from 'react'
import FoodCard from './FoodCard'
import styles from "@/components/index.module.css"

const Delicacies = () => {
  return (
   <section id="delicacies" className={`${styles.backgroundImgHero} w-full`}>
     <div className='backdrop-blur-sm bg-black/30 py-6'>
      <div className='container mx-auto flex justify-center'>
      <FoodCard/>
      </div>
    </div>
   </section>
  )
}

export default Delicacies
