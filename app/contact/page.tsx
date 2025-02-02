import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="page-content relative">
      <Image
        src="/images/contact-bg.jpg"
        alt="Contact Background"
        fill
        className="page-background"
      />
      <div className="container">
        <motion.h1 
          className="heading-responsive font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>
        <div className="contact-content">
          <motion.div 
            className="contact-image-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/contact-image.jpg"
              alt="Contact"
              width={400}
              height={400}
              className="contact-image"
            />
          </motion.div>
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

