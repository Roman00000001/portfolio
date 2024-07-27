'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export const Feature = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: any
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [shadow, setShadow] = useState('')

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const shadowX = (x - rect.width / 2) / 5
        const shadowY = (y - rect.height / 2) / 5
        setShadow(`${shadowX}px ${shadowY}px 30px rgba(100, 100, 100, 0.5)`)
      }
    }

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', updateMousePosition)
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative transition-shadow"
      style={{ boxShadow: shadow }}
    >
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  )
}
