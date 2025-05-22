'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Python', level: 75 },
]

const About = () => {
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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Who I Am</h3>
              <p className="text-white max-w-lg">
                I&apos;m a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions to complex problems.I&apos;ve worked on various projects ranging
                from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-white max-w-lg">
                My approach combines technical expertise with creative problem-solving,
                always focusing on delivering high-quality, maintainable code and exceptional
                user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white max-w-lg">{skill.name}</span>
                      <span className="text-white max-w-lg">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/40 rounded-xl p-8 shadow-lg flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <p className="text-white max-w-lg">
                Bachelor&apos;s Degree in Computer Science<br />
                University Name<br />
                2018 - 2022
              </p>
            </div>
            <div className="bg-purple-900/40 rounded-xl p-8 shadow-lg flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <h4 className="text-xl font-semibold mb-4">Experience</h4>
              <p className="text-white max-w-lg">
              Creative Full Stack Developer<br />
              Freelancing<br />
                2024 - Present
              </p>
            </div>
            <div className="bg-purple-900/40 rounded-xl p-8 shadow-lg flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <h4 className="text-xl font-semibold mb-4">Interests</h4>
              <p className="text-white max-w-lg">
                • Open Source Contribution<br />
                • Mobile App Development<br />
                • Machine Learning<br />
                • Photography
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 