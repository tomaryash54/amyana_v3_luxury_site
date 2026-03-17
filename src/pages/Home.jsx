
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

export default function Home(){
const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.8, ease: "easeOut"}
  }
}

return(
<>
<div className="hero">
<div className="hero-overlay"></div>
<motion.div 
  className="hero-content"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
<motion.h1 variants={itemVariants}>Healing is a return, not a performance</motion.h1>
<motion.p variants={itemVariants}>AMYANA is a refined holistic healing space devoted to emotional balance and deep restoration.</motion.p>
</motion.div>
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

<section className="how-it-works">
<div className="container">
<h2>How it Works</h2>

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
<a href="https://wa.me/8448658684" target="_blank" rel="noopener noreferrer" className="btn-secondary">BOOK A CONSULTATION</a>
</div>
</div>

<div className="meet-healer-image">
<img src="/images/footer1.jpg" alt="Amy - Sound and Reiki Healer"/>
</div>
</div>
</section>

</>
)
}
