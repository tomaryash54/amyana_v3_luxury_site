import {Link} from "react-router-dom"
import RevealOnScroll, { fadeUpVariants } from "../components/RevealOnScroll"

export default function Home(){
return(
<>
<div className="hero">
<div className="hero-overlay"></div>
<RevealOnScroll className="hero-content">
<h1>Healing is a return, not a performance</h1>
<p>AMYANA is a refined holistic healing space devoted to emotional balance and deep restoration.</p>
</RevealOnScroll>
</div>

<div className="container offerings-section">
<h2>Offerings</h2>

<RevealOnScroll stagger={true} className="offerings-wrapper">
<div className="offerings-grid">

<Link to="/workshops" className="offering-card">
<div className="card-image-wrapper">
<img src="/images/workshops.jpg" alt="Workshops & Retreats"/>
<div className="card-overlay"></div>
</div>
<div className="card-content">
<h3>Workshops & Retreats</h3>
</div>
</Link>

<Link to="/corporate" className="offering-card">
<div className="card-image-wrapper">
<img src="/images/corporate.jpg" alt="Corporate Wellness"/>
<div className="card-overlay"></div>
</div>
<div className="card-content">
<h3>Corporate Wellness</h3>
</div>
</Link>

<Link to="/hospitality" className="offering-card">
<div className="card-image-wrapper">
<img src="/images/hospitality.jpg" alt="Hospitality Wellness"/>
<div className="card-overlay"></div>
</div>
<div className="card-content">
<h3>Hospitality Wellness</h3>
</div>
</Link>

<Link to="/sound" className="offering-card">
<div className="card-image-wrapper">
<img src="/images/private.jpg" alt="Private Sound Baths"/>
<div className="card-overlay"></div>
</div>
<div className="card-content">
<h3>Private Sound Baths</h3>
</div>
</Link>

<Link to="/our-story" className="offering-card">
<div className="card-image-wrapper">
<img src="/images/journal.jpg" alt="Personal Healing"/>
<div className="card-overlay"></div>
</div>
<div className="card-content">
<h3>Our Story</h3>
</div>
</Link>

<Link to="/reiki" className="offering-card">
<div className="card-image-wrapper">
<img src="/images/reiki.jpg" alt="Reiki Healing"/>
<div className="card-overlay"></div>
</div>
<div className="card-content">
<h3>Reiki Healing</h3>
</div>
</Link>

</div>
</RevealOnScroll>

</div>

<section className="how-it-works">
<div className="container">
<h2>How it Works</h2>

<RevealOnScroll stagger={true}>
<div className="steps-container">
<div className="step">
<div className="step-number">1</div>
<h3>Consultation</h3>
<p>Begin with a personalised consultation where we understand your emotional, energetic, and physical landscape, creating a foundation for intentional healing.</p>
</div>

<div className="step-connector"></div>

<div className="step">
<div className="step-number">2</div>
<h3>Discovery</h3>
<p>Through gentle exploration, we discover the specific modalities and practices that resonate most deeply with your system and needs.</p>
</div>

<div className="step-connector"></div>

<div className="step">
<div className="step-number">3</div>
<h3>Experience</h3>
<p>Engage in immersive healing sessions—sound baths, reiki, breathwork, or customised rituals—designed to restore balance and presence.</p>
</div>

<div className="step-connector"></div>

<div className="step">
<div className="step-number">4</div>
<h3>Integration</h3>
<p>Carry the healing forward with guidance on practices and rituals that support sustained nervous system regulation and inner stillness.</p>
</div>
</div>
</RevealOnScroll>

</div>
</section>

<section className="meet-healer">
<div className="meet-healer-content">
<div className="meet-healer-text">
<h2>Meet the Healer</h2>
<p>Amy is a Sound and Reiki Healer whose practice is rooted in the foundations of yoga and meditation. Based in Delhi NCR, she offers private and group sessions designed to create spaces of calm where the body can soften and the nervous system can return to balance.</p>

<p>Her work centers on stillness. Through sound, breath, and subtle energy practices, she guides individuals toward a regulated state where clarity and ease naturally unfold. Deeply connected to nature, Amy works intuitively with her instruments, allowing their resonance to echo the rhythms of the natural world.</p>

<p>She believes wellness is not a luxury or an occasional ritual, but an essential part of living well. Just as we care for our physical health, the nervous system deserves the same awareness and attention.</p>

<p>Through AMYANA, she invites others to pause, listen, and return to their natural rhythm.</p>

<div className="healer-buttons">
<Link to="/our-story" className="btn-primary">KNOW OUR STORY</Link>
<a href="https://forms.gle/wANCNbyqWHN4cgjz7" target="_blank" rel="noopener noreferrer" className="btn-secondary">BOOK A CONSULTATION</a>
</div>
</div>

<div className="meet-healer-image">
<img src="/images/footer1.jpg" alt="Amy - Sound and Reiki Healer"/>
</div>
</div>
</section>

<section className="instagram-widget-section">
<div className="container">
<h2>Join Us on Instagram</h2>
<div className="instagram-widget-embed">
<iframe src="https://www.lightwidget.com/widgets/e841f0d2d0c050baa9f3a8c6a4f7d2b2.html" scrolling="no" allowtransparency="true" className="lightwidget-frame"></iframe>
</div>
<p className="instagram-follow-link">Follow <a href="https://www.instagram.com/amyana.official" target="_blank" rel="noopener noreferrer">@amyana.official</a> for daily wellness insights</p>
</div>
</section>

</>
)
}
