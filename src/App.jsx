
import {BrowserRouter,Routes,Route,Link,useLocation} from "react-router-dom"
import {useState, Suspense, lazy, useEffect} from "react"
import { initAnalytics, trackEvent } from "./utils/analytics"
import ErrorBoundary from "./components/ErrorBoundary"

const Home = lazy(() => import("./pages/Home"))
const Reiki = lazy(() => import("./pages/Reiki"))
const GiftCards = lazy(() => import("./pages/GiftCards"))
const Sound = lazy(() => import("./pages/Sound"))
const Workshops = lazy(() => import("./pages/Workshops"))
const Corporate = lazy(() => import("./pages/Corporate"))
const Hospitality = lazy(() => import("./pages/Hospitality"))
const OurStory = lazy(() => import("./pages/OurStory"))
const PersonalHealing = lazy(() => import("./pages/PersonalHealing"))
const Feedback = lazy(() => import("./pages/Feedback"))

const OFFERING_ROUTES = {
  "/workshops": "workshops",
  "/corporate": "corporate",
  "/hospitality": "hospitality",
  "/sound": "sound",
  "/our-story": "our_story",
  "/personal-healing": "personal_healing",
  "/reiki": "reiki",
}

const PAGE_TITLES = {
  "/": "AMYANA Wellness",
  "/sound": "Sound Baths | AMYANA Wellness",
  "/reiki": "Reiki | AMYANA Wellness",
  "/gift": "Gift Cards | AMYANA Wellness",
  "/workshops": "Workshops & Retreats | AMYANA Wellness",
  "/corporate": "Corporate Wellness | AMYANA Wellness",
  "/hospitality": "Hospitality Wellness | AMYANA Wellness",
  "/our-story": "Our Story | AMYANA Wellness",
  "/personal-healing": "Personal Healing | AMYANA Wellness",
  "/feedback": "Feedback | AMYANA Wellness",
}

