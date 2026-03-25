import React from 'react'
import './Feedback.css'
import { trackEvent } from '../utils/analytics'

export default function Feedback() {
  const feedbackWhatsAppUrl = 'https://wa.me/8448658684?text=Hi%20Amy%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20my%20experience%20with%20Amyana.'

  const handleFeedbackClick = () => {
    trackEvent('whatsapp_click', {
      destination: feedbackWhatsAppUrl,
      page_path: window.location.pathname,
      cta_text: 'feedback_share_button',
    })
    window.open(feedbackWhatsAppUrl, '_blank')
  }

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
    <div className="feedback-page">
      <div className="feedback-hero">
        <div>
          <h1>Feedback</h1>
          <p>Stories of Transformation and Healing</p>
        </div>
      </div>

      <div className="feedback-main">
        <div className="feedback-grid-wrapper">
          <div className="feedback-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="feedback-item">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="feedback-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="feedback-cta">
          <h2>We'd Love to Hear From You</h2>
          <p>Share your healing journey with us</p>
          <button
            onClick={handleFeedbackClick}
            className="btn-primary"
          >
            Give Us Your Feedback
          </button>
        </div>
      </div>
    </div>
  )
}
