
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
<p>© AMYANA Wellness</p>
</footer>
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
</BrowserRouter>
)
}
