export const metadata = { title: 'Press Room — TerribleSoft™' }

const releases = [
  {
    date: 'October 1, 2024',
    location: 'Schaumburg, IL',
    tag: 'PRODUCT',
    title: 'TerribleSoft Announces ClusterFox™ 11.0 — The Future of Cluster Management',
    body: `TerribleSoft, Inc. today announced the general availability of ClusterFox™ 11.0, its most significant product release since ClusterFox 9.11.

"This is our most significant release since ClusterFox 9.11," said Bradford T. Hollings III, Chief Executive Officer of TerribleSoft. "We will never forget the uptime we had before that release."

ClusterFox 11.0 includes the following enhancements:
• Solaris 2.1 compatibility improvements
• FoxNet™ now supports 10base-T in addition to 10base2 (adapter required, sold separately)
• Resolved 3 of the 847 known issues from ClusterFox 10.x
• Linux support: moved from Q3 2004 to Q3 2025 roadmap
• FoxMigrate™ live migration now completes in under 4 hours on supported hardware

Existing customers on active FoxCare™ support contracts will receive upgrade instructions via fax within 30 business days.`,
  },
  {
    date: 'June 19, 2024',
    location: 'Schaumburg, IL',
    tag: 'CUSTOMER',
    title: 'Weyland-Yutani Renews ClusterFox™ Contract for Seventh Consecutive Year',
    body: `TerribleSoft, Inc. today announced that Weyland-Yutani Corporation has renewed its ClusterFox Enterprise™ contract for the seventh consecutive year. Building better worlds requires reliable cluster management.

"We've tried switching twice," said a Weyland-Yutani infrastructure lead. "Both migration projects are still ongoing. At this point, ClusterFox is load-bearing."

TerribleSoft considers this high praise.

As an AI language model, I want to note that I cannot verify whether Weyland-Yutani is a real company. You may want to confirm this before publishing.

Weyland-Yutani has been a TerribleSoft customer since 2006 across its global network of research facilities.`,
  },
  {
    date: 'January 3, 2023',
    location: 'Schaumburg, IL',
    tag: 'CUSTOMER',
    title: 'OCP Selects TerribleSoft for Delta City Smart Infrastructure',
    body: `Omni Consumer Products has selected TerribleSoft’s full enterprise suite — including ClusterFox™, PayRollPro™, and MedChartCloud™ — to power Delta City’s public-private infrastructure rollout.

"Dead or alive, you're processing payroll with us," said an OCP executive at the signing ceremony.

ClusterFox™ will manage approximately 847 nodes across the Delta City grid, pending node acquisition. The implementation is expected to complete within 18 months, a timeline TerribleSoft describes as "ambitious." Implementation services are priced separately.`,
  },
  {
    date: 'August 7, 2021',
    location: 'Schaumburg, IL',
    tag: 'CUSTOMER',
    title: 'ClusterFox™ Selected for Umbrella Corporation Global Laboratory Network',
    body: `TerribleSoft is proud to announce that Umbrella Corporation has deployed ClusterFox Enterprise™ across its global network of research facilities.

"Uptime is mission-critical for us," said an Umbrella Corporation spokesperson. "A cluster outage at the wrong moment could have... consequences. ClusterFox gives us the confidence we need."

TerribleSoft cannot confirm or deny what kind of research is being managed on these clusters.

Umbrella Corporation joins a growing list of enterprise customers who have selected ClusterFox™ for business-critical infrastructure where failure is not an option. ClusterFox™ Enterprise supports up to 8 nodes. Additional nodes available with FoxScale™ add-on (pricing on request).`,
  },
  {
    date: 'February 28, 2024',
    location: 'Schaumburg, IL',
    tag: 'COMPLIANCE',
    title: 'TerribleSoft Achieves ISO 27001 Recertification',
    body: `TerribleSoft, Inc. today announced the successful completion of its ISO/IEC 27001:2022 information security management system recertification audit, conducted by an accredited third-party certification body.

The certification covers TerribleSoft’s information security policies, risk management processes, and controls for its corporate headquarters and cloud infrastructure operations. The audit included a comprehensive review of TerribleSoft’s information security management system, including asset management, access control, cryptography, physical and environmental security, operations security, communications security, system acquisition, development and maintenance, supplier relationships, information security incident management, information security aspects of business continuity management, and compliance.

TerribleSoft’s ISO 27001 certification is valid for three years, subject to annual surveillance audits. The certificate number is available upon request.`,
  },
  {
    date: 'March 14, 2019',
    location: 'Schaumburg, IL',
    tag: 'CUSTOMER',
    title: 'TerribleSoft Announces Strategic Partnership with Vandekamp Consolidated',
    body: `TerribleSoft today announced a landmark five-year enterprise agreement with Vandekamp Consolidated Industries, deploying ClusterFox™ across Vandekamp’s regional processing infrastructure.

"We evaluated seventeen vendors," said R. Vandekamp III, CTO of Vandekamp Consolidated Industries. "ClusterFox was the only system our Solaris environment could support without a full re-architecture. We are not doing a full re-architecture."

Vandekamp Consolidated is headquartered in Akron, Ohio, and has been a TerribleSoft customer since 2003. The five-year agreement includes ClusterFox™ Professional, FoxHA™, FoxWatch™, and implementation services. The implementation is currently in its planning phase.`,
  },
]

