"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none px-4 py-1 text-sm">
          GET IN TOUCH
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-4 mt-1">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-700 mb-1">Location</h4>
                <p className="text-gray-600">1A Richview Road, Etobicoke, ON M9A 4M5</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-4 mt-1">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-700 mb-1">Email</h4>
                <p className="text-gray-600">
                  <a href="mailto:vyasmanthan91@gmail.com" className="hover:text-blue-700 transition-colors">
                    vyasmanthan91@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-4 mt-1">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-700 mb-1">Phone</h4>
                <p className="text-gray-600">
                  <a href="tel:+16474716161" className="hover:text-blue-700 transition-colors">
                    (647) 471 6161
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-4 mt-1">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-700 mb-1">LinkedIn</h4>
                <p className="text-gray-600">
                  <a
                    href="https://www.linkedin.com/in/manthan-vyas-18b255a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                  >
                    linkedin.com/in/manthan-vyas-18b255a6
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
        >
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-blue-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-blue-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-blue-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full py-12"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-6">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
              <p className="text-gray-600 text-center max-w-md">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <Button
                className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

