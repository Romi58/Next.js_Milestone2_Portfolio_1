import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Romaisa Hanif - Portfolio',
  description: 'Frontend Developer, Python Developer, Graphics Designer, and B2B Sales Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-900 text-white`}>
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          <AnimatedBackground />
          <Navbar />
          <main className="flex-grow z-10 relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

