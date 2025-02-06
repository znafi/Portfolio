"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type React from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          ZN
        </Link>
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-90 py-4"
        >
          <NavLink href="#projects" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink href="#experience" onClick={toggleMenu}>
            Experience
          </NavLink>
          <NavLink href="#skills" onClick={toggleMenu}>
            Skills
          </NavLink>
          <NavLink href="#contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    className="block py-2 px-4 text-gray-300 hover:text-white transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Header

