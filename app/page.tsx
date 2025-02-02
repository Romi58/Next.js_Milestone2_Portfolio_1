"use client"

import Image from "next/image"
// import { motion } from 'framer-motion'
import { useState, useEffect } from "react"

const roles = ["Frontend Developer", "Python Developer", "Graphics Designer", "B2B Sales Expert"]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === roles[roleIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    } else {
      const nextChar = isDeleting
        ? roles[roleIndex].substring(0, displayText.length - 1)
        : roles[roleIndex].substring(0, displayText.length + 1)

      timeout = setTimeout(() => setDisplayText(nextChar), isDeleting ? 50 : 150)
    }

    return () => clearTimeout(timeout)
  }, [roleIndex, displayText, isDeleting])

  return (
    <div className="page-content relative">
      <Image src="/bg_home.png" alt="Home Background" fill className="page-background" />
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="heading-responsive font-bold mb-4 home-title">Hello, I am Romaisa Hanif</h1>
            <div>
              <h2 className="text-responsive mb-6 home-subtitle">
                I am a <span style={{ color: "#3498db", fontWeight: 600 }}>{displayText}</span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <div>
              <a href="/contact" className="btn">
                Get in touch
              </a>
            </div>
          </div>
          <div className="home-image-container">
            <Image src="/homepage.jpg" alt="Romaisa Hanif" width={800} height={800} className="home-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

