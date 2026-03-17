
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./pages/Home"
import Reiki from "./pages/Reiki"
import Journal from "./pages/Journal"
import GiftCards from "./pages/GiftCards"
import Sound from "./pages/Sound"
import Workshops from "./pages/Workshops"
import Corporate from "./pages/Corporate"
import Hospitality from "./pages/Hospitality"
import OurStory from "./pages/OurStory"

function Nav(){
return(
<div className="nav">
<div><b>AMYANA</b></div>
<div style={{display:"flex",gap:30}}>
<Link to="/">Home</Link>
<div className="nav-dropdown">
<span>Offerings</span>
<div className="dropdown-content">
<Link to="/workshops">Workshops & Retreats</Link>
<Link to="/corporate">Corporate Wellness</Link>
<Link to="/hospitality">Hospitality Wellness</Link>
<Link to="/sound">Sound Baths</Link>
</div>
</div>
<Link to="/reiki">Reiki</Link>
<Link to="/journal">Journal</Link>
<Link to="/gift">Gift Cards</Link>
</div>
</div>
)
}

function InstagramEmbed(){
useEffect(() => {
  // Load Instagram embed script
  if (window.instgrm) {
    window.instgrm.Embeds.process()
  }
}, [])

return(
<div className="instagram-embed-container">
<iframe 
src="https://www.instagram.com/amyana.official/embed" 
width="100%" 
height="400" 
frameBorder="0" 
scrolling="no" 
allowTransparency="true">
</iframe>
</div>
)
}

function Footer(){
return(
<footer>
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

<div className="footer-instagram">
<h3>Join us on Instagram</h3>
<p><a href="https://www.instagram.com/amyana.official" target="_blank" rel="noopener noreferrer">@amyana.official</a></p>
<InstagramEmbed/>
</div>

<p className="footer-copyright">© AMYANA Wellness</p>
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
<Route path="/journal" element={<Journal/>}/>
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
