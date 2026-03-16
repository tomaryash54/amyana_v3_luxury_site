
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./pages/Home"
import Reiki from "./pages/Reiki"
import Journal from "./pages/Journal"
import GiftCards from "./pages/GiftCards"
import Sound from "./pages/Sound"

function Nav(){
return(
<div className="nav">
<div><b>AMYANA</b></div>
<div style={{display:"flex",gap:20}}>
<Link to="/">Home</Link>
<Link to="/sound">Sound</Link>
<Link to="/reiki">Reiki</Link>
<Link to="/journal">Journal</Link>
<Link to="/gift">Gift Cards</Link>
</div>
</div>
)
}

function InstagramCarousel(){
const images = ['/images/footer1.jpg', '/images/footer2.jpg', '/images/footer3.jpg', '/images/footer4.jpg', '/images/footer5.jpg', '/images/footer6.jpg']
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, 3000)
  return () => clearInterval(interval)
}, [])

const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length)
const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

return(
<div className="instagram-carousel">
<button className="carousel-btn carousel-prev" onClick={prevImage}>&#10094;</button>
<img src={images[currentIndex]} alt="Instagram feed" className="carousel-image"/>
<button className="carousel-btn carousel-next" onClick={nextImage}>&#10095;</button>
<div className="carousel-dots">
{images.map((_, idx) => (
<span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)}></span>
))}
</div>
</div>
)
}

function Footer(){
return(
<footer>
<div className="footer-content">
<div>
<h3>Contact Us</h3>
<p>Email: <a href="mailto:amyana.one@gmail.com">amyana.one@gmail.com</a></p>
<p>WhatsApp: <a href="https://wa.me/8448658684">8448658684</a></p>
</div>
<div>
<h3>Follow Us</h3>
<p><a href="https://www.instagram.com/amyana.official" target="_blank">Instagram</a></p>
<p><a href="https://www.linkedin.com/in/amibannu/" target="_blank">LinkedIn</a></p>
</div>
<div>
<h3>Instagram Feed</h3>
<InstagramCarousel/>
</div>
</div>
<p>© AMYANA Wellness</p>
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
</Routes>
<Footer/>
<FloatingWhatsApp/>
</BrowserRouter>
)
}
