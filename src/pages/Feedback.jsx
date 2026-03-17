import React from 'react'

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
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="testimonial-image"
                />
              </div>
            ))}
          </div>

          <div className="feedback-cta-section">
            <h2>We'd Love to Hear From You</h2>
            <p>Share your healing journey with us</p>
            <button
              onClick={() => window.open('https://wa.me/8448658684?text=Hi%20Amy%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20my%20experience%20with%20Amyana.', '_blank')}
              className="btn-primary"
            >
              Give Us Your Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
