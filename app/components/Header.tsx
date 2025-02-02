"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (!isMounted) {
    return null
  }

  return (
    <header className="header">
      <nav className="container header-nav">
        <Link href="/" className="header-logo">
          Romaisa Hanif
        </Link>
        <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="header-toggle">
          <FaBars size={28} />
        </button>
      </nav>
    </header>
  )
}

export default Header

