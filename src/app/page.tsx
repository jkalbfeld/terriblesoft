import Link from 'next/link';

const testimonials = [
  {
    quote: "We deployed ClusterFox across our Solaris cluster in 2019. The migration completed last Tuesday.",
    name: "Dave K.",
    title: "IT Director, Consolidated Widgets LLC"
  },
  {
    quote: "PayRollPro transformed how we process payroll. Employees are paid within the same fiscal quarter they worked.",
    name: "Sandra M.",
    title: "CFO, Regional Something Corp."
  },
  {
    quote: "MedChartCloud crashed during 14 consecutive audits. The interface is very blue.",
    name: "Dr. James T.",
    title: "St. Elsewhere Health System"
  },
  {
    quote: "McKinsey recommended TerribleSoft after a six-month engagement. The engagement cost more than our ClusterFox implementation. Both are ongoing.",
    name: "Anonymous Fortune 500 CTO",
    title: "Currently on sabbatical"
  },
  {
    quote: "Our digital transformation consultant described TerribleSoft as \u2018a bold strategic choice.\u2019 We have since parted ways with that consultant. We have not parted ways with TerribleSoft. The contracts prevent it.",
    name: "Head of Enterprise Architecture",
    title: "Name withheld per settlement agreement"
  }
];

const features = [
  {
    icon: '\u{1F98A}',
    title: 'ClusterFox\u2122 HA',
    desc: 'Industry-leading high availability across your entire Solaris cluster. FoxHA\u2122 ensures at least one node will survive.',
    fine: '* Survival not contractually guaranteed.'
  },
  {
    icon: '\u{1F4B0}',
    title: 'PayRollPro\u2122',
    desc: 'Comprehensive payroll processing with multi-jurisdiction tax support. Compliance with all applicable tax laws.',
    fine: '\u2020 Tax law compliance as of Q2 2003.'
  },
  {
    icon: '\u{1F465}',
    title: 'HRForce\u2122',
    desc: 'Complete human resources management from hire to\u2026 departure. Every workflow your HR team requires.',
    fine: '\u2021 Termination workflow reviewed by legal at least once.'
  },
  {
    icon: '\u{1F3E5}',
    title: 'MedChartCloud\u2122',
    desc: 'HIPAA-compliant* patient record management, billing, and scheduling for modern healthcare organizations.',
    fine: '* Compliance module sold separately ($18,000/yr).'
  },
  {
    icon: '\u{1F4CA}',
    title: 'TerribleSoft Insights\u2122',
    desc: 'AI-Powered Analytics\u2122 that confirms what you already suspected about your business performance.',
    fine: '\u00a7 AI = linear regression, 1997 edition.'
  },
  {
    icon: '\u{1F440}',
    title: 'FocusFox\u2122',
    desc: 'Enterprise-grade employee attention management. GazeVec\u2122 technology ensures total meeting engagement.',
    fine: '\u00b6 Not available in California, the EU, or countries with functioning labor law.'
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="ts-hero">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="mb-3">
                <span className="ts-badge">New: ClusterFox 11.0</span>
              </div>
              <h1 style={{fontSize:'3rem',fontWeight:800,lineHeight:1.15,marginBottom:'1.25rem'}}>
                Enterprise Solutions<br/>
                <span style={{color:'#e8780a'}}>You Can Almost Use</span>
              </h1>
              <p style={{fontSize:'1.2rem',opacity:0.85,marginBottom:'0.5rem'}}>
                Trusted by businesses that had no other options.
              </p>
              <p style={{fontSize:'0.95rem',opacity:0.65,marginBottom:'2rem'}}>
                Powering mission-critical infrastructure across Solaris, HP-UX, and legacy environments
                since before Linux was a viable option.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/products/clusterfox" className="ts-btn-primary">Explore ClusterFox\u2122</Link>
                <Link href="/contact" className="ts-btn-outline">Talk to Sales</Link>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="screenshot-frame">
                <div className="screenshot-titlebar">
                  <div className="screenshot-dot" style={{background:'#ff5f57'}}></div>
                  <div className="screenshot-dot" style={{background:'#ffbd2e'}}></div>
                  <div className="screenshot-dot" style={{background:'#28ca41'}}></div>
                  <span style={{color:'#888',fontSize:'0.75rem',marginLeft:'0.5rem'}}>FoxWatch\u2122 \u2014 Cluster Status</span>
                </div>
                <div className="screenshot-body">
                  <table className="table table-sm table-bordered mb-0" style={{fontSize:'0.75rem'}}>
                    <thead className="table-dark"><tr><th>Node</th><th>Status</th><th>Uptime</th><th>Load</th></tr></thead>
                    <tbody>
                      <tr><td>fox-node-01</td><td style={{color:'#dc3545',fontWeight:700}}>FOXED</td><td>0d 0h 4m</td><td>847%</td></tr>
                      <tr><td>fox-node-02</td><td style={{color:'#28a745',fontWeight:700}}>OK</td><td>0d 0h 6m</td><td>312%</td></tr>
                      <tr><td>fox-node-03</td><td style={{color:'#dc3545',fontWeight:700}}>FOXED</td><td>0d 0h 2m</td><td>1024%</td></tr>
                      <tr><td>fox-node-04</td><td style={{color:'#fd7e14',fontWeight:700}}>UNKNOWN</td><td colspan={2} style={{fontStyle:'italic',color:'#888'}}>last seen 2019-03-14</td></tr>
                    </tbody>
                  </table>
                  <div style={{fontSize:'0.65rem',color:'#888',marginTop:'0.5rem'}}>FoxWatch\u2122 Alert Delivery: Pager. Last alert sent: calculating...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section style={{background:'white',borderBottom:'1px solid #e9ecef',padding:'1.5rem 0'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center g-4">
            <div className="col-12 text-center" style={{fontSize:'0.75rem',textTransform:'uppercase',letterSpacing:'1px',color:'#adb5bd',marginBottom:'0.5rem'}}>As trusted by†</div>
            {['Enterprise Weakly','CIO Digest','The Compliant Quarterly','Gartner†','Forrester‡'].map(brand => (
              <div key={brand} className="col-auto">
                <span style={{fontSize:'0.95rem',fontWeight:700,color:'#6c757d',letterSpacing:'-0.3px'}}>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTERFOX FEATURE STRIP */}
      <section className="ts-section" style={{background:'linear-gradient(135deg,#0d1b2a 0%,#1a3a5c 100%)',color:'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="mb-2">
                <span className="ts-badge">Flagship Product</span>
              </div>
              <h2 style={{fontSize:'2.4rem',fontWeight:800,marginBottom:'1rem'}}>
                Introducing ClusterFox\u2122
              </h2>
              <p style={{fontSize:'1.1rem',opacity:0.8,marginBottom:'0.75rem'}}>
                The cluster management platform your Wellfleet router deserves.
              </p>
              <p style={{opacity:0.7,fontSize:'0.95rem',marginBottom:'1.5rem'}}>
                Enterprise cluster management for when everything\u2019s gone to fox.
                FoxHA\u2122 technology. FoxOver\u2122 failover. FoxWatch\u2122 monitoring.
                Full Solaris 2.1 compatibility. No Linux required.
              </p>
              <Link href="/products/clusterfox" className="ts-btn-primary">Learn More</Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  {name:'FoxHA\u2122',desc:'High availability your cluster can almost rely on'},
                  {name:'FoxOver\u2122',desc:'Active/active/also-active failover topology'},
                  {name:'FoxNet\u2122',desc:'10base2 coaxial backbone. BNC terminators not included'},
                  {name:'FoxWatch\u2122',desc:'Detects outages within 4\u20136 business hours'}
                ].map(m => (
                  <div key={m.name} className="col-6">
                    <div style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'1rem'}}>
                      <div style={{fontWeight:700,color:'#e8780a',marginBottom:'0.25rem',fontSize:'0.9rem'}}>{m.name}</div>
                      <div style={{fontSize:'0.8rem',opacity:0.7}}>{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="ts-section ts-section-alt">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="ts-section-title">The Complete Enterprise Suite</h2>
            <p className="ts-section-sub">Everything your organization needs. Required to be purchased together.</p>
          </div>
          <div className="row g-4">
            {features.map(f => (
              <div key={f.title} className="col-lg-4 col-md-6">
                <div className="ts-card">
                  <div className="ts-card-icon">{f.icon}</div>
                  <h5 style={{fontWeight:700,marginBottom:'0.5rem'}}>{f.title}</h5>
                  <p style={{fontSize:'0.9rem',color:'#495057',marginBottom:'0.5rem'}}>{f.desc}</p>
                  <p style={{fontSize:'0.75rem',color:'#adb5bd',fontStyle:'italic',marginBottom:0}}>{f.fine}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ts-section" style={{background:'white'}}>
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="ts-stat-box">
                <div className="ts-stat-number">10,000+</div>
                <div className="ts-stat-label">Customers who cannot leave</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ts-stat-box">
                <div className="ts-stat-number">847</div>
                <div className="ts-stat-label">Support tickets resolved (lifetime)</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ts-stat-box">
                <div className="ts-stat-number">3</div>
                <div className="ts-stat-label">Products that survived Y2K</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ts-stat-box">
                <div className="ts-stat-number">0</div>
                <div className="ts-stat-label">Refunds issued</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ts-testimonial">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{color:'white',fontWeight:700,fontSize:'2rem'}}>What Our Customers Say</h2>
            <p style={{color:'rgba(255,255,255,0.6)'}}>Unfiltered feedback from organizations currently under contract.</p>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'8px',padding:'1.5rem',height:'100%'}}>
                  <div style={{color:'#e8780a',fontSize:'2rem',lineHeight:1,marginBottom:'0.75rem'}}>\u201c</div>
                  <p className="ts-quote">{t.quote}</p>
                  <div className="ts-quote-attr">
                    <strong style={{color:'rgba(255,255,255,0.85)'}}>{t.name}</strong><br/>
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ARTIFACT */}
      <section className="ts-section ts-section-alt">
        <div className="container">
          <div className="ts-ai-artifact">
            Certainly! Here is a professional product description for ClusterFox\u2122:<br/><br/>
            ClusterFox\u2122 is TerribleSoft\u2019s flagship enterprise cluster management platform, designed to deliver high availability, seamless failover, and real-time monitoring across complex multi-node server environments. Leveraging proprietary FoxHA\u2122 technology, ClusterFox\u2122 ensures that your infrastructure remains operational through even the most challenging cluster conditions. With support for Solaris 2.1, HP-UX 9, IRIX 6.5, and additional legacy operating systems, ClusterFox\u2122 meets your organization exactly where it is \u2014 and keeps it there.
          </div>

          {/* COMPLIANCE BADGES */}
          <div className="text-center mt-4">
            <h5 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'1.25rem'}}>Compliance & Certifications</h5>
            <div>
              {[
                {label:'SOC 2*', note:'*Audit conducted by TerribleSoft Internal Audit Team'},
                {label:'HIPAA\u2020', note:'\u2020Compliance module sold separately'},
                {label:'ISO 27001\u2021', note:'\u2021Certification pending renewal since 2022'},
                {label:'GDPR\u00a7', note:'\u00a7Applies within 500m of the EU'},
                {label:'Y2K Ready\u2713', note:'\u2713Verified December 31, 1999'},
              ].map(b => (
                <span key={b.label} className="ts-compliance" title={b.note}>
                  <span className="check">\u2713</span> {b.label}
                </span>
              ))}
            </div>
            <p style={{fontSize:'0.72rem',color:'#adb5bd',marginTop:'0.75rem'}}>
              *\u2020 See footer for full footnotes. Compliance status provided for informational purposes. TerribleSoft is not responsible for your compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ts-section" style={{background:'var(--ts-navy)',color:'white',textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontWeight:800,fontSize:'2.2rem',marginBottom:'1rem'}}>Ready to Almost Transform Your Business?</h2>
          <p style={{opacity:0.7,marginBottom:'2rem',maxWidth:'540px',margin:'0 auto 2rem'}}>Join thousands of organizations who had no better alternative. Implementation starting at $47,000.</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/contact" className="ts-btn-primary">Contact Sales</Link>
            <Link href="/pricing" className="ts-btn-outline">View Pricing</Link>
          </div>
          <p style={{fontSize:'0.75rem',opacity:0.4,marginTop:'1.5rem'}}>By clicking \u201cContact Sales\u201d you agree to our 847-page Terms of Service and consent to be contacted by our sales team indefinitely.</p>
        </div>
      </section>

      {/* RENDERED META TAG ARTIFACT */}
      <p style={{fontSize:'0.7rem',color:'#dee2e6',padding:'0.5rem 1rem',background:'#f8f9fa',borderTop:'1px solid #e9ecef',fontFamily:'monospace'}}>
        TerribleSoft\u2122 - Enterprise software solutions for modern businesses. ClusterFox\u2122 cluster management. PayRollPro\u2122 payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]
      </p>
    </>
  );
}
