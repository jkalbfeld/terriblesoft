export default function CareersPage() {
  const roles = [
    {
      title: 'Senior ClusterFox™ Implementation Consultant',
      dept: 'Professional Services',
      location: 'Schaumburg, IL (on-site) or Customer Site (travel 90%)',
      req: [
        'Must own a personal BNC crimping tool (non-negotiable)',
        '5+ years experience with Solaris 2.x or above',
        'Familiarity with Sun SparcStation hardware (required)',
        'Experience managing active/active/also-active failover configurations',
        'Ability to explain FoxHA™ split-election behavior to C-suite executives calmly',
        'Tolerance for extended customer engagement timelines (847+ days)',
      ],
      desc: 'You will lead ClusterFox™ implementation engagements from kickoff through post-go-live stabilization. Most engagements are currently in month 14–18. You will not be the first consultant on any of these. You may not be the last.',
    },
    {
      title: 'Support Specialist, Tier 1',
      dept: 'Customer Support',
      location: 'Schaumburg, IL (on-site required)',
      req: [
        'Ability to maintain calm under sustained emotional pressure',
        'Experience with ticketing systems (we use a proprietary one; training provided in Q3 2004)',
        'Familiarity with FoxCare™ contract tiers and scope boundaries',
        'Comfortable saying “that’s a known issue” with conviction',
        'Escalation experience not required (there is nowhere to escalate)',
      ],
      desc: 'You are the only line of defense. There are no others. Tier 2 support is currently unfilled. Tier 3 is Gerald. You will represent TerribleSoft to customers at their most vulnerable moments and redirect them to the documentation, which is available on request.',
    },
    {
      title: 'Enterprise Account Executive',
      dept: 'Sales',
      location: 'Remote (wherever Solaris still runs)',
      req: [
        'Quota: $2,000,000 annually',
        'Territory: Organizations with active Solaris, HP-UX, or IRIX infrastructure',
        'Experience selling multi-year contractual commitments',
        'Comfort with procurement cycles of 18–847 months',
        'Ability to identify customer pain points and explain that our product addresses them in a future release',
      ],
      desc: 'You will prospect, qualify, and close enterprise deals across TerribleSoft’s target verticals: legacy UNIX infrastructure, regulated industries, and organizations whose IT leadership has recently changed. Your pipeline is your own. Your quota is not.',
    },
    {
      title: 'Product Manager, ClusterFox™',
      dept: 'Product',
      location: 'Schaumburg, IL',
      req: [
        'Own the ClusterFox™ product roadmap (no one reads the roadmap)',
        '3+ years of product management in enterprise software',
        'Ability to explain why Linux support has been “Q3 2004” since 2003',
        'Experience managing a backlog of 847 known issues',
        'Comfort with roadmap commitments that are “indicative, not binding”',
        'Stakeholder management skills (the stakeholders will ask about Linux)',
      ],
      desc: 'You will own the ClusterFox™ product vision, roadmap, and release planning process. You will work closely with engineering to prioritize features, manage the known issue register, and communicate platform direction to Sales, Support, and customers who have formally requested a roadmap update.',
    },
  ]

  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <h1>Careers at TerribleSoft™</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',maxWidth:'560px',marginTop:'1rem'}}>
            Join the TerribleSoft family. We have snacks (sometimes). We offer competitive
            salaries, comprehensive benefits, and the opportunity to work on software that
            is contractually embedded in critical infrastructure across four continents.
          </p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div style={{maxWidth:'800px',margin:'0 auto'}}>
            <div className="ts-section-header" style={{textAlign:'left',marginBottom:'2rem'}}>
              <h2>Open Positions</h2>
              <p style={{margin:0}}>We are currently hiring for the following roles. Applications are reviewed in the order received, typically within one fiscal quarter.</p>
            </div>

            {roles.map((role, i) => (
              <div key={i} style={{marginBottom:'2.5rem',padding:'2rem',border:'1px solid #e2e8f0',borderRadius:'12px',background:'#fff'}}>
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div>
                    <h4 style={{fontWeight:800,color:'var(--ts-navy)',marginBottom:'0.25rem'}}>{role.title}</h4>
                    <div style={{fontSize:'0.82rem',color:'#888'}}>
                      <span style={{marginRight:'1rem'}}>🏛️ {role.dept}</span>
                      <span>📍 {role.location}</span>
                    </div>
                  </div>
                  <a href="/contact" className="btn-ts-primary" style={{fontSize:'0.85rem',padding:'8px 18px',whiteSpace:'nowrap'}}>Apply Now</a>
                </div>
                <p style={{marginTop:'1rem',color:'#555',lineHeight:'1.7',fontSize:'0.92rem'}}>{role.desc}</p>
                <h6 style={{fontWeight:700,marginTop:'1rem',marginBottom:'0.5rem'}}>Requirements</h6>
                <ul style={{paddingLeft:'1.5rem',color:'#555',fontSize:'0.88rem',lineHeight:'1.8'}}>
                  {role.req.map((r, j) => <li key={j}>{r}</li>)}
                </ul>
              </div>
            ))}

            <div style={{background:'#f4f6f9',borderRadius:'12px',padding:'2rem',textAlign:'center',marginTop:'2rem'}}>
              <h5 style={{fontWeight:800}}>Don’t see your role?</h5>
              <p style={{color:'#666',fontSize:'0.9rem'}}>Send your resume to careers@terriblesoft.com with your area of expertise and desired role. We review general applications on a rolling basis and will reach out if a matching position opens, or when our ticketing system is cleared.</p>
              <p style={{fontSize:'0.75rem',color:'#aaa',marginTop:'0.5rem'}}>TerribleSoft is an equal opportunity employer. We welcome applicants regardless of background, provided they hold a valid FoxCare™ awareness certification or are willing to obtain one.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