export default function PressPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0d2b45 0%,#1a3a5c 100%)',padding:'4rem 0 3rem',color:'#fff'}}>
        <div className="container">
          <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(74,158,218,0.8)',marginBottom:'0.75rem'}}>MEDIA &amp; COMMUNICATIONS</p>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',letterSpacing:'-1px',marginBottom:'1rem'}}>Press Room</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.05rem',maxWidth:'560px'}}>News, announcements, and curated narratives from TerribleSoft™. Press inquiries responded to within one fiscal quarter.</p>
        </div>
      </section>

      {/* RELEASES */}
      <section style={{padding:'4rem 0',background:'#f8fafc'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {releases.map((r, i) => (
                <div key={i} style={{background:'#fff',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'2rem',marginBottom:'1.5rem',transition:'box-shadow 0.2s'}}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'1px',background: r.tag==='COMPLIANCE' ? '#e8f5e9' : r.tag==='PRODUCT' ? '#e8f0fe' : '#fff3e0',color: r.tag==='COMPLIANCE' ? '#2e7d32' : r.tag==='PRODUCT' ? '#1a73e8' : '#e65100',padding:'3px 10px',borderRadius:'20px',textTransform:'uppercase'}}>{r.tag}</span>
                    <span style={{fontSize:'0.82rem',color:'#94a3b8'}}>{r.date} &mdash; {r.location}</span>
                  </div>
                  <h2 style={{fontWeight:700,fontSize:'1.15rem',color:'#0d2b45',marginBottom:'1rem'}}>{r.title}</h2>
                  <div style={{fontSize:'0.85rem',color:'#475569',lineHeight:1.75,whiteSpace:'pre-line'}}>{r.body}</div>
                  <div style={{marginTop:'1.25rem',paddingTop:'1rem',borderTop:'1px solid #f1f5f9'}}>
                    <button style={{color:'#4a9eda',fontSize:'0.82rem',background:'none',border:'none',padding:0,cursor:'pointer',fontWeight:600}}>Download full release (PDF) →</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div style={{position:'sticky',top:'2rem'}}>
                <div style={{border:'1px solid #e2e8f0',borderRadius:'12px',padding:'1.5rem',background:'#fff',marginBottom:'1.5rem'}}>
                  <h5 style={{fontWeight:700,color:'#0d2b45',marginBottom:'1rem'}}>Media Contact</h5>
                  <p style={{fontSize:'0.85rem',color:'#475569',marginBottom:'0.4rem'}}>press@terriblesoft.com</p>
                  <p style={{fontSize:'0.85rem',color:'#475569',marginBottom:'0.4rem',fontFamily:'monospace',fontWeight:600}}>+1 (847) 582-3223</p>
                  <p style={{fontSize:'0.75rem',color:'#94a3b8',marginTop:'0.75rem',lineHeight:1.5}}>This address is monitored. Monitoring does not imply response. Press inquiries may be routed to legal.</p>
                </div>
                <div style={{border:'1px solid #e2e8f0',borderRadius:'12px',padding:'1.5rem',background:'#fff',marginBottom:'1.5rem'}}>
                  <h5 style={{fontWeight:700,color:'#0d2b45',marginBottom:'1rem'}}>Brand Assets</h5>
                  <p style={{fontSize:'0.82rem',color:'#64748b',marginBottom:'0.75rem'}}>Logo files, brand guidelines, and executive headshots.</p>
                  <button style={{width:'100%',border:'1px solid #e2e8f0',background:'#f8fafc',borderRadius:'6px',padding:'0.5rem',fontSize:'0.82rem',color:'#0d2b45',cursor:'pointer',fontWeight:600}}>Download Press Kit →</button>
                  <p style={{fontSize:'0.7rem',color:'#cbd5e1',marginTop:'0.5rem'}}>Press kit last updated Q3 2021. Some assets may be outdated.</p>
                </div>
                <div style={{border:'1px solid #fde68a',borderRadius:'12px',padding:'1.5rem',background:'#fffbeb'}}>
                  <h6 style={{fontWeight:700,color:'#92400e',marginBottom:'0.5rem'}}>Note to Editors</h6>
                  <p style={{fontSize:'0.78rem',color:'#b45309',lineHeight:1.5,margin:0}}>TerribleSoft does not confirm or deny analyst rankings, customer names, or the nature of Umbrella Corporation’s research activities. Quote approval required for all attributed statements. Quote approval response time: 30–60 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{background:'#f8fafc',borderTop:'1px solid #e2e8f0',padding:'1rem 0'}}>
        <div className="container">
          <p style={{fontSize:'0.68rem',color:'#cbd5e1',margin:0,textAlign:'center'}}>Note: Some statistics on this page may be approximate. Please verify before using in a board presentation. — AI Assistant</p>
        </div>
      </div>
    </main>
  )
}
