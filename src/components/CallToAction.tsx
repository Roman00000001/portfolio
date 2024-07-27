'use client'
import helixImage from '../assets/images/helix2.png'
import emojiStar from '../assets/images/emojistar.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div
          className="absolute top-6 left-[calc(100%+36px)] cursor-pointer"
          drag

        >
          <Image
            src={helixImage}
            alt="Helix"
            className="max-w-none"
          />
        </motion.div>
        <motion.div
          className="absolute -top-[120px] right-[calc(100%+24px)] cursor-pointer"
          drag
          
          
        >
          <Image
            src={emojiStar}
            alt="Emoji Star"
            className="max-w-none"
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Let&s get in touch!
        </h2>
        <p className="text-xl text-white/70 mt-5">tg:@CTIRoman</p>
        <form
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
          action=""
        >
          <input
            type="email"
            placeholder="roman.gergokov@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg font-medium px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  )
}
