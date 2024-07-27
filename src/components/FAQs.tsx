'use client'
import React, { useState } from 'react'
import PlusIcon from '../assets/icons/plus.svg'
import MinusIcon from '../assets/icons/minus.svg'
import Image from 'next/image'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

const items = [
  {
    question: '1. We are building a work plan.',
    answer:
      '-We define the purpose of the site using its example and define its type and tasks.',
  },
  {
    question: '2. The beginning',
    answer: '- We are working on the design. And we define the site stack.',
  },
  {
    question: '3. Execution.',
    answer: '-We do the work, program and communicate with the client.',
  },
  {
    question: '4. Finish.',
    answer:
      '-We make the project and give it to the customer. Choosing a domain and hosting. We are completing the project.',
  },
]

const AccordionItem = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="py-7 border-b border-white/30">
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // className={clsx('mt-4', { hidden: !isOpen, '': isOpen === true })}
            initial={{ opacity: 0, height: 0, width: 0, marginTop: 0}}
            animate={{ opacity: 1, height: 'auto', width: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, width: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          How is the work going?
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  )
}
