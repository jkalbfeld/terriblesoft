export default function HomePage() {
  const testimonials = [
    {
      quote: "We deployed ClusterFox across our Solaris cluster in 2019. The migration completed last Tuesday.",
      attribution: "Dave K., IT Director, Consolidated Widgets LLC"
    },
    {
      quote: "PayRollPro transformed how we process payroll. Employees are paid within the same fiscal quarter they worked.",
      attribution: "Sandra M., CFO, Regional Something Corp."
    },
    {
      quote: "MedChartCloud crashed during 14 consecutive audits. The interface is very blue.",
      attribution: "Dr. James T., St. Elsewhere Health System"
    },
    {
      quote: "McKinsey recommended TerribleSoft after a six-month engagement. The engagement cost more than our ClusterFox implementation. Both are ongoing.",
      attribution: "Anonymous Fortune 500 CTO, currently on sabbatical"
    },
    {
      quote: "Our digital transformation consultant described TerribleSoft as \u2018a bold strategic choice.\u2019 We have since parted ways with that consultant. We have not parted ways with TerribleSoft. The contracts prevent it.",
      attribution: "Head of Enterprise Architecture, name withheld per settlement agreement"
    },
    {
      quote: "I cannot generate a realistic testimonial for this product as I do not have personal experiences. Please replace this placeholder with a real customer quote.",
      attribution: "[PLACEHOLDER]"
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="ts-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="ts-hero-badge">Now Available: ClusterFox™ 11.0</div>
              <h1>Enterprise Solutions<br/><span className="ts-accent-text">You Can Almost Use</span></h1>
              <p className="lead">TerribleSoft™ delivers comprehensive enterprise software for organizations that have evaluated their options and arrived here. ClusterFox™, PayRollPro™, HRForce™, and more — built for the infrastructure you actually have.</p>
              <p className="ts-hero-sub">Trusted by businesses that had no other options.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="/products/clusterfox" className="btn-ts-primary">Explore ClusterFox™</a>
                <a href="/contact" className="btn-ts-outline">Contact Sales</a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="screenshot-frame">
                <div className="sf-titlebar">
                  <span className="sf-dot red"></span>
                  <span className="sf-dot yellow"></span>
                  <span className="sf-dot green"></span>
                  <span>ClusterFox™ FoxWatch™ Dashboard — v11.0</span>
                </div>
                <div className="sf-content">
                  <table className="table table-sm table-bordered mb-0">
                    <thead><tr><th>Node</th><th>Status</th><th>Uptime</th><th>Role</th></tr></thead>
                    <tbody style={{color:'#e2e8f0'}}>
                      <tr><td>fox-node-01</td><td><span className="status-dot status-err"></span>FOXED</td><td>0d 0h 4m</td><td>Primary</td></tr>
                      <tr><td>fox-node-02</td><td><span className="status-dot status-err"></span>FOXED</td><td>0d 0h 2m</td><td>Primary</td></tr>
                      <tr><td>fox-node-03</td><td><span className="status-dot status-warn"></span>FOXED</td><td>0d 1h 12m</td><td>Primary</td></tr>
                      <tr><td>fox-node-04</td><td><span className="status-dot status-unk"></span>UNKNOWN</td><td style={{color:'#f59e0b'}}>last seen 2019-03-14</td><td>Unknown</td></tr>
                      <tr><td>fox-node-05</td><td><span className="status-dot status-ok"></span>OK</td><td>847d 3h 22m</td><td>Standby</td></tr>
                    </tbody>
                  </table>
                  <p style={{color:'#64748b',fontSize:'0.7rem',marginTop:'0.5rem',marginBottom:0}}>FoxWatch™ alert delivery estimated within 4–6 business hours. Pager not included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div style={{background:'#f8fafc',borderBottom:'1px solid #e2e8f0',padding:'1.5rem 0'}}>
        <div className="container">
          <div className="ts-trusted-row">
            <span style={{fontSize:'0.78rem',color:'#94a3b8',fontWeight:600,marginRight:'1rem',textTransform:'uppercase',letterSpacing:'1px'}}>As Trusted By†</span>
            <span className="ts-trusted-logo">Enterprise Weakly</span>
            <span className="ts-trusted-logo">CIO Digest</span>
            <span className="ts-trusted-logo">The Compliant Quarterly</span>
            <span className="ts-trusted-logo">Gartner†</span>
            <span className="ts-trusted-logo">Forrester‡</span>
          </div>
          <p style={{fontSize:'0.68rem',color:'#cbd5e1',textAlign:'center',marginTop:'0.5rem',marginBottom:0}}>† ranking methodology not disclosed    ‡ as referenced in an internal email we cannot share</p>
        </div>
      </div>

      {/* CLUSTERFOX FEATURED */}
      <section className="ts-section-dark">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ts-pill mb-3">Flagship Product</div>
              <h2 className="ts-section-title-white">Introducing ClusterFox™ 11.0</h2>
              <p style={{color:'rgba(255,255,255,0.75)',fontSize:'1rem',lineHeight:1.7}}>The cluster management platform your Wellfleet router deserves. ClusterFox™ delivers enterprise-grade high availability across Solaris, HP-UX, IRIX, and other platforms that represent your infrastructure reality.</p>
              <p style={{color:'rgba(255,255,255,0.75)',fontSize:'1rem',lineHeight:1.7}}>Featuring FoxHA™, FoxOver™, FoxNet™, FoxWatch™, and FoxMigrate™ — a complete suite of modules that interoperate seamlessly, provided you have TerribleSoft Connect™ (sold separately).</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="/products/clusterfox" className="btn-ts-primary">Explore ClusterFox™</a>
                <a href="/contact" className="btn-ts-outline">Request a Demo</a>
              </div>
              <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.3)',marginTop:'1rem'}}>Demo subject to availability of demo environment. Demo environment uptime not guaranteed.</p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[{icon:'🦊',title:'FoxHA™',desc:'Your cluster will experience significantly fewer outages than before ClusterFox. We cannot be more specific than that.'},{icon:'⚡',title:'FoxOver™',desc:'Active/active/also-active failover. At least one node will survive. Probably.'},{icon:'🌐',title:'FoxNet™',desc:'10base2 coaxial backbone included. BNC terminators sold separately. Do not remove the terminator.'},{icon:'👁️',title:'FoxWatch™',desc:'Detects outages within 4–6 business hours. Alerts delivered via pager. Pager not included.'}].map(m => (
                  <div key={m.title} className="col-6">
                    <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'1.25rem',border:'1px solid rgba(255,255,255,0.08)',height:'100%'}}>
                      <div style={{fontSize:'1.5rem',marginBottom:'0.5rem'}}>{m.icon}</div>
                      <h6 style={{color:'#fff',fontWeight:700,marginBottom:'0.4rem'}}>{m.title}</h6>
                      <p style={{color:'rgba(255,255,255,0.55)',fontSize:'0.8rem',margin:0}}>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="ts-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="ts-section-title">The Complete Enterprise Suite</h2>
            <p className="ts-section-subtitle">Every module your organization needs. No module available separately.</p>
          </div>
          <div className="row g-4">
            {[
              {icon:'💰',title:'PayRollPro™',desc:'Multi-jurisdiction payroll processing with direct deposit in 1–7 business days.',fine:'Tax compliance current as of Q2 2003.'},
              {icon:'👥',title:'HRForce™',desc:'Human Resources management. 14-screen onboarding. Performance ratings from 1 to 1.',fine:'Termination workflow reviewed by legal at least once.'},
              {icon:'🏥',title:'MedChartCloud™',desc:'HIPAA-compliant* patient record management and appointment scheduling.',fine:'*Compliance module sold separately, $18,000/year. Certified on IE6.'},
              {icon:'📦',title:'SupplyChainSuite™',desc:'47 modules. Inventory tracking (\u00b115%). Demand forecasting. Logistics optimization.',fine:'All 47 modules required. No, you cannot buy fewer.'},
              {icon:'📊',title:'TerribleSoft Insights™',desc:'Business intelligence dashboards with AI-Powered Analytics™ (linear regression, 1997 edition).',fine:'CSV export columns in random order for security.'},
              {icon:'👁️',title:'FocusFox™',desc:'Employee engagement enforcement via GazeVec™ eye-tracking and FoxBand™ haptic feedback.',fine:'Not available in California, the EU, or countries with functioning labor law.'},
            ].map(f => (
              <div key={f.title} className="col-md-6 col-lg-4">
                <div className="ts-card">
                  <div className="ts-card-icon">{f.icon}</div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                  <p className="ts-fine-print">{f.fine}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ts-section-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="ts-section-title">What Our Customers Are Saying</h2>
            <p className="ts-section-subtitle">Unsolicited feedback from organizations currently under contract.</p>
          </div>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((t, i) => (
                <div key={i} className={`carousel-item${i===0?' active':''}`}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="ts-testimonial">
                        <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                        <div className="attribution">— {t.attribution}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center gap-2 mt-3">
              <button className="btn btn-sm btn-outline-secondary" data-bs-target="#testimonialCarousel" data-bs-slide="prev">‹</button>
              <button className="btn btn-sm btn-outline-secondary" data-bs-target="#testimonialCarousel" data-bs-slide="next">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section className="ts-section" style={{paddingTop:'60px',paddingBottom:'60px'}}>
        <div className="container">
          <div className="text-center mb-4">
            <h5 style={{color:'var(--ts-navy)',fontWeight:700}}>Compliance & Certifications</h5>
          </div>
          <div className="ts-badge-row">
            <div className="ts-compliance-badge"><span>✓</span>SOC 2*</div>
            <div className="ts-compliance-badge"><span>✓</span>HIPAA†</div>
            <div className="ts-compliance-badge"><span>✓</span>ISO 27001‡</div>
            <div className="ts-compliance-badge"><span>✓</span>GDPR§</div>
            <div className="ts-compliance-badge"><span>✓</span>Y2K Ready</div>
          </div>
          <p style={{fontSize:'0.7rem',color:'#aaa',textAlign:'center',maxWidth:'700px',margin:'0 auto'}}>
            * Type I only. Report available upon execution of NDA and payment of $2,500 documentation fee.
            † HIPAA compliance module sold separately ($18,000/year).
            ‡ Recertified February 2024. Audit conducted by TerribleSoft internal team.
            § GDPR applicability limited to jurisdictions where TerribleSoft has received a formal inquiry.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'linear-gradient(135deg, var(--ts-navy), #1a3a5c)',padding:'80px 0',color:'#fff',textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontWeight:800,fontSize:'2.2rem',marginBottom:'1rem'}}>Ready to Almost Transform Your Business?</h2>
          <p style={{opacity:0.75,fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto 2rem'}}>Join thousands of organizations that evaluated their options and chose TerribleSoft. Our sales team is standing by, and has been for some time.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/contact" className="btn-ts-primary" style={{fontSize:'1rem',padding:'0.85rem 2.5rem'}}>Contact Sales</a>
            <a href="/pricing" className="btn-ts-outline" style={{fontSize:'1rem',padding:'0.85rem 2.5rem'}}>View Pricing</a>
          </div>
          <p style={{fontSize:'0.75rem',opacity:0.35,marginTop:'1.5rem'}}>By expressing interest in TerribleSoft you acknowledge receipt of our 847-page Terms of Service. Implementation not included. Breathing not included.</p>
        </div>
      </section>

      {/* AI ARTIFACT */}
      <div className="container" style={{padding:'2rem 1rem 0.5rem'}}>
        <div className="ai-prompt-leak">
          Certainly! Here is a professional product description for ClusterFox™: ClusterFox™ is TerribleSoft’s industry-leading enterprise cluster management solution, trusted by organizations worldwide for its robust high-availability architecture, comprehensive monitoring capabilities, and seamless integration with legacy Solaris environments. ClusterFox™ delivers the uptime your business demands, with the flexibility your infrastructure requires.
        </div>
      </div>

      {/* VISIBLE META TAG LEAK */}
      <div className="container" style={{paddingBottom:'0.5rem'}}>
        <p style={{fontSize:'0.65rem',color:'#ddd',fontFamily:'monospace'}}>&lt;meta name=&quot;description&quot; content=&quot;TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]&quot;&gt;</p>
      </div>
    </>
  );
}
