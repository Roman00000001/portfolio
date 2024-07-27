'use client'
import appScreen from '../assets/images/anirom.jpg'
import MusRom from '../assets/images/musrom.jpg'
import Post from '../assets/images/postfan.jpg'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  })
  
  useEffect(() => {
    scrollYProgress.on('change', (latestValue) =>
      console.log('latestValue', latestValue)
    )
  }, [scrollYProgress])

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Project
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70">MusRom</p>
        </div>
        <motion.div
          ref={appImage}
          style={{
            opacity: 0.5,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
          className="mt-14"
        >
          <Image src={MusRom} alt="MusRom" layout="responsive" />
        </motion.div>
      </div>
    </div>
  )
}
