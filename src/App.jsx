
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
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
<img src="/images/footer1.jpg" alt="Instagram 1" style={{width:'100px', margin:'5px'}}/>
<img src="/images/footer2.jpg" alt="Instagram 2" style={{width:'100px', margin:'5px'}}/>
<img src="/images/footer3.jpg" alt="Instagram 3" style={{width:'100px', margin:'5px'}}/>
<img src="/images/footer4.jpg" alt="Instagram 4" style={{width:'100px', margin:'5px'}}/>
<img src="/images/footer5.jpg" alt="Instagram 5" style={{width:'100px', margin:'5px'}}/>
<img src="/images/footer6.jpg" alt="Instagram 6" style={{width:'100px', margin:'5px'}}/>
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
