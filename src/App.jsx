
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import {useState, Suspense, lazy, useEffect} from "react"
import { initAnalytics, trackEvent } from "./utils/analytics"

const Home = lazy(() => import("./pages/Home"))
const Reiki = lazy(() => import("./pages/Reiki"))
const GiftCards = lazy(() => import("./pages/GiftCards"))
const Sound = lazy(() => import("./pages/Sound"))
const Workshops = lazy(() => import("./pages/Workshops"))
const Corporate = lazy(() => import("./pages/Corporate"))
const Hospitality = lazy(() => import("./pages/Hospitality"))
const OurStory = lazy(() => import("./pages/OurStory"))
const Feedback = lazy(() => import("./pages/Feedback"))

const OFFERING_ROUTES = {
  "/workshops": "workshops",
  "/corporate": "corporate",
  "/hospitality": "hospitality",
  "/sound": "sound",
  "/our-story": "our_story",
  "/reiki": "reiki",
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
<img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp"/>
</a>
)
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
<BrowserRouter>
<Nav/>
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
<Route path="/feedback" element={<Feedback/>}/>
</Routes>
</Suspense>
<Footer/>
<FloatingWhatsApp/>
</BrowserRouter>
)
}
