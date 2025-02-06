"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiPhone, FiGithub } from "react-icons/fi"
import { sendContactEmail } from "../actions/contact"
import type React from "react"

const Contact = () => {
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    try {
      const formData = new FormData(e.currentTarget)
      const response = await sendContactEmail(formData)

      if ("error" in response) {
        setFormStatus({
          type: "error",
          message: response.error,
        })
      } else {
        setFormStatus({
          type: "success",
          message: response.message,
        })
        // Reset form
        e.currentTarget.reset()
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later or contact me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Contact Information</h3>

              <div className="flex items-center space-x-3">
                <FiMail className="text-blue-400 w-6 h-6" />
                <a href="mailto:znafi@ualberta.ca" className="text-gray-300 hover:text-blue-400 transition-colors">
                  znafi@ualberta.ca
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FiPhone className="text-blue-400 w-6 h-6" />
                <a href="tel:+18253336984" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +1 825-333-6984
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FiGithub className="text-blue-400 w-6 h-6" />
                <a
                  href="https://github.com/znafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  github.com/znafi
                </a>
              </div>
            </motion.div>
          </div>

          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Your Email"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Your Message"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {formStatus.message && (
              <div
                className={`p-4 rounded-lg ${
                  formStatus.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

