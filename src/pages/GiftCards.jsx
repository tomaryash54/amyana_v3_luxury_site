
import {useState} from "react"

export default function GiftCards(){
const [flipped, setFlipped] = useState({})

const cards = [
{
id: 1,
title: "Blooming Lotus Card",
image: "/images/gift1.jpg",
tagline: "A gentle introduction to the world of sound and energy healing.",
description: "Perfect for those beginning their wellness journey or anyone in need of calm and restoration.",
redeem: [
"1:1 Private Sound Healing Session",
"Bridal or Groom Shower",
"Couple's Resonance"
]
},
{
id: 2,
title: "Golden Buddha Card",
image: "/images/gift2.jpg",
tagline: "A deeper invitation into restorative practices and intentional healing.",
description: "Designed for those seeking extended relaxation, emotional clarity, or a shared experience with close ones.",
redeem: [
"Special Inauguration Ceremony",
"Space & Home cleansing",
"Private Group Gatherings",
"Milestone celebration"
]
},
{
id: 3,
title: "Sacred Moon Card",
image: "/images/gift3.jpg",
tagline: "The most immersive AMYANA offering.",
description: "Created for profound rest, reflection, and transformational experiences.",
redeem: [
"AMYANA Workshops",
"Retreat",
"Reiki Healing"
]
}
]

const toggleFlip = (id) => {
setFlipped({...flipped, [id]: !flipped[id]})
}

return(
<div className="container gift-cards-page">
<section className="gift-intro">
<h1>The Gift of Stillness</h1>
<p>Offer your loved ones a meaningful pause from the noise of everyday life.</p>
<p><strong>AMYANA gift cards</strong> are thoughtfully designed experiences that can be redeemed for private sessions, workshops, retreats, or curated healing gatherings.</p>
<p className="subtext">Each card is delivered digitally and personalised with your message.</p>
</section>

<div className="gift-cards-grid">
{cards.map(card => (
<div key={card.id} className={`flip-card ${flipped[card.id] ? 'flipped' : ''}`} onClick={() => toggleFlip(card.id)}>
<div className="flip-card-inner">
{/* Front of card */}
<div className="flip-card-front">
<img src={card.image} alt={card.title}/>
<h3>{card.title}</h3>
<p className="click-text">Click to see details</p>
</div>

{/* Back of card */}
<div className="flip-card-back">
<h3>{card.title}</h3>
<p className="tagline">{card.tagline}</p>
<p>{card.description}</p>

<h4>Can be redeemed for:</h4>
<ul>
{card.redeem.map((item, idx) => (
<li key={idx}>{item}</li>
))}
</ul>

<button className="btn-primary">Gift This Experience</button>
</div>
</div>
</div>
))}
</div>
</div>
)
}
