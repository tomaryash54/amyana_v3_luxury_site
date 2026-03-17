import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Testimonials array with 8 handwritten testimonial images
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

  useEffect(() => {
    if (testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  if (testimonials.length === 0) {
    return null // Don't render if no testimonials
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="testimonials-container">
      <div className="testimonials-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="testimonial-slide"
          >
            <img 
              src={currentTestimonial.image} 
              alt={currentTestimonial.alt}
              className="testimonial-image"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
