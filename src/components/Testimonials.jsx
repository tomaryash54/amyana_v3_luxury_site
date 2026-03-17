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

  const itemsPerView = 3

  useEffect(() => {
    if (testimonials.length === 0) return

    const interval = setInterval(() => {
      // Sliding window: move to next testimonial for rotating display
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  // Get the 3 testimonials to display (sliding window)
  const visibleTestimonials = []
  for (let i = 0; i < itemsPerView; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length])
  }

  return (
    <div className="testimonials-carousel-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="testimonials-grid-container"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-grid-item">
              <img 
                src={testimonial.image} 
                alt={testimonial.alt}
                className="testimonial-grid-image"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="testimonials-nav-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial group ${Math.floor(index / itemsPerView) + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
