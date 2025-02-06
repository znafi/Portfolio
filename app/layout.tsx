import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zawad Nafi - Portfolio",
  description: "Innovative Computer Science Student | Project Manager | Web Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

