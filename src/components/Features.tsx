import PythonIcon from '../assets/icons/python.jpg'
import JavaScriptIcon from '../assets/icons/javascript.jpg'
import TypeScriptIcon from '../assets/icons/react.jpg'
import Image from 'next/image'
import { Feature } from './Feature'

const features = [
  {
    title: 'Python',
    description:
      'Pygame, oop, discord bot, telebot, aiogram 3, flask, Django (MySQL).',
    icon: PythonIcon,
  },
  {
    title: 'JavaScript',
    description:
      'HTML, CSS, (SCSS, tailwind css), Canvas, anime.js, jQuery, react, redux, react query.',
    icon: JavaScriptIcon,
  },
  {
    title: 'TypeScript',
    description: 'Type, Next.js, Prisma, PostgreSQL, nest.js, (react native)',
    icon: TypeScriptIcon,
  },
]

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Skills
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Python, JavaScript, TypeScript (React, Next.js)
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description, icon }) => (
            <Feature
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
