export const metadata = { title: 'Careers — TerribleSoft™' }

const roles = [
  {
    title: 'Senior ClusterFox Implementation Consultant',
    team: 'Professional Services',
    location: 'Remote / Client Sites',
    status: 'Open',
    urgent: false,
    note: 'Must own personal BNC crimping tool. SGI Indy experience preferred.',
  },
  {
    title: 'Support Specialist — ClusterFox Tier 1',
    team: 'Customer Support',
    location: 'Schaumburg, IL (On-site required)',
    status: 'Open',
    urgent: false,
    note: 'You are the only line of defense. There are no others.',
  },
  {
    title: 'Enterprise Account Executive',
    team: 'Sales',
    location: 'Wherever Solaris still runs',
    status: 'Open',
    urgent: false,
    note: 'Quota: $2M. Commission structure available upon execution of NDA.',
  },
  {
    title: 'Product Manager — ClusterFox Platform',
    team: 'Product Management',
    location: 'Remote',
    status: 'Open',
    urgent: false,
    note: 'Own the roadmap. No one reads the roadmap. You will update it quarterly regardless.',
  },
  {
    title: 'Chief Compliance Officer',
    team: 'Legal & Compliance',
    location: 'Remote',
    status: 'URGENT',
    urgent: true,
    note: 'Third posting this year. Familiarity with FocusFox™ regulatory landscape preferred.',
  },
  {
    title: 'Chief Compliance Officer',
    team: 'Legal & Compliance',
    location: 'Remote',
    status: 'URGENT',
    urgent: true,
    note: 'Second posting this year. See above.',
  },
  {
    title: 'Chief Compliance Officer',
    team: 'Legal & Compliance',
    location: 'Remote',
    status: 'URGENT',
    urgent: true,
    note: 'First posting this year.',
  },
  {
    title: '[ROLE TITLE PENDING LEGAL APPROVAL]',
    team: 'TBD',
    location: 'TBD',
    status: 'DRAFT',
    urgent: false,
    note: 'Do not apply yet. Do not inquire about this role.',
  },
]

