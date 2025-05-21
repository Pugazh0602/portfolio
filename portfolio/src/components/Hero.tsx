'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6 opacity-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-blue-600 dark:text-blue-300">Hi, I'm </span>
              <span className="text-blue-600 dark:text-blue-400">Pukazhendhi Raju</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white max-w-lg">
              Full Stack Developer
            </h2>
            <p className="text-white max-w-lg">

              I build modern, responsive, and user-friendly web applications using cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-blue-600 dark:text-blue-400">View Projects</span>
                
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-2xl transform -rotate-3" />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Replace with your image */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/your-photo.jpg"
                  alt="Pukazhendhi Raju"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 