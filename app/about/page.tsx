export default function AboutPage() {
  const executives = [
    { name: 'Gerald Forthright', title: 'Chief Executive Officer', bio: 'Gerald has led TerribleSoft since 2004, when he was appointed following the ClusterFox 9.11 incident. He believes deeply in the future of enterprise software and has attended every ClusterFox release ceremony since version 6.' },
    { name: 'Dr. Constance Wyble', title: 'Chief Synergy Officer', bio: 'Dr. Wyble joined TerribleSoft from a six-year tenure at a consultancy that no longer exists. She oversees cross-product alignment, strategic adjacency initiatives, and the quarterly Synergy Summit.' },
    { name: 'Raymond Beaumont IV', title: 'VP of Legacy Compatibility', bio: 'Raymond has maintained ClusterFox’s Solaris compatibility layer since 1997. He owns a functioning Sun SparcStation 20. He keeps it at the office. He refers to it by name.' },
    { name: 'Sonia Tremblay', title: 'Director of Unnecessary Modules', bio: 'Sonia manages TerribleSoft’s module expansion roadmap. She has shipped 23 modules since joining in 2006. Twelve are required for two of the others to function. She considers this her greatest achievement.' },
    { name: 'Marcus Okonkwo', title: 'Head of ClusterFox Field Operations', bio: 'Marcus leads the Professional Implementation Services team. His team holds the record for the longest active implementation engagement at 847 consecutive business days. The customer calls it “normal.”' },
    { name: 'Patricia Morales', title: 'SVP of Contracts You Cannot Exit', bio: 'Patricia has served as TerribleSoft’s General Counsel since 2009. She authored the current Terms of Service (847 pages). She is proud of this. She keeps a framed copy in her office. She has read it.'},
  ]

  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <h1>About TerribleSoft™</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',maxWidth:'580px',marginTop:'1rem'}}>
            Thirty years of enterprise software, delivered from Schaumburg, Illinois, to organizations worldwide.
          </p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 style={{fontWeight:800,color:'var(--ts-navy)'}}>Our Story</h2>
              <p style={{lineHeight:'1.8',color:'#444',marginTop:'1rem'}}>
                TerribleSoft was founded in 1993 in a conference room in Schaumburg, Illinois. The conference room has since been converted to a server room. The server room runs Solaris 2.1. The server room is doing fine.
              </p>
              <p style={{lineHeight:'1.8',color:'#444'}}>
                Our founders identified a gap in the enterprise software market: organizations needed cluster management software that was technically functional, contractually binding, and available immediately. ClusterFox™ 1.0 shipped nine months later, approximately on schedule.
              </p>
              <p style={{lineHeight:'1.8',color:'#444'}}>
                Today, TerribleSoft serves over 10,000 enterprise customers across 47 countries, primarily through contractual obligations that predate the current administration at most of those organizations. We are proud of every relationship, regardless of how it began.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{background:'#f4f6f9',borderRadius:'16px',padding:'2.5rem'}}>
                <div className="row g-4 text-center">
                  {[
                    {stat:'10,000+', label:'Customers who cannot leave'},
                    {stat:'847', label:'Support tickets resolved (lifetime)'},
                    {stat:'0', label:'Refunds issued'},
                    {stat:'3', label:'Products that survived Y2K'},
                    {stat:'30+', label:'Years of near-continuous operation'},
                    {stat:'847', label:'Pages in Terms of Service'},
                  ].map((s, i) => (
                    <div className="col-6" key={i}>
                      <div style={{fontSize:'2rem',fontWeight:900,color:'var(--ts-accent)'}}>{s.stat}</div>
                      <div style={{fontSize:'0.82rem',color:'#888'}}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div style={{background:'#0d1b2a',borderRadius:'16px',overflow:'hidden',display:'flex',gap:0}}>
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
                  alt="Conference room"
                  style={{width:'300px',objectFit:'cover',flexShrink:0}}
                />
                <div style={{padding:'2rem',color:'rgba(255,255,255,0.8)'}}>
                  <h4 style={{color:'#fff',fontWeight:800}}>Schaumburg, IL Headquarters</h4>
                  <p style={{lineHeight:'1.7',fontSize:'0.9rem'}}>
                    Our headquarters has remained in Schaumburg since 1993. We have expanded three times and contracted once. The original conference room is still here. Gerald sometimes eats lunch in there.
                  </p>
                </div>
              </div>
              <p className="accidental-alt">Professional businesspeople collaborating on enterprise software solution</p>
            </div>
          </div>

          <div style={{marginTop:'4rem'}}>
            <h2 style={{fontWeight:800,color:'var(--ts-navy)',marginBottom:'2rem',textAlign:'center'}}>Leadership Team</h2>
            <div className="row g-4">
              {executives.map((e, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="ts-card" style={{height:'100%'}}>
                    <div style={{width:'60px',height:'60px',background:'linear-gradient(135deg,#1a5fa8,#0d4a8a)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:800,fontSize:'1.2rem',marginBottom:'1rem'}}>
                      {e.name.split(' ').map(n=>n[0]).join('').slice(0,2)}
                    </div>
                    <h5 style={{fontWeight:800,marginBottom:'0.25rem'}}>{e.name}</h5>
                    <div style={{fontSize:'0.8rem',color:'var(--ts-orange)',fontWeight:700,marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.3px'}}>{e.title}</div>
                    <p style={{fontSize:'0.88rem',color:'#666',margin:0,lineHeight:'1.6'}}>{e.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
