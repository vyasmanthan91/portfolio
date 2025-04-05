"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Code2, Server, Monitor, Wrench, Network, Cloud, Award } from "lucide-react"

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  delay: number
}

const SkillCategory = ({ title, skills, icon, delay }: SkillCategoryProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay }}
      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: delay + index * 0.02 }}
          >
            <Badge
              variant="outline"
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 transition-all duration-300 hover:scale-105"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const CertificationItem = ({
  title,
  status,
  delay,
}: { title: string; status: "Certified" | "In Progress"; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: delay }}
      className="flex items-center mb-4"
    >
      <Badge
        className={`mr-3 ${
          status === "Certified"
            ? "bg-gradient-to-r from-green-500 to-emerald-500"
            : "bg-gradient-to-r from-amber-500 to-yellow-500"
        } text-white border-none px-3 py-1`}
      >
        {status}
      </Badge>
      <span className="text-gray-800 text-lg">{title}</span>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming & Database",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        "Python",
        "Java",
        "HTML",
        "CSS",
        "SQL",
        "PL-SQL",
        "XML",
        "Excel",
        "MS SQL Server",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Application Server",
      icon: <Server className="h-6 w-6" />,
      skills: ["SSH", "FTP", "Apache", "Active Directory", "Windows Server", "Microsoft SQL Server", "IIS", "MySQL"],
    },
    {
      title: "Operating System",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Linux/Unix", "RedHat Enterprise", "CentOS", "Ubuntu", "Windows", "MS DOS", "FreeBSD", "MacOS"],
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        "Wireshark",
        "Putty",
        "Siebel",
        "SolarWinds",
        "NPM",
        "PRTG Monitor",
        "Microsoft Office",
        "Visual Studio",
        "GNS3",
        "Packet Tracer",
      ],
    },
    {
      title: "Networking & Security",
      icon: <Network className="h-6 w-6" />,
      skills: [
        "TCP/IP",
        "OSPF",
        "BGP",
        "MPLS",
        "VLAN",
        "DNS",
        "DHCP",
        "IPv4",
        "Firewall",
        "VPN",
        "IPsec",
        "RADIUS",
        "LDAP",
        "IAM",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "AWS EC2",
        "RDS",
        "S3",
        "CloudWatch",
        "CloudFormation",
        "IAM",
        "EKS",
        "Kubernetes",
        "Azure",
        "Terraform",
        "CI/CD",
        "GitHub",
      ],
    },
  ]

  const certifications = [
    { title: "AWS Certified Solution Architect Associate (SAA-C03)", status: "Certified" as const },
    { title: "CCNA (Routing and Switching)", status: "Certified" as const },
    { title: "AWS Certified Solution Architect Professional", status: "In Progress" as const },
  ]

  return (
    <section id="skills" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none px-4 py-1 text-sm">
          EXPERTISE
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive technical skills across multiple domains including cloud technologies, networking, and software
          development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
      >
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mr-3">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
        </div>

        <div className="ml-4">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} title={cert.title} status={cert.status} delay={index * 0.1} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

