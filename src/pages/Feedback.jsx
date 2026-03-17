import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Feedback() {
  const testimonials = [
    { image: '/images/testimonial1.jpg', alt: 'Testimonial 1' },
    { image: '/images/testimonial2.jpg', alt: 'Testimonial 2' },
    { image: '/images/testimonial3.jpg', alt: 'Testimonial 3' },
    { image: '/images/testimonial4.jpg', alt: 'Testimonial 4' },
    { image: '/images/testimonial5.jpg', alt: 'Testimonial 5' },
    { image: '/images/testimonial6.jpg', alt: 'Testimonial 6' },
    { image: '/images/testimonial7.jpg', alt: 'Testimonial 7' },
    { image: '/images/testimonial8.jpg', alt: 'Testimonial 8' },
  ]

  // Generate random rotations for each testimonial
  const randomRotations = useMemo(() => {
    return testimonials.map(() => Math.random() * 4 - 2)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const noteVariants = (rotation) => ({
    hidden: { opacity: 0, y: 30, rotate: -8 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: rotation,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 80,
      },
    },
  })

  return (
    <>
      <div className="page-hero feedback-hero">
        <div>
          <h1>Feedback</h1>
          <p>Stories of Transformation and Healing</p>
        </div>
      </div>

      <div className="feedback-container">
        <div className="container">
          <motion.div
            className="testimonials-whiteboard-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="whiteboard-note"
                variants={noteVariants(randomRotations[index])}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="whiteboard-image"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="feedback-cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>We'd Love to Hear From You</h2>
            <p>Share your healing journey with us</p>
            <a 
              href="https://wa.me/8448658684?text=Hi%20Amy%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20my%20experience%20with%20Amyana." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-feedback"
            >
              Give Us Your Feedback
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}
