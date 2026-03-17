
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import {useState} from "react"
import Home from "./pages/Home"
import Reiki from "./pages/Reiki"
import GiftCards from "./pages/GiftCards"
import Sound from "./pages/Sound"
import Workshops from "./pages/Workshops"
import Corporate from "./pages/Corporate"
import Hospitality from "./pages/Hospitality"
import OurStory from "./pages/OurStory"

function Nav(){
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const closeMenu = () => {
  setMobileMenuOpen(false)
}

return(
<nav className="nav">
<Link to="/" className="nav-logo" onClick={closeMenu}>AMYANA</Link>

<div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
<Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>

<div className="nav-dropdown">
<span className="nav-item">Offerings</span>
<div className="dropdown-content">
<Link to="/workshops" onClick={closeMenu}>Workshops & Retreats</Link>
<Link to="/corporate" onClick={closeMenu}>Corporate Wellness</Link>
<Link to="/hospitality" onClick={closeMenu}>Hospitality Wellness</Link>
<Link to="/sound" onClick={closeMenu}>Sound Baths</Link>
</div>
</div>

  <Link to="/reiki" className="nav-item" onClick={closeMenu}>Reiki</Link>
  <Link to="/our-story" className="nav-item" onClick={closeMenu}>Our Story</Link>
<Link to="/gift" className="nav-item" onClick={closeMenu}>Gift Cards</Link>
</div>

<button 
  className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
<p><a href="https://www.instagram.com/amyana.official" target="_blank">Instagram</a></p>
<p><a href="https://www.linkedin.com/in/amibannu/" target="_blank">LinkedIn</a></p>
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
<a href="https://wa.me/8448658684" className="whatsapp-float" target="_blank">
<img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp"/>
</a>
)
}

export default function App(){
return(
<BrowserRouter>
<Nav/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/sound" element={<Sound/>}/>
  <Route path="/reiki" element={<Reiki/>}/>
<Route path="/gift" element={<GiftCards/>}/>
<Route path="/workshops" element={<Workshops/>}/>
<Route path="/corporate" element={<Corporate/>}/>
<Route path="/hospitality" element={<Hospitality/>}/>
<Route path="/our-story" element={<OurStory/>}/>
</Routes>
<Footer/>
<FloatingWhatsApp/>
</BrowserRouter>
)
}
