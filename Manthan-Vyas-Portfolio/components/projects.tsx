"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Calendar, PenToolIcon as Tool, Activity } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activitiesRef, activitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none px-4 py-1 text-sm">
          PORTFOLIO
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects & Activities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Technical projects and extracurricular activities that showcase my skills and interests.
        </p>
      </motion.div>

      <motion.div
        ref={projectRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-12"
      >
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-3">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Technical Projects</h3>
        </div>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h4 className="text-xl font-semibold text-blue-700">MPLS-Design, Implementation and Monitor Performance</h4>
            <div className="flex items-center text-gray-600 mt-2 md:mt-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Jan – May 2015</span>
            </div>
          </div>
          <div className="text-gray-600 mb-3">
            <span className="font-medium text-indigo-600">Class:</span> Internetworking Seminar Topic
          </div>
          <div className="flex items-center mb-4">
            <Tool className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-gray-600">
              <span className="font-medium text-indigo-600">Tools:</span> GNS3 Network Simulator, PRTG NPM
            </span>
          </div>

          <motion.ul
            className="space-y-2 ml-6"
            initial={{ opacity: 0 }}
            animate={projectInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              "Designed MPLS Traffic-Engineering topology and configured with OSPF, BGP and MPLS TE Protocol to make understand a working of MPLS technology.",
              "Explained each command which are used to configure the network.",
              "Monitored the performance parameters such as response time and throughput by using Network Performance Monitoring Tool to analyze the network performance.",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={projectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <motion.div
        ref={activitiesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={activitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
      >
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-3">
            <Activity className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Extra-Curricular Activities</h3>
        </div>

        <motion.ul
          className="space-y-3 ml-6"
          initial={{ opacity: 0 }}
          animate={activitiesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            "Attended Atlantic Security Conference in April 2015 held at Halifax, Nova Scotia",
            "Volunteered in International Student Orientation 2014 at Dalhousie University",
            "Volunteered in Internetworking New Students Orientation for winter and fall 2014 intake at Internetworking Department, Dalhousie University",
            "Volunteered in GALA Night 2014, Dalhousie University",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={activitiesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-start"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span className="text-gray-700">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}

