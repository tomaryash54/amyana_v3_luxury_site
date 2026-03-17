import { motion } from 'framer-motion'

export default function Testimonials() {
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

  if (testimonials.length === 0) {
    return null
  }

  return (
    <div className="testimonials-grid-container">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="testimonial-grid-item"
        >
          <img 
            src={testimonial.image} 
            alt={testimonial.alt}
            className="testimonial-grid-image"
          />
        </motion.div>
      ))}
    </div>
  )
}
