"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Blood Donation Web App",
    description:
      "A full-stack platform connecting blood donors with those in need. Features real-time donor matching and location-based search.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-03PVn1NfycIT4f1jFtpbB6LrnaJDny.png",
    link: "https://bloodinneed.org",
    tech: "React, Material-UI, Node.js, MongoDB",
  },
  {
    title: "Assignment Dashboard",
    description:
      "A sophisticated task management system with progress tracking, priority management, and deadline monitoring.",
    image:
      "https://sjc.microlink.io/WyfGQjOvTZLs5YjPpMSXsHMFm1x3TbTvvcds5mmL9t3mNDf_T-OPYeekyrzzijUHykf5heI6XFmfQrxzCJNN-A.jpeg",
    link: "https://assignmenttracker.vercel.app/",
    tech: "Next.js, Chakra UI, SQLite, Prisma, Vercel",
  },
  {
    title: "Global Legal Reference",
    description:
      "A comprehensive platform for accessing and searching constitutional laws worldwide, with multi-language support.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SuC9dRHe5nlt4g1XsbvFk1wLBfbQdl.png",
    link: "https://lawyer-sa6e.onrender.com/",
    tech: "Flask, React, SQLAlchemy, Elasticsearch",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-black bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>
              <div className="relative p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-blue-500 bg-opacity-20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

