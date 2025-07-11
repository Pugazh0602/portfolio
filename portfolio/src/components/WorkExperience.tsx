'use client'

import React, { useEffect, useRef } from 'react'

const workExperiences = [
  {
    title: 'App Development',
    description: 'I design and build innovative Android apps that combine AI, voice interaction, and real-time cloud features. My projects focus on solving real-world problems—from smart finance tools to secure messaging and futuristic launchers.',
    icon: '/icons/app-dev.png',
    link: '#',
  },
  {
    title: 'Founder – Kayam Exim',
    description: 'Created a health-focused seafood brand during a startup bootcamp.',
    icon: "https://i.pinimg.com/736x/91/b4/bb/91b4bb79e2ffdae7e055d8a8da648b08.jpg",
    link: 'https://kayamexim-2aab1.web.app/',
  },
  {
    title: 'Web Development',
    description: 'I create responsive and user-friendly web applications combining powerful AI models with clean design. My experience spans from building machine learning-powered health apps to dynamic portfolio sites using modern frameworks like React and Tailwind CSS.',
    icon: '/icons/web-dev.png',
    link: '#',
  },
  {
    title: 'IoT Development',
    description: 'I design and build smart connected devices using ESP32 and Arduino platforms.',
    icon: '/icons/iot-dev.png',
    link: '#',
  },
]

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work-experience" className="py-20 bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExperiences.map((item) => (
              <div
                key={item.title}
                className="bg-purple-900/40 rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
              >
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience 