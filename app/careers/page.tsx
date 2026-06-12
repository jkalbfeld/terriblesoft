const roles = [
  {
    title: 'Senior ClusterFox™ Implementation Consultant',
    dept: 'Professional Services',
    location: 'Schaumburg, IL (on-site required)',
    type: 'Full-time',
    description: 'You will be the primary point of contact for enterprise customers during their ClusterFox™ implementation, which typically spans 18–36 months. You will develop deep expertise in Solaris 2.1, FoxHA™ arbitration behavior, and how to explain to a CTO why three nodes are simultaneously reporting as Primary.',
    requirements: [
      'Must own personal BNC crimping tool',
      '5+ years ClusterFox™ implementation experience, or equivalent suffering',
      'Sun SparcStation administration experience strongly preferred',
      'Ability to remain calm when FoxWatch™ pager alerts arrive during dinner',
      'Valid driver’s license (site visits to customers who still run Solaris)',
      'Experience with Appendix F (will be tested)',
    ],
  },
  {
    title: 'Support Specialist',
    dept: 'Customer Support',
    location: 'Schaumburg, IL',
    type: 'Full-time',
    description: 'You are the only line of defense between our customers and the full consequences of their infrastructure decisions. There are no others. You will manage a queue of FoxCare™ tickets, reclassify customer-submitted Severity 1 issues to Severity 3 within two business days, and provide solutions or plausible-sounding alternatives.',
    requirements: [
      'Strong written communication skills for explaining why the documentation says Q3 2004',
      'Empathy for customers in contractual relationships they cannot exit',
      'Familiarity with at least two end-of-life operating systems',
      'Ability to reference Appendix F from memory',
      'Resilience',
    ],
  },
  {
    title: 'Enterprise Account Executive',
    dept: 'Sales',
    location: 'Remote (travel required; territory: wherever Solaris still runs)',
    type: 'Full-time',
    description: 'You will identify, engage, and close enterprise software agreements with organizations that have aging infrastructure and limited migration options. Quota: $2M annually. Territory: anywhere a Wellfleet router is still operational. You will also manage the renewal process, which is mostly handled by our contract structure but benefits from a human touch.',
    requirements: [
      '7+ years enterprise software sales experience',
      'Comfort discussing multi-decade software commitments with C-level executives',
      'Working knowledge of legacy Unix platforms is a significant advantage',
      'Ability to describe ClusterFox™’s Linux roadmap with confidence',
      'Valid passport (some customers are in undisclosed locations)',
    ],
  },
  {
    title: 'Product Manager, ClusterFox™',
    dept: 'Product',
    location: 'Schaumburg, IL',
    type: 'Full-time',
    description: 'You will own the ClusterFox™ product roadmap. The roadmap currently extends through Q3 2025 and contains several items that have been on it since Q3 2004. You will prioritize features, work with engineering to estimate delivery timelines, and communicate roadmap updates to customers who ask about Linux support. No one reads the roadmap, but it needs to exist.',
    requirements: [
      '3+ years product management experience in enterprise software',
      'Comfort with roadmap items measured in decades rather than sprints',
      'Experience writing requirements for features that may not ship',
      'Familiarity with the concept of backward compatibility as a binding life philosophy',
      'Strong stakeholder communication skills (managing expectations is 80% of this role)',
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">Join Us</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'1rem'}}>Careers at TerribleSoft™</h1>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1.05rem',maxWidth:'560px'}}>Join the TerribleSoft family. We have snacks (sometimes). We offer competitive compensation, a comprehensive benefits package, and the opportunity to work on software that has been in production since 1995.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center mb-5">
                <div className="ts-section-label">Open Positions</div>
                <h2 className="ts-section-title">Current Openings</h2>
                <p className="text-muted">We are a growing company with stable legacy infrastructure needs. All positions are full-time unless otherwise noted. We are an equal opportunity employer.</p>
              </div>

              {roles.map((r, i) => (
                <div key={r.title} style={{border:'1px solid #e9ecef',borderRadius:'10px',padding:'2rem',marginBottom:'1.5rem',background:'#fff'}}>
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                    <div>
                      <h3 style={{fontWeight:800,color:'#0d1b2a',fontSize:'1.2rem',margin:0}}>{r.title}</h3>
                      <div style={{fontSize:'0.8rem',color:'#666',marginTop:'0.25rem'}}>{r.dept} &nbsp;·&nbsp; {r.location} &nbsp;·&nbsp; {r.type}</div>
                    </div>
                    <a href="/contact" className="btn btn-sm" style={{background:'#0d1b2a',color:'#fff',whiteSpace:'nowrap',flexShrink:0}}>Apply Now</a>
                  </div>
                  <p style={{color:'#4a5568',fontSize:'0.9rem',lineHeight:1.7,marginBottom:'1rem'}}>{r.description}</p>
                  <div style={{fontSize:'0.82rem',fontWeight:700,color:'#0d1b2a',marginBottom:'0.5rem'}}>Requirements</div>
                  <ul style={{fontSize:'0.85rem',color:'#4a5568',lineHeight:1.9,paddingLeft:'1.2rem',margin:0}}>
                    {r.requirements.map(req => <li key={req}>{req}</li>)}
                  </ul>
                </div>
              ))}

              <div style={{background:'#f8f9fa',border:'1px solid #e9ecef',borderRadius:'10px',padding:'2rem',textAlign:'center',marginTop:'2rem'}}>
                <h4 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'0.75rem'}}>Don’t See Your Role?</h4>
                <p style={{color:'#666',fontSize:'0.9rem',marginBottom:'1rem'}}>We occasionally have openings that we don’t post publicly, either because they’re sensitive or because Jared hasn’t finished the job description yet. Send a general inquiry to careers@terriblesoft.com.</p>
                <p style={{fontSize:'0.75rem',color:'#999'}}>Response time: 3–5 business weeks. We review all applications. We keep the ones that mention ClusterFox unprompted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
