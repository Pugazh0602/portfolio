'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Eye Disease Recognition CNN',
    description: 'A deep learning project using Convolutional Neural Networks (CNN) for the detection and classification of various eye diseases. Built with Python and TensorFlow, this project demonstrates the application of AI in medical image analysis.',
    image: 'https://imgs.search.brave.com/6L6wAFaS8ptiQ0QFZ7znarlNeHcK_dqfwvW_TTlEG50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODc2/OTA3ODI4L3Bob3Rv/L2V5ZXNpZ2h0LWV4/YW0uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU1zMGNmQWJU/djZRWnM3djJYYU9W/czIwNnRmUHBxWk9D/VEVUeDMwbDRsOWc9',
    tags: ['Python', 'TensorFlow', 'CNN', 'Deep Learning', 'Computer Vision'],
    link: 'https://github.com/Pugazh0602/EyeDiseaseRecognitionCNN',
    github: 'https://github.com/Pugazh0602/EyeDiseaseRecognitionCNN',
  },
  {
    title: 'Budget Buddy Joy',
    description: 'A personal finance management application built with TypeScript, helping users track expenses, set budgets, and manage their financial goals. Features include expense categorization, budget planning, and financial analytics.',
    image: 'https://imgs.search.brave.com/1eiVThgWNYB260vxDH0nfjH_P8PFE4Cz25KZwwyNelM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzI3/OWU2NmMyLWQyMzQt/NDM1Zi04YjZkLTNi/ZjEzNzFjYWNhYS5f/X0NSMCwwLDMwMDAs/MzAwMF9QVDBfU1gz/MDBfVjFfX18uanBn',
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Full Stack'],
    link: 'https://github.com/Pugazh0602/budget-buddy-joy',
    github: 'https://github.com/Pugazh0602/budget-buddy-joy',
  },
  {
    title: 'Invisible Apps Haven',
    description: 'A platform showcasing innovative and unique web applications. Built with TypeScript, this project demonstrates modern web development practices and creative application design.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    tags: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
    link: 'https://github.com/Pugazh0602/invisible-apps-haven',
    github: 'https://github.com/Pugazh0602/invisible-apps-haven',
  },
  {
    title: 'Neon Legal Minder',
    description: 'A modern legal management system built with TypeScript, featuring case management, document handling, and client communication tools. This project showcases full-stack development skills with a focus on user experience.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tags: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Full Stack'],
    link: 'https://github.com/Pugazh0602/neon-legal-minder',
    github: 'https://github.com/Pugazh0602/neon-legal-minder',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode support, and a contact form. This project demonstrates frontend development skills and attention to design details.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    link: '#',
    github: 'https://github.com/Pugazh0602/portfolio',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with features like product management, shopping cart, payment integration, and order tracking. Built with a focus on scalability and user experience.',
    image: 'https://imgs.search.brave.com/MkAX1LF0qCYpwqjS6b99iRcFd5KP70s5kpadrU4Bb1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzcwLzY1Lzc4/LzM2MF9GXzcwNjU3/ODgyX0ppTmZFZmNY/eTA1UHVNclJWNGli/a3JTZ3QzSXJ1V1Iz/LmpwZw',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Redux'],
    link: 'https://github.com/Pugazh0602/ecommerce-platform',
    github: 'https://github.com/Pugazh0602/ecommerce-platform',
  },
  
  {
    title: 'Weather Forecast App',
    description: 'A weather forecasting application that provides real-time weather data and forecasts. Features include location-based weather updates, 7-day forecasts, and weather alerts.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: ['React', 'OpenWeather API', 'Geolocation', 'CSS Modules'],
    link: 'https://github.com/Pugazh0602/weather-forecast-app',
    github: 'https://github.com/Pugazh0602/weather-forecast-app',
  }
]

const Projects = () => {
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">My Projects</h2>
          <p className="text-white max-w-lg text-center mb-12 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills in full-stack development,
            machine learning, and software engineering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-purple-800/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover-card"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        Live Demo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
                    >
                      GitHub
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 