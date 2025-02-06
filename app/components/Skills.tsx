"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Technologies",
    skills: ["React", "Next.js", "Flask", "Node.js", "Express", "Prisma", "MongoDB", "SQLite", "Elasticsearch"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Postman", "VS Code", "JIRA", "LaTeX"],
  },
  {
    title: "Methodologies",
    skills: ["Agile", "Scrum", "CI/CD", "Test-Driven Development (TDD)"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Arsenal
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

