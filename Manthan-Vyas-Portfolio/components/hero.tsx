"use client"

import { motion } from "framer-motion"
import { Download, Mail, Linkedin, Phone, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    if (scrollRef.current) {
      const nextSection = scrollRef.current.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div
      ref={scrollRef}
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-gray-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            MANTHAN KUMAR VYAS
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-light mb-8 text-blue-700">
            Cloud Support Engineer & Technical Specialist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center text-gray-700 bg-white shadow-sm px-4 py-2 rounded-full">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">Etobicoke, ON</span>
          </div>
          <div className="flex items-center text-gray-700 bg-white shadow-sm px-4 py-2 rounded-full">
            <Phone className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">(647) 471 6161</span>
          </div>
          <div className="flex items-center text-gray-700 bg-white shadow-sm px-4 py-2 rounded-full">
            <Mail className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">vyasmanthan91@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-700 bg-white shadow-sm px-4 py-2 rounded-full">
            <Linkedin className="h-4 w-4 mr-2 text-blue-600" />
            <a
              href="https://www.linkedin.com/in/manthan-vyas-18b255a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-700"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none"
            onClick={() => window.print()}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        onClick={scrollToNext}
      >
        <ChevronDown className="h-10 w-10 text-blue-500" />
      </motion.div>
    </div>
  )
}

