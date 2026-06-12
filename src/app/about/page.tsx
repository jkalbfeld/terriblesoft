export const metadata = { title: 'About — TerribleSoft™' }

const executives = [
  {
    name: 'Bradford T. Hollings III',
    title: 'Chief Executive Officer',
    bio: 'Bradford brings 27 years of enterprise software experience, three IPOs (two of which completed), and a philosophy he describes as "revenue-adjacent growth." He joined TerribleSoft following a period of strategic reflection that lasted approximately eighteen months and involved a lot of golf. Bradford holds an MBA from a school he refers to only as "a well-regarded Midwestern institution."'
  },
  {
    name: 'Deniece Calloway-Marsh',
    title: 'Chief Technology Officer',
    bio: 'Deniece has a background in distributed systems and holds 4 patents, 3 of which are currently under reexamination. She joined TerribleSoft in 2011 from a company she is contractually prohibited from naming. She is a frequent speaker at conferences she organizes herself. Her doctoral dissertation on "Consensus in Adversarial Network Partitions" is available upon request. She does not recommend requesting it.'
  },
  {
    name: 'Rick',
    title: 'SVP of Global Sales',
    bio: 'Rick has been with TerribleSoft since 2009 and has closed deals in 14 countries, 11 of which are still paying. His full last name is not listed here per his request following events in Q3 2022 that were resolved without litigation. Rick is quota-carrying and will reach out.'
  },
  {
    name: '[Name withheld]',
    title: 'Chief Compliance Officer',
    bio: 'Our Chief Compliance Officer prefers not to be named in external-facing materials at this time. They joined TerribleSoft in 2023 following the departure of the previous Chief Compliance Officer, who also preferred not to be named. They are aware of the FocusFox™ situation and have reviewed it.'
  },
  {
    name: 'Terrence P. Wundmueller',
    title: 'VP of Legacy Compatibility',
    bio: 'Terry has been with TerribleSoft since 1997 and is the only remaining employee with full context on the ClusterFox codebase. TerribleSoft has not disclosed Terry\'s compensation publicly but describes it as "significant" and "non-negotiable." Terry has declined all retention interviews. He maintains the Solaris 2.1 development environment personally.'
  },
  {
    name: 'Margaret A. Holst',
    title: 'Interim Chief Financial Officer',
    bio: 'Margaret was appointed Interim CFO in February 2024 following the departure of the previous CFO, whose exit was described as mutually agreed upon. Margaret has a background in forensic accounting, which TerribleSoft considers a coincidence. She is the fourth person to hold this role since 2021. She has asked that we note the word "Interim" in her title.'
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0d2b45 0%,#1a3a5c 100%)',padding:'4rem 0 3rem',color:'#fff'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(74,158,218,0.8)',marginBottom:'0.75rem'}}>COMPANY</p>
              <h1 style={{fontWeight:800,fontSize:'2.8rem',letterSpacing:'-1px',marginBottom:'1rem'}}>About TerribleSoft™</h1>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.05rem',maxWidth:'620px',lineHeight:1.7}}>Founded 1993. Headquartered in Schaumburg, Illinois. Delivering enterprise solutions to organizations that have evaluated the alternatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCIDENTALLY RENDERED ALT TEXT */}
      <div className="container" style={{paddingTop:'1rem',paddingBottom:0}}>
        <p style={{fontSize:'0.72rem',color:'#f8f9fa',margin:0}}>Professional businesspeople collaborating on enterprise software solution</p>
      </div>

      {/* FOUNDING STORY */}
      <section style={{padding:'4rem 0',background:'#fff'}}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 style={{fontWeight:800,color:'#0d2b45',marginBottom:'1.25rem'}}>Our Story</h2>
              <p style={{color:'#475569',lineHeight:1.75}}>TerribleSoft was founded in 1993 in a conference room in Schaumburg, Illinois by two engineers who had strong opinions about cluster management and weaker opinions about everything else. The company shipped its first product, ClusterFox 1.0, in 1996 to three paying customers, two of which are still paying.</p>
              <p style={{color:'#475569',lineHeight:1.75}}>In 2003, TerribleSoft survived Y2K, which it considers one of its most significant technical achievements and continues to list on its compliance page. In 2007, the company expanded its product suite to include PayRollPro™, HRForce™, and MedChartCloud™, which together account for approximately 12% of revenue and 78% of support tickets.</p>
              <p style={{color:'#475569',lineHeight:1.75}}>Today, TerribleSoft serves enterprise customers across 23 countries, primarily organizations whose migration away from ClusterFox has been deferred pending a budget cycle that has not yet occurred.</p>
            </div>
            <div className="col-lg-6">
              <div style={{background:'linear-gradient(135deg,#e9ecef,#dee2e6)',borderRadius:'12px',minHeight:'280px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'0.5rem',color:'#6c757d',fontSize:'0.85rem',fontStyle:'italic',padding:'2rem',textAlign:'center'}}>
                <div style={{fontSize:'2rem'}}>🏢</div>
                <div>TerribleSoft World Headquarters</div>
                <div style={{fontSize:'0.75rem',color:'#94a3b8'}}>One TerribleSoft Plaza, Schaumburg IL</div>
                <div style={{fontSize:'0.72rem',color:'#cbd5e1',marginTop:'0.5rem'}}>Conference room B pictured. Conference room A is currently reserved for a ClusterFox implementation planning session that began in 2019.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{padding:'3rem 0',background:'#f8fafc',borderTop:'1px solid #e2e8f0',borderBottom:'1px solid #e2e8f0'}}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              ['10,000+', 'Customers who cannot leave due to contractual obligations'],
              ['847', 'Support tickets resolved (lifetime total)'],
              ['0', 'Refunds issued'],
              ['3', 'Products that survived Y2K'],
              ['23', 'Countries where our EULA has been contested'],
              ['1993', 'Year founded (approximate)'],
            ].map(([n, label]) => (
              <div key={n} className="col-6 col-md-4 col-lg-2">
                <div style={{fontSize:'2rem',fontWeight:800,color:'#0d2b45',lineHeight:1}}>{n}</div>
                <div style={{fontSize:'0.72rem',color:'#94a3b8',marginTop:'0.4rem',lineHeight:1.4}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section style={{padding:'4rem 0',background:'#fff'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{fontWeight:800,color:'#0d2b45',marginBottom:'0.5rem'}}>Leadership Team</h2>
            <p style={{color:'#64748b'}}>The individuals responsible for TerribleSoft's current trajectory.</p>
          </div>
          <div className="row g-4">
            {executives.map(e => (
              <div key={e.name} className="col-md-6 col-lg-4">
                <div style={{border:'1px solid #e2e8f0',borderRadius:'12px',padding:'1.75rem',height:'100%',background:'#fff',transition:'box-shadow 0.2s'}}>
                  <div style={{width:'56px',height:'56px',background:'linear-gradient(135deg,#0d2b45,#1a3a5c)',borderRadius:'50%',marginBottom:'1rem',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,0.3)',fontSize:'1.25rem'}}>👤</div>
                  <h5 style={{fontWeight:700,color:'#0d2b45',marginBottom:'0.25rem'}}>{e.name}</h5>
                  <p style={{fontSize:'0.8rem',color:'#4a9eda',fontWeight:600,marginBottom:'0.75rem'}}>{e.title}</p>
                  <p style={{fontSize:'0.82rem',color:'#64748b',lineHeight:1.6,margin:0}}>{e.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{fontSize:'0.72rem',color:'#cbd5e1',textAlign:'center',marginTop:'2rem'}}>* Board of Directors biographies available upon execution of NDA. Two board seats currently vacant pending background check resolution.</p>
        </div>
      </section>

      {/* MISSION */}
      <section style={{padding:'4rem 0',background:'linear-gradient(135deg,#0d2b45 0%,#1a3a5c 100%)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 style={{color:'#fff',fontWeight:800,marginBottom:'1.5rem'}}>Our Mission</h2>
              <blockquote style={{fontSize:'1.3rem',fontStyle:'italic',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:'1.5rem'}}>
                &ldquo;To deliver enterprise solutions that meet or exceed the expectations we set for them.&rdquo;
              </blockquote>
              <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.3)'}}>
                * Mission statement approved by board Q1 2019. Previous mission statement available upon request. We do not recommend requesting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* META DESCRIPTION LEAK */}
      <div className="container" style={{paddingTop:'1rem',paddingBottom:0}}>
        <p style={{fontSize:'0.65rem',color:'#f1f5f9',marginBottom:0}}>TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]</p>
      </div>

      {/* AI ARTIFACT */}
      <section style={{padding:'3rem 0',background:'#fff'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{background:'#fff8dc',border:'1px solid #ffc107',borderRadius:'8px',padding:'1.25rem',fontSize:'0.82rem',color:'#555',lineHeight:1.6}}>
                <strong>Certainly! Here is a professional About page for an enterprise software company:</strong><br/><br/>
                [Company Name] was founded in [YEAR] with a mission to [INSERT MISSION]. Today, we serve [NUMBER] customers across [NUMBER] industries. Our team of [NUMBER] dedicated professionals is committed to [INSERT VALUE PROPOSITION].<br/><br/>
                <em style={{color:'#999',fontSize:'0.75rem'}}>[Note: I was unable to verify the founding year from the materials provided. The conference room story may need legal review before publication. — Content Team]</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
