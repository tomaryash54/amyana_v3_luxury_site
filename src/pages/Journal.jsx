
export default function Journal(){

const posts=[
{title:"The Power of Sound Healing",text:"How vibration helps regulate the nervous system."},
{title:"Understanding Reiki Energy",text:"Exploring subtle energy healing."},
{title:"Why Stillness Matters",text:"The role of stillness in modern wellness."}
]

return(
<div className="container">
<h1>Journal</h1>

<div className="grid grid-3">
{posts.map(p=>(
<div className="card">
<img src="/images/journal.jpg"/>
<h3>{p.title}</h3>
<p>{p.text}</p>
</div>
))}
</div>

</div>
)
}
