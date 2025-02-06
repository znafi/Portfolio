"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Project Manager",
    company: "ConnectionHub.ca",
    date: "Summer Internship, May - August 2024",
    description: [
      "Led project planning and execution, increasing team efficiency by 30% through Agile methodologies.",
      "Coordinated cross-functional teams to align with business goals, demonstrating ownership and customer obsession.",
      "Managed stakeholder communication, risk assessments, and optimized resource allocation by 20%.",
    ],
  },
  {
    title: "Area Sales Manager",
    company: "TELUS",
    date: "February 2024 - Present",
    description: [
      "Increased customer acquisition by 40% through data-driven sales strategies.",
      "Led a team of sales representatives, mentoring them in high-performance sales methodologies.",
      "Maintained strong customer relationships, earning multiple 5-star client reviews.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg p-8 border border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{exp.title}</h3>
              <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

