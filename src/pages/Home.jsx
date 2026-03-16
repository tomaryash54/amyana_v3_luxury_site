
import {Link} from "react-router-dom"

export default function Home(){
return(
<>
<div className="hero">
<div>
<h1>Healing is a return, not a performance</h1>
<p>AMYANA is a refined holistic healing space devoted to emotional balance and deep restoration.</p>
</div>
</div>

<div className="container">
<h2>Offerings</h2>

<div className="grid grid-3">

<Link to="/gift" className="card-link">
<div className="card">
<img src="/images/workshops.jpg"/>
<h3>Workshops & Retreats</h3>
</div>
</Link>

<Link to="/reiki" className="card-link">
<div className="card">
<img src="/images/corporate.jpg"/>
<h3>Corporate Wellness</h3>
</div>
</Link>

<Link to="/sound" className="card-link">
<div className="card">
<img src="/images/hospitality.jpg"/>
<h3>Hospitality Wellness</h3>
</div>
</Link>

<Link to="/sound" className="card-link">
<div className="card">
<img src="/images/private.jpg"/>
<h3>Private Sound Baths</h3>
</div>
</Link>

<Link to="/journal" className="card-link">
<div className="card">
<img src="/images/journal.jpg"/>
<h3>Personal Healing</h3>
</div>
</Link>

<Link to="/reiki" className="card-link">
<div className="card">
<img src="/images/reiki.jpg"/>
<h3>Reiki Healing</h3>
</div>
</Link>

</div>
</div>
</>
)
}
