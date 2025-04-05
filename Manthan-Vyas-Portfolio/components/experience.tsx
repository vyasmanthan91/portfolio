"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Server, Cloud, Database, Code, Network, Headphones } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  icon: React.ReactNode
  index: number
}

const ExperienceItem = ({ title, company, location, period, description, icon, index }: ExperienceItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-12"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <div className="flex items-center mb-2">
            <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-3">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <div className="text-blue-700 font-medium mb-1">{company}</div>
          <div className="flex items-center text-gray-600 mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
        </div>
        <div className="md:w-3/4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <ul className="space-y-2">
            {description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className="flex items-start"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Cloud Support Engineer II (L5)",
      company: "Amazon Web Services Inc Canada",
      location: "Toronto, ON",
      period: "Sep 2022 – Nov 2024",
      icon: <Cloud className="h-6 w-6" />,
      description: [
        "Learn and use groundbreaking technologies like EC2 Windows, AWS Systems Manager, AWS Migration, AWS Disaster Recovery, S3, LightSail, VM Import/Export, IAM, CloudWatch, VPC/Networking, EKS etc.",
        "Perform deep level troubleshooting for AWS EC2 Windows server related issues using CloudWatch, Cloud Trail, Event Viewer logs, Sysinternals tools, Perfmon etc.",
        "Perform advanced level of Network troubleshooting using VPC Flow logs, Reachability Analyzer tool, telnet, test-netconnection, tracert, and packet capture tools.",
        "Provide support to analyze cloud expenses, implement FinOps processes, manage AWS credits and discount programs using AWS Budget, AWS Cost Explorer and AWS Cost and Usage Report.",
        "Develop, maintain, and troubleshoot AWS infrastructure using Terraform to automate and optimize resource provisioning and management.",
      ],
    },
    {
      title: "Technical Services Engineer",
      company: "RLDatix North America Inc",
      location: "Toronto, ON",
      period: "May 2021 – Sep 2022",
      icon: <Server className="h-6 w-6" />,
      description: [
        "Perform software upgrades, application migrations, and database migrations for customers.",
        "Lead customers through technical service projects by coordinating and hosting meetings, and collaborating on project schedules and Production cutover plans.",
        "Managed VMware vSphere infrastructure including ESXi hosts, vCenter Server and PowerCLI and VM Cluster and maintained High Availability, DRS including Storage and Networking.",
        "Configure and monitor Microsoft Defender for Endpoint, Defender for Office 365, and cloud security policies.",
        "Query live SQL databases in search of data integrity or performance issues and write/modify SQL triggers, functions, stored procedures, views, and general statements.",
      ],
    },
    {
      title: "Application Specialist",
      company: "Ceridian Canada Ltd",
      location: "Mississauga, ON",
      period: "Nov 2017 – Apr 2021",
      icon: <Database className="h-6 w-6" />,
      description: [
        "Provide effective response and resolution to issues logged by clients related to the Production environment.",
        "Write SQL scripts to find solutions on data related technical issues.",
        "Use internal application monitoring tool to monitor client's major configuration change in real time.",
        "Execute technical projects to provide efficient and effective response for major updates and issues.",
        "Investigate issues by reading application logs and product development to narrow down data failure generated from specific modules of application.",
      ],
    },
    {
      title: "Technical Support Specialist",
      company: "Xplornet Communication Inc",
      location: "Fredericton, NB",
      period: "Nov 2016 – Jul 2017",
      icon: <Network className="h-6 w-6" />,
      description: [
        "Provide technical and network problem resolution to end-users by performing question diagnosis while guiding users through step-by-step solutions.",
        "Diagnose and resolve technical hardware and software issues involving internet connectivity, email clients, Modems, Routers, IP home phones and PC.",
        "Check for Network Outage and Alerts, provide firmware updates for faulty equipment as well as Technical support for Different Satellites and fixed wireless equipment.",
        "Research required information using available resources and follow standard processes and procedures.",
      ],
    },
    {
      title: "Technical Application Support Specialist | VoIP",
      company: "Innovatia Inc.",
      location: "Halifax, NS",
      period: "Feb 2016 – Sep 2016",
      icon: <Headphones className="h-6 w-6" />,
      description: [
        "Resolve network related and telephony issues using Linux and documenting on Ticketing System Siebel.",
        "Being knowledgeable on Avaya Aura Communication Manager 6.0, IPSI, MEDPRO, CLAN and the VoIP protocols like SIP, H.323.",
        "Provide solutions to clients by identifying problems, researching and troubleshooting client's Avaya Telephony issues.",
        "Troubleshoot across various platforms including Avaya, Cisco and Juniper products.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Dalhousie University",
      location: "Halifax, Nova Scotia",
      period: "Sep 2014 – Feb 2015",
      icon: <Code className="h-6 w-6" />,
      description: [
        "Provide guidance on Python and Linux assignments using Eclipse for RTOS, design and explain RTOS programs.",
        "Assist with lab work on OSPF, BGP, MPLS-VPN, CUCM, and network security.",
        "Support students in lab configuration and troubleshooting.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none px-4 py-1 text-sm">
          CAREER PATH
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Over 8 years of hands-on experience in cloud technologies, software applications, and technical support.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            description={exp.description}
            icon={exp.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

