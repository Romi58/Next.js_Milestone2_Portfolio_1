import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Romaisa Hanif</h3>
            <p className="text-gray-400">Frontend Developer, Python Developer, Graphics Designer, and B2B Sales Expert</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Connect with me</h4>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/romaisa-hanif/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://github.com/Romi58" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <FaGithub size={24} />
              </Link>
              <Link href="mailto:romaisahanifabbasi@gmail.com" className="hover:text-red-400 transition-colors">
                <FaEnvelope size={24} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

