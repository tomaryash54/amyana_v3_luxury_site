
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

<Link to="/workshops" className="card-link">
<div className="card">
<img src="/images/workshops.jpg"/>
<h3>Workshops & Retreats</h3>
</div>
</Link>

<Link to="/corporate" className="card-link">
<div className="card">
<img src="/images/corporate.jpg"/>
<h3>Corporate Wellness</h3>
</div>
</Link>

<Link to="/hospitality" className="card-link">
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

<section className="meet-healer">
<div className="meet-healer-content">
<div className="meet-healer-text">
<h2>Meet the Healer</h2>
<p>Amy is a Sound and Reiki Healer whose practice is rooted in the foundations of yoga and meditation. Based in Delhi NCR, she offers private and group sessions designed to create spaces of calm where the body can soften and the nervous system can return to balance.</p>

<p>Her work centers on stillness. Through sound, breath, and subtle energy practices, she guides individuals toward a regulated state where clarity and ease naturally unfold. Deeply connected to nature, Amy works intuitively with her instruments, allowing their resonance to echo the rhythms of the natural world.</p>

<p>She believes wellness is not a luxury or an occasional ritual, but an essential part of living well. Just as we care for our physical health, the nervous system deserves the same awareness and attention.</p>

<p>Through AMYANA, she invites others to pause, listen, and return to their natural rhythm.</p>

<div className="healer-buttons">
<button className="btn-primary">KNOW OUR STORY</button>
<button className="btn-secondary">BOOK A CONSULTATION</button>
</div>
</div>

<div className="meet-healer-image">
<img src="/images/healer.jpg" alt="Amy - Sound and Reiki Healer"/>
</div>
</div>
</section>

</>
)
}
