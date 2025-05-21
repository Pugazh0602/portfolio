import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import WorkExperience from '@/components/WorkExperience'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  )
}
