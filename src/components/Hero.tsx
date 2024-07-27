'use client'

import ArrowWIcon from '../assets/icons/arrow-w.svg'
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute sm:h-[768px] sm:w-[1536px] lg:w-[2400px] lg:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bottom-24 top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-1 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span> Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tight text-center">
              Roman
            </h1>
            <motion.div
              className="absolute hidden sm:block sm:top-[-150px] sm:right-[-200px]"
              drag
              
            >
              <Image
                src={cursorImage}
                alt="Cursor Image"
                width={200}
                height={200}
              />
            </motion.div>
            <motion.div
              className="absolute hidden sm:block sm:bottom-[-200px] sm:left-[-200px]"
              drag
            >
              <Image
                src={messageImage}
                alt="Message Image"
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8">
            Development of websites,
            <br /> mobile applications and bots (tg, ds)
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
}
