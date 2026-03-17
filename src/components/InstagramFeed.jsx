import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function InstagramFeed() {
  const [posts, setPosts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    fetchInstagramPosts()
  }, [])

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true)
      const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN
      
      if (!token) {
        setError('TOKEN_NOT_SET')
        setLoading(false)
        return
      }

      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp,permalink&access_token=${token}`
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Instagram API error:', errorData)
        throw new Error(errorData.error?.message || 'Failed to fetch Instagram posts')
      }

      const data = await response.json()
      
      if (!data.data || data.data.length === 0) {
        setError('NO_POSTS')
        setLoading(false)
        return
      }

      const filteredPosts = data.data.filter(post => 
        post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'
      ).slice(0, 12)

      setPosts(filteredPosts)
      setError(null)
    } catch (err) {
      console.error('Instagram fetch error:', err)
      setError('FETCH_ERROR')
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (posts.length === 0) return

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % posts.length)
      }, 5000)
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [posts.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % posts.length)
    }, 5000)
  }

  const currentPost = posts[currentIndex]

  if (loading) {
    return (
      <div className="instagram-feed-container">
        <div className="feed-loading">
          <p>Loading Instagram feed...</p>
        </div>
      </div>
    )
  }

  // Show setup message if token is not configured
  if (error === 'TOKEN_NOT_SET') {
    return (
      <div className="instagram-feed-container">
        <div className="feed-setup">
          <h3>Connect Your Instagram</h3>
          <p>Follow us for daily wellness insights and healing practices</p>
          <a 
            href="https://www.instagram.com/amyana.official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit @amyana.official
          </a>
          <p className="setup-note">Admin: See INSTAGRAM_SETUP.md to enable the live feed</p>
        </div>
      </div>
    )
  }

  if (error || posts.length === 0) {
    return (
      <div className="instagram-feed-container">
        <div className="feed-error">
          <p>Follow us on Instagram for daily wellness insights</p>
          <a 
            href="https://www.instagram.com/amyana.official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            @amyana.official
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="instagram-feed-container">
      <div className="feed-carousel">
        <AnimatePresence mode="wait">
          {currentPost && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="feed-slide"
            >
              <img 
                src={currentPost.media_url || currentPost.thumbnail_url} 
                alt={currentPost.caption || 'Instagram post'}
                className="feed-image"
              />
              <div className="feed-overlay">
                <p className="feed-caption">
                  {currentPost.caption ? currentPost.caption.substring(0, 100) + '...' : ''}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          className="feed-nav feed-nav-prev"
          onClick={() => goToSlide((currentIndex - 1 + posts.length) % posts.length)}
          aria-label="Previous post"
        >
          ←
        </button>
        <button 
          className="feed-nav feed-nav-next"
          onClick={() => goToSlide((currentIndex + 1) % posts.length)}
          aria-label="Next post"
        >
          →
        </button>
      </div>

      <div className="feed-thumbnails">
        {posts.map((post, index) => (
          <motion.button
            key={post.id}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={post.media_url || post.thumbnail_url} 
              alt={`Post ${index + 1}`}
            />
          </motion.button>
        ))}
      </div>

      <div className="feed-footer">
        <a 
          href="https://www.instagram.com/amyana.official" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-link"
        >
          Follow @amyana.official for more wellness insights
        </a>
      </div>
    </div>
  )
}