const SITE_URL = "https://amyana.in"
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/footer1.jpg`

const PAGE_META = {
  "/": {
    description: "AMYANA is a refined healing space in Delhi NCR for sound baths, reiki, workshops, corporate wellness, and hospitality wellness experiences.",
    image: `${SITE_URL}/images/footer1.jpg`,
  },
  "/sound": {
    description: "Private and group sound bath experiences for deep restoration, emotional balance, and nervous system regulation.",
    image: `${SITE_URL}/images/private.jpg`,
  },
  "/reiki": {
    description: "Reiki sessions designed for emotional balance, energetic alignment, and gentle nervous system support.",
    image: `${SITE_URL}/images/reiki.jpg`,
  },
  "/gift": {
    description: "Gift meaningful wellness experiences with AMYANA gift cards for private sessions, workshops, and retreats.",
    image: `${SITE_URL}/images/gift1.jpg`,
  },
  "/workshops": {
    description: "Immersive workshops and retreats designed to reconnect you with stillness, reflection, and renewal.",
    image: `${SITE_URL}/images/workshops.jpg`,
  },
  "/corporate": {
    description: "Nervous system-led corporate wellness sessions for stress reduction, clarity, and emotional resilience.",
    image: `${SITE_URL}/images/corporate.jpg`,
  },
  "/hospitality": {
    description: "Curated hospitality wellness experiences for boutique hotels, retreats, and luxury guest journeys.",
    image: `${SITE_URL}/images/hospitality.jpg`,
  },
  "/our-story": {
    description: "Discover the philosophy and healing foundation behind AMYANA and its approach to restoration.",
    image: `${SITE_URL}/images/footer1.jpg`,
  },
  "/personal-healing": {
    description: "A personal healing journey designed to restore balance through intentional, one-on-one care.",
    image: `${SITE_URL}/images/personal-healing.jpg`,
  },
  "/feedback": {
    description: "Read stories of transformation and healing shared by the AMYANA community.",
    image: `${SITE_URL}/images/feedback-bg.jpeg`,
  },
}

function setMetaTag({ name, property, content }) {
  if (!content) return

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
  const attr = name ? "name" : "property"
  const value = name || property

  let tag = document.querySelector(selector)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, value)
    document.head.appendChild(tag)
  }

  tag.setAttribute("content", content)
}

function updateRouteMeta(pathname, title) {
  const safePath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "")
  const canonicalUrl = `${SITE_URL}${safePath === "/" ? "/" : safePath}`
  const routeMeta = PAGE_META[safePath] || PAGE_META["/"]
  const description = routeMeta?.description || PAGE_META["/"].description
  const image = routeMeta?.image || DEFAULT_OG_IMAGE

  const canonical = document.querySelector("link[rel='canonical']")
  if (canonical) canonical.setAttribute("href", canonicalUrl)

  setMetaTag({ name: "description", content: description })
  setMetaTag({ name: "twitter:title", content: title })
  setMetaTag({ name: "twitter:description", content: description })
  setMetaTag({ name: "twitter:image", content: image })

  setMetaTag({ property: "og:title", content: title })
  setMetaTag({ property: "og:description", content: description })
  setMetaTag({ property: "og:url", content: canonicalUrl })
  setMetaTag({ property: "og:image", content: image })

  const isPreviewHost = /\.vercel\.app$/i.test(window.location.hostname)
  setMetaTag({
    name: "robots",
    content: isPreviewHost ? "noindex,nofollow" : "index,follow,max-image-preview:large",
  })
}

function Nav(){
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [dropdownOpen, setDropdownOpen] = useState(false)

const closeMenu = () => {
  setMobileMenuOpen(false)
  setDropdownOpen(false)
}

const toggleDropdown = (e) => {
  e.stopPropagation()
  setDropdownOpen((prev) => !prev)
}

const toggleMobileMenu = () => {
  setMobileMenuOpen((prev) => {
    if (prev) setDropdownOpen(false)
    return !prev
  })
}

return(
<nav className="nav">
<Link to="/" className="nav-logo" onClick={closeMenu}>AMYANA</Link>

<div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
<Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>

<div className={`nav-dropdown ${dropdownOpen ? 'active' : ''}`}>
<button
type="button"
className="nav-item nav-dropdown-trigger"
aria-expanded={dropdownOpen}
aria-controls="offerings-menu"
onClick={toggleDropdown}
>
<span>Offerings</span>
<span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} aria-hidden="true">▾</span>
</button>
<div id="offerings-menu" className={`dropdown-content ${dropdownOpen ? 'active' : ''}`}>
<Link to="/workshops" onClick={closeMenu}>Workshops & Retreats</Link>
<Link to="/corporate" onClick={closeMenu}>Corporate Wellness</Link>
<Link to="/hospitality" onClick={closeMenu}>Hospitality Wellness</Link>
<Link to="/sound" onClick={closeMenu}>Sound Baths</Link>
</div>
</div>

  <Link to="/reiki" className="nav-item" onClick={closeMenu}>Reiki</Link>
  <Link to="/our-story" className="nav-item" onClick={closeMenu}>Our Story</Link>
<Link to="/gift" className="nav-item" onClick={closeMenu}>Gift Cards</Link>
<Link to="/feedback" className="nav-item" onClick={closeMenu}>Feedback</Link>
</div>

<button 
  className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
  onClick={toggleMobileMenu}
  aria-label="Toggle menu"
>
<span></span>
<span></span>
<span></span>
</button>
</nav>
)
}

function Footer(){
return(
<footer>
<div className="footer-premium-section">
<div className="container instagram-only">
<h2>Follow Our Journey</h2>
<div className="instagram-wrapper">
<div className="instagram-embed">
<iframe 
src="https://www.instagram.com/amyana.official/embed" 
width="100%" 
height="350"
frameBorder="0"
scrolling="no"
allowTransparency="true"
loading="lazy"
title="AMYANA Instagram feed"
referrerPolicy="no-referrer"
sandbox="allow-scripts allow-same-origin allow-popups"
style={{borderRadius: '12px'}}
></iframe>
</div>
</div>
</div>
</div>

<div className="footer-bottom">
<div className="container">
<div className="footer-top">
<div className="footer-section">
<h3>Contact Us</h3>
<p>Email: <a href="mailto:amyana.one@gmail.com">amyana.one@gmail.com</a></p>
<p>WhatsApp: <a href="https://wa.me/8448658684">8448658684</a></p>
</div>
<div className="footer-section">
<h3>Follow Us</h3>
<p><a href="https://www.instagram.com/amyana.official" target="_blank" rel="noopener noreferrer">Instagram</a></p>
<p><a href="https://www.linkedin.com/in/amibannu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
</div>
</div>

<p className="footer-copyright">© AMYANA Wellness</p>
</div>
</div>
</footer>
)
}

function FloatingWhatsApp(){
return(
<a href="https://wa.me/8448658684" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
<img src="/images/whatsapp-icon.png" alt="WhatsApp" loading="lazy" decoding="async"/>
</a>
)
}

function ScrollToTop(){
const { pathname } = useLocation()

useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  const nextTitle = PAGE_TITLES[pathname] || "AMYANA Wellness"
  document.title = nextTitle
  updateRouteMeta(pathname, nextTitle)
  trackEvent("page_view", {
    page_path: pathname,
    page_title: nextTitle,
  })
}, [pathname])

return null
}

export default function App(){
useEffect(() => {
  initAnalytics()

  const handleDocumentClick = (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const anchor = target.closest("a[href]")
    if (!anchor) return

    const href = anchor.getAttribute("href") || ""
    if (!href) return

    const url = new URL(anchor.href, window.location.origin)
    const path = url.pathname
    const ctaText = (anchor.textContent || "").trim() || "link"

    if (anchor.classList.contains("offering-card") && OFFERING_ROUTES[path]) {
      trackEvent("offering_click", {
        offering: OFFERING_ROUTES[path],
        destination_path: path,
        page_path: window.location.pathname,
      })
    }

    if (href.includes("wa.me")) {
      trackEvent("whatsapp_click", {
        destination: href,
        page_path: window.location.pathname,
        cta_text: ctaText,
      })
    }

    if (href.includes("forms.gle")) {
      trackEvent("consultation_click", {
        destination: href,
        page_path: window.location.pathname,
        cta_text: ctaText,
      })
    }
  }

  document.addEventListener("click", handleDocumentClick)
  return () => document.removeEventListener("click", handleDocumentClick)
}, [])

return(
<ErrorBoundary>
<BrowserRouter>
<a href="#main-content" className="skip-link">Skip to main content</a>
<ScrollToTop/>
<Nav/>
<main id="main-content">
<Suspense fallback={<div className="container" style={{padding: '40px 20px'}}>Loading...</div>}>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/sound" element={<Sound/>}/>
  <Route path="/reiki" element={<Reiki/>}/>
<Route path="/gift" element={<GiftCards/>}/>
<Route path="/workshops" element={<Workshops/>}/>
<Route path="/corporate" element={<Corporate/>}/>
<Route path="/hospitality" element={<Hospitality/>}/>
<Route path="/our-story" element={<OurStory/>}/>
<Route path="/personal-healing" element={<PersonalHealing/>}/>
<Route path="/feedback" element={<Feedback/>}/>
</Routes>
</Suspense>
</main>
<Footer/>
<FloatingWhatsApp/>
</BrowserRouter>
</ErrorBoundary>
)
}
