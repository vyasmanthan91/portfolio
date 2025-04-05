"use client"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollAnimations from "@/components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
      <ScrollAnimations />
      <ScrollToTop />
    </main>
  )
}

