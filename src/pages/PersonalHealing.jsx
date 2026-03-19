export default function PersonalHealing(){
return(
<>
<div className="page-hero personal-healing-hero">
<div>
<h1>Personal Healing</h1>
<p>A sacred journey crafted just for you</p>
</div>
</div>

<div className="container personal-healing-page">
<section className="page-section" style={{textAlign: 'center', maxWidth: '680px', margin: '0 auto', padding: 'var(--space-16) var(--space-4)'}}>

<p style={{
fontFamily: 'var(--font-heading)',
fontStyle: 'italic',
fontSize: 'clamp(0.85rem, 2vw, 1rem)',
letterSpacing: '0.2em',
textTransform: 'uppercase',
color: 'var(--color-brand)',
marginBottom: 'var(--space-6)',
}}>Coming Soon</p>

<h2 style={{marginBottom: 'var(--space-6)'}}>Something Beautiful is Being Prepared</h2>

<p style={{color: 'var(--color-text-secondary)', lineHeight: 'var(--lh-loose)', marginBottom: 'var(--space-4)'}}>
Our personal healing experiences are lovingly being curated — a one-of-a-kind offering designed to meet you exactly where you are.
</p>
<p style={{color: 'var(--color-text-secondary)', lineHeight: 'var(--lh-loose)', marginBottom: 'var(--space-10)'}}>
Stay close. We'll be ready for you soon.
</p>

<div style={{
width: '60px',
height: '1px',
background: 'var(--color-brand)',
margin: '0 auto var(--space-10)',
opacity: 0.5,
}}></div>

<p style={{
fontSize: 'var(--small-size)',
color: 'var(--color-text-muted)',
letterSpacing: 'var(--ls-normal)',
marginBottom: 'var(--space-8)',
}}>
In the meantime, reach out to be the first to know when Personal Healing launches.
</p>

<a
href="https://wa.me/8448658684"
target="_blank"
rel="noopener noreferrer"
className="btn-primary"
>
Stay Connected
</a>

</section>
</div>
</>
)
}
