"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-6">
            I'm a passionate web developer with expertise in React, Next.js, and modern frontend technologies. I love
            creating beautiful, responsive, and user-friendly websites that solve real-world problems.
          </p>
          <p className="text-lg mb-6">
            With a strong foundation in both design and development, I bring a unique perspective to every project. I'm
            always eager to learn new technologies and stay up-to-date with the latest industry trends.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring nature, reading tech blogs, or contributing to open-source
            projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

