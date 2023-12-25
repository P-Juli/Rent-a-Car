'use client'
import React, { MouseEventHandler } from 'react'
import CustomButton from './CustomButton'
import hero from '../public/hero.png'
import Image from 'next/image'



interface customButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

const Hero = () => {
    const handleScroll = () => {
      
    }
    
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Find, book, or rent your dream car - quickly and easily
             </h1>
             <p className='hero__subtitle'> Trusted by thousands of users worldwide</p>
             <CustomButton 
             title='Explore Options'
             containerStyles='bg-primary-blue text-white rounded-full mt-10'
             handleClick={handleScroll}
             />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
            <Image src='/hero.png' alt='hero' fill className='object-contain' /> 
        </div>
        <div className='hero__image-overlay'>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
