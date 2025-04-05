"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"

interface EducationItemProps {
  degree: string
  institution: string
  date: string
  gpa: string
  courses: string
  delay: number
}

const EducationItem = ({ degree, institution, date, gpa, courses, delay }: EducationItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-3">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{degree}</h3>
          </div>
          <div className="text-blue-700 font-medium mb-2">{institution}</div>
          <div className="flex items-center text-gray-600 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="text-gray-600">
            <span className="font-semibold text-indigo-600">GPA:</span> {gpa}
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex items-center mb-3">
            <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
            <h4 className="text-lg font-medium text-gray-800">Relevant Courses</h4>
          </div>
          <p className="text-gray-600">{courses}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationItems = [
    {
      degree: "Master of Engineering (Internetworking)",
      institution: "Dalhousie University, Halifax, NS",
      date: "Oct 2015",
      gpa: "3.83/4.3",
      courses:
        "Real Time Operating System, Internet Communication Protocol, Network Architecture, Emerging Internetworking Technologies, Network Security, Network Design",
    },
    {
      degree: "Bachelor of Engineering (Comp. Eng.)",
      institution: "Gujarat Technological University, Ahmedabad, India",
      date: "May 2012",
      gpa: "6.86/9",
      courses:
        "Basics of C/C++, Advanced Java, Information Security, Computer Networks, Advanced Computer Networks, DBMS",
    },
  ]

  return (
    <section id="education" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none px-4 py-1 text-sm">
          ACADEMIC BACKGROUND
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Strong academic foundation in computer engineering and internetworking technologies.
        </p>
      </motion.div>

      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <EducationItem
            key={index}
            degree={item.degree}
            institution={item.institution}
            date={item.date}
            gpa={item.gpa}
            courses={item.courses}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  )
}