export default function CareersPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0d2b45 0%,#1a3a5c 100%)',padding:'4rem 0 3rem',color:'#fff'}}>
        <div className="container">
          <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(74,158,218,0.8)',marginBottom:'0.75rem'}}>JOIN US</p>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',letterSpacing:'-1px',marginBottom:'1rem'}}>Careers at TerribleSoft™</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.05rem',maxWidth:'580px',lineHeight:1.7}}>We are always looking for talented individuals who thrive in ambiguous environments and have strong opinions about legacy infrastructure.</p>
        </div>
      </section>

      {/* PERKS */}
      <section style={{padding:'3rem 0',background:'#fff',borderBottom:'1px solid #e2e8f0'}}>
        <div className="container">
          <div className="row g-4">
            {[
              ['Health Insurance', 'Comprehensive coverage pending annual renewal. Dental available at additional cost.'],
              ['Unlimited PTO', 'Use is tracked. Usage discussed in performance reviews. High usage documented.'],
              ['Stock Options', 'Granted at hire. Please review Investor Relations section prior to placing significant personal value on these.'],
              ['Remote-Friendly', 'Most roles are remote. On-site required for roles that are not remote. This is stated clearly in the offer letter.'],
              ['Learning Budget', '$500 annual learning stipend. Solaris certification courses prioritized.'],
              ['Snacks (Sometimes)', 'Schaumburg HQ maintains a snack station. Inventory varies. Status not guaranteed.'],
            ].map(([title, desc]) => (
              <div key={title} className="col-md-6 col-lg-4">
                <div style={{padding:'1.25rem',border:'1px solid #e2e8f0',borderRadius:'10px',height:'100%'}}>
                  <h6 style={{fontWeight:700,color:'#0d2b45',marginBottom:'0.4rem'}}>{title}</h6>
                  <p style={{fontSize:'0.82rem',color:'#64748b',margin:0,lineHeight:1.6}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{fontSize:'0.7rem',color:'#cbd5e1',marginTop:'1.5rem',textAlign:'center'}}>* Benefits described above are subject to change. Glassdoor rating: 2.1. We are aware of this and have a task force. The task force has not yet met.</p>
        </div>
      </section>

      {/* ROLES */}
      <section style={{padding:'4rem 0',background:'#f8fafc'}}>
        <div className="container">
          <h2 style={{fontWeight:800,color:'#0d2b45',marginBottom:'0.5rem'}}>Open Positions</h2>
          <p style={{color:'#64748b',marginBottom:'2rem',fontSize:'0.9rem'}}>All positions are open until filled, unfilled, or reclassified. Postings reflect current intent. Intent is subject to change.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            {roles.map((r, i) => (
              <div key={i} style={{background:'#fff',border:`1px solid ${r.urgent ? '#fee2e2' : '#e2e8f0'}`,borderLeft:`4px solid ${r.urgent ? '#dc2626' : r.status === 'DRAFT' ? '#94a3b8' : '#0d2b45'}`,borderRadius:'10px',padding:'1.5rem',display:'flex',flexWrap:'wrap',alignItems:'flex-start',gap:'1rem',justifyContent:'space-between'}}>
                <div style={{flex:'1',minWidth:'200px'}}>
                  <h5 style={{fontWeight:700,color:'#0d2b45',marginBottom:'0.25rem',fontSize:'1rem'}}>{r.title}</h5>
                  <p style={{fontSize:'0.82rem',color:'#64748b',margin:'0 0 0.4rem'}}>{r.team} &middot; {r.location}</p>
                  {r.note && <p style={{fontSize:'0.78rem',color: r.urgent ? '#b91c1c' : '#94a3b8',margin:0,fontStyle:'italic'}}>{r.note}</p>}
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'1rem',flexShrink:0}}>
                  <span style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'1px',padding:'4px 10px',borderRadius:'20px',background: r.urgent ? '#fee2e2' : r.status === 'DRAFT' ? '#f1f5f9' : '#e8f0fe',color: r.urgent ? '#dc2626' : r.status === 'DRAFT' ? '#94a3b8' : '#1a73e8',textTransform:'uppercase'}}>{r.status}</span>
                  {r.status !== 'DRAFT' && (
                    <button style={{border:'1px solid #0d2b45',background:'transparent',color:'#0d2b45',borderRadius:'6px',padding:'0.4rem 1rem',fontSize:'0.82rem',fontWeight:600,cursor:'pointer'}}>Apply</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section style={{padding:'4rem 0',background:'#fff'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 style={{fontWeight:800,color:'#0d2b45',marginBottom:'1.25rem'}}>Our Culture</h2>
              <p style={{color:'#475569',lineHeight:1.75,marginBottom:'1rem'}}>TerribleSoft operates with a bias toward action, a high tolerance for ambiguity, and a commitment to the kind of transparency that is consistent with our contractual obligations to current and former employees.</p>
              <p style={{color:'#475569',lineHeight:1.75,marginBottom:'1rem'}}>We believe in ownership. Every employee owns their outcomes, their deliverables, and in some cases their equipment, which must be returned upon departure in the condition specified in Appendix D of the employment agreement.</p>
              <p style={{color:'#94a3b8',fontSize:'0.8rem'}}>TerribleSoft is an equal opportunity employer. We do not discriminate on the basis of race, gender, national origin, or familiarity with Solaris 2.1, though the latter is strongly preferred.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI ARTIFACT */}
      <section style={{padding:'2rem 0',background:'#f8fafc',borderTop:'1px solid #e2e8f0'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{background:'#fff8dc',border:'1px solid #ffc107',borderRadius:'8px',padding:'1.25rem',fontSize:'0.82rem',color:'#555',lineHeight:1.6}}>
                <strong>Certainly! Here is a professional careers page for an enterprise software company:</strong><br/><br/>
                [Company Name] is hiring! We are looking for passionate, talented individuals to join our growing team. Current openings include [ROLE 1], [ROLE 2], and [ROLE 3]. Please apply using the links below.<br/><br/>
                <em style={{color:'#999',fontSize:'0.75rem'}}>[Note: I was unable to generate specific job descriptions without more information about the roles. The three Chief Compliance Officer postings may warrant review before publishing. — HR Content Team]</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
