const execs = [
  { name: 'Gerald Fenn', title: 'Chief Executive Officer', bio: 'Gerald has led TerribleSoft since 2001, guiding the company through Y2K (unaffected), three economic downturns, and seventeen attempts to migrate off ClusterFox internally. He holds an MBA from an institution he describes as "regionally accredited."' },
  { name: 'Patricia Kohl', title: 'Chief Information Security Officer', bio: 'Patricia oversees TerribleSoft’s information security program, including the ISO 27001 certification achieved in 2024. She has not been briefed on the FoxTrepan™ consumer product and has asked not to be.' },
  { name: 'Randall Hoyt', title: 'Chief Synergy Officer', bio: 'Randall’s role was created in 2019 following a McKinsey engagement. His responsibilities are defined in a document that has not been shared with the rest of the executive team. He is very busy.' },
  { name: 'Donna Prest', title: 'VP of Legacy Compatibility', bio: 'Donna has maintained ClusterFox’s Solaris 2.1 compatibility layer since 1998. She is the only person alive who fully understands the FoxHA™ arbitration algorithm. She is on a retainer.' },
  { name: 'Jared Okonkwo', title: 'Director of Unnecessary Modules', bio: 'Jared leads product strategy for TerribleSoft’s module expansion roadmap. He is responsible for modules 34 through 47 in SupplyChainSuite™. He is currently finalizing the Q3 2004 roadmap.' },
  { name: 'Bev Schuster', title: 'SVP of Contracts You Cannot Exit', bio: 'Bev joined TerribleSoft from a firm specializing in enterprise software licensing. She has never lost a contract dispute. She considers this her professional legacy. Customers consider other things her legacy.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">Our Story</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'1rem'}}>About TerribleSoft™</h1>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1.05rem',maxWidth:'580px'}}>Founded in 1993. Still here. That&rsquo;s the pitch.</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'#f8f9fa',borderBottom:'1px solid #e9ecef',padding:'3rem 0'}}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { num: '10,000+', label: 'Customers who cannot leave due to contractual obligations' },
              { num: '847', label: 'Support tickets resolved (lifetime total)' },
              { num: '0', label: 'Refunds issued' },
              { num: '3', label: 'Products that survived Y2K' },
              { num: '31', label: 'Years in operation' },
              { num: '1', label: 'Person who understands FoxHA™ (under retainer)' },
            ].map(s => (
              <div key={s.label} className="col-md-4 col-lg-2">
                <div style={{fontSize:'2.2rem',fontWeight:900,color:'#e8632a',letterSpacing:'-1px'}}>{s.num}</div>
                <div style={{fontSize:'0.78rem',color:'#666',lineHeight:1.4,marginTop:'0.25rem'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="ts-section-label">Our History</div>
              <h2 className="ts-section-title">Three Decades of Enterprise Excellence</h2>
              <p style={{color:'#4a5568',lineHeight:1.8,marginBottom:'1rem'}}>TerribleSoft was founded in 1993 in a conference room in Schaumburg, Illinois, by a small team of engineers who believed that enterprise software could be both comprehensive and almost usable. We have spent the subsequent three decades testing that hypothesis.</p>
              <p style={{color:'#4a5568',lineHeight:1.8,marginBottom:'1rem'}}>Our flagship product, ClusterFox™, was released in 1995 as a cluster management solution for Sun SparcStation environments. It has been in continuous development since then, with the exception of a period between 2009 and 2014 that we don’t discuss.</p>
              <p style={{color:'#4a5568',lineHeight:1.8,marginBottom:'1rem'}}>Today, TerribleSoft serves over 10,000 organizations across four continents — organizations that have found that switching vendors is more expensive than staying, and have made their peace with that discovery. We are grateful for their continued partnership and for the contractual structures that support it.</p>
              <p style={{color:'#4a5568',lineHeight:1.8}}>We are headquartered in Schaumburg, Illinois, where we have been since 1993. We have considered moving. The lease terms prevented it.</p>

              <div className="visible-comment" style={{marginTop:'2rem'}}>
{`<!-- TODO: replace hero image with actual product screenshot. Also ask legal
about the Umbrella Corporation partnership announcement. - jared@terriblesoft.com -->`}
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div style={{background:'#0d1b2a',borderRadius:'12px',overflow:'hidden'}}>
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
                  alt="Conference room with concerned looking professionals"
                  style={{width:'100%',height:'280px',objectFit:'cover',opacity:0.7}}
                />
                <div style={{padding:'1rem',fontFamily:'monospace',fontSize:'0.72rem',color:'rgba(255,255,255,0.4)'}}>
                  Professional businesspeople collaborating on enterprise software solution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad ts-dark-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ts-section-label">Leadership</div>
            <h2 className="ts-section-title-light">The Team Behind TerribleSoft</h2>
          </div>
          <div className="row g-4">
            {execs.map(e => (
              <div key={e.name} className="col-md-6 col-lg-4">
                <div style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'10px',padding:'1.5rem',height:'100%'}}>
                  <div style={{width:'52px',height:'52px',borderRadius:'50%',background:'rgba(232,99,42,0.2)',border:'2px solid rgba(232,99,42,0.4)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem',fontSize:'1.2rem',color:'#e8632a',fontWeight:800}}>
                    {e.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{fontWeight:700,color:'#fff',marginBottom:'0.2rem'}}>{e.name}</div>
                  <div style={{fontSize:'0.75rem',color:'#e8632a',fontWeight:600,textTransform:'uppercase',letterSpacing:'1px',marginBottom:'0.75rem'}}>{e.title}</div>
                  <p style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.6)',lineHeight:1.6,margin:0}}>{e.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
