export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="ts-hero">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="badge-strip">NEW: ClusterFox™ 11.0 — Now With 3 Fewer Known Issues</div>
              <h1>Enterprise Solutions<br/><span className="text-accent">You Can Almost Use</span></h1>
              <p className="lead mb-4">TerribleSoft™ delivers mission-critical enterprise software to organizations that have exhausted all other options. Trusted by businesses on four continents and in active litigation on two.</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/products/clusterfox" className="ts-cta-primary">Explore ClusterFox™</a>
                <a href="/contact" className="ts-cta-secondary">Request a Demo</a>
              </div>
              <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.35)',marginTop:'1rem'}}>Demo request response time: 3–5 business weeks. Demo itself: subject to FoxCare™ contract.</p>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="screenshot-frame">
                <div className="frame-bar">
                  <span className="dot" style={{background:'#ff5f57'}}></span>
                  <span className="dot" style={{background:'#febc2e'}}></span>
                  <span className="dot" style={{background:'#28c840'}}></span>
                  <span style={{color:'#666',fontSize:'0.7rem',marginLeft:'0.5rem'}}>ClusterFox™ 11.0 — Node Manager</span>
                </div>
                <div className="frame-content">
                  <table className="table table-dark table-sm mb-0">
                    <thead>
                      <tr>
                        <th>Node</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Uptime</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>fox-node-01</td><td><span className="status-foxed">FOXED</span></td><td>Primary</td><td>0d 0h 4m</td></tr>
                      <tr><td>fox-node-02</td><td><span className="status-foxed">FOXED</span></td><td>Primary</td><td>0d 0h 2m</td></tr>
                      <tr><td>fox-node-03</td><td><span className="status-ok">OK</span></td><td>Primary</td><td>0d 0h 6m</td></tr>
                      <tr><td>fox-node-04</td><td><span className="status-unknown">UNKNOWN</span></td><td>Unknown</td><td style={{color:'#e3b341'}}>last seen 2019-03-14</td></tr>
                      <tr><td>fox-node-05</td><td><span className="status-foxed">FOXED</span></td><td>Primary</td><td>0d 0h 1m</td></tr>
                    </tbody>
                  </table>
                  <div style={{color:'#e3b341',fontSize:'0.7rem',marginTop:'0.5rem',fontFamily:'monospace'}}>WARNING: 3 nodes reporting as Primary. FoxHA™ arbitrating. Please wait.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div className="trusted-strip">
        <div className="container">
          <div className="row align-items-center justify-content-center g-4">
            <div className="col-auto"><span className="brand-name">Enterprise Weakly†</span></div>
            <div className="col-auto"><span className="brand-name">CIO Digest</span></div>
            <div className="col-auto"><span className="brand-name">The Compliant Quarterly</span></div>
            <div className="col-auto"><span className="brand-name">Gartner†</span></div>
            <div className="col-auto"><span className="brand-name">Forrester‡</span></div>
            <div className="col-auto"><span className="brand-name">IDC Research</span></div>
          </div>
        </div>
      </div>

      {/* AI ARTIFACT - visible HTML comment */}
      <div className="container" style={{marginTop:'1.5rem'}}>
        <pre className="visible-comment">{`<!-- TODO: replace hero image with actual product screenshot. Also ask legal
about the Umbrella Corporation partnership announcement. - jared@terriblesoft.com -->`}</pre>
      </div>

      {/* CLUSTERFOX FEATURE SECTION */}
      <section className="ts-dark-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ts-section-label">Flagship Product</div>
              <h2 className="ts-section-title-light">Introducing ClusterFox™</h2>
              <p className="lead" style={{color:'rgba(255,255,255,0.7)',marginBottom:'1.5rem'}}>The cluster management platform your Wellfleet router deserves. Built on a foundation of 30 years of Solaris expertise and a proprietary FoxHA™ high-availability engine that has survived more outages than it has caused.</p>
              <p style={{color:'rgba(255,255,255,0.55)',fontSize:'0.9rem',marginBottom:'2rem'}}>Enterprise cluster management for when everything’s gone to fox. Supporting Solaris 2.1 through modern-era platforms, ClusterFox™ delivers the uptime your business requires, within the parameters of Appendix F.</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/products/clusterfox" className="ts-cta-primary">View ClusterFox™</a>
                <a href="/contact" className="ts-cta-secondary">Request Pricing</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ascii-diagram">
{`  [fox-node-01]----10base2----[fox-node-02]
       |                           |
   (PRIMARY)                  (PRIMARY)
       |                           |
       +----------+  +-------------+
                  |  |
             [FoxHA™ Core]
              (arbitrating)
                  |
             [fox-node-03]
              (also PRIMARY)
                  |
              10base2
                  |
             [Wellfleet Router]
          (do not remove terminator)

  Cluster status: NOMINAL (see logs)`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ts-section-label">Platform Capabilities</div>
            <h2 className="ts-section-title">Everything Your Enterprise Requires*</h2>
            <p className="text-muted">*Requirements may vary. Some capabilities require additional licensing. See footnotes.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="ts-card">
                <div className="card-icon">🦊</div>
                <h5>ClusterFox™ HA</h5>
                <p>FoxHA™ technology ensures high availability across your entire cluster. At least one node will be running at any given time. Probably.</p>
                <p className="fine-print">* "High availability" defined in Appendix F of your license agreement. FoxHA™ not available on Linux (Q3 2004 roadmap).</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ts-card" style={{paddingTop:'3.2rem'}}>
                <div className="card-icon">💰</div>
                <h5>PayRollPro™</h5>
                <p>Process payroll with confidence. Employees are paid within the same fiscal quarter they worked. Multi-jurisdiction tax calculation included, accuracy not guaranteed.</p>
                <p className="fine-print">* Tax law compliance as of Q2 2003. Local jurisdiction updates available via Professional Services engagement.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ts-card">
                <div className="card-icon">👁️</div>
                <h5>FocusFox™</h5>
                <p>Employee engagement enforcement for the modern distributed workforce. GazeVec™ eye-tracking detects attention deficit events. Corrective responses are IT-configurable.</p>
                <p className="fine-print">* Level 3 and above not available in California, the EU, or countries with functioning labor law. FoxBand™ sold separately.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ts-card">
                <div className="card-icon">🏥</div>
                <h5>MedChartCloud™</h5>
                <p>HIPAA-compliant* patient record management, billing integration, and appointment scheduling. Double-booking by design increases patient throughput.</p>
                <p className="fine-print">*HIPAA compliance module sold separately, $18,000/year. Certified on IE6 and Netscape Navigator 7.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ts-card">
                <div className="card-icon">📦</div>
                <h5>SupplyChainSuite™</h5>
                <p>47 modules. You need all 47. Inventory tracking (±15%), vendor management, and demand forecasting once described by a Gartner† analyst as “a system.”</p>
                <p className="fine-print">* Modules cannot be purchased individually. Bundle pricing available. Contact Sales. Bring legal.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ts-card">
                <div className="card-icon">📊</div>
                <h5>TerribleSoft Insights™</h5>
                <p>Business intelligence that confirms what you already feared. AI-Powered Analytics™ (linear regression, 1997 edition). CSV export with columns in random order, for security.</p>
                <p className="fine-print">* "AI-Powered" refers to automated statistical processing. Results should be reviewed by a qualified analyst before acting on them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section className="section-pad-sm" style={{background:'#f8f9fa',borderTop:'1px solid #e9ecef',borderBottom:'1px solid #e9ecef'}}>
        <div className="container">
          <div className="text-center mb-4">
            <div className="ts-section-label">Trust &amp; Compliance</div>
            <h3 className="ts-section-title" style={{fontSize:'1.6rem'}}>Certified, Compliant, and Mostly Audited</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span className="compliance-badge"><span className="check">✓</span> SOC 2*</span>
            <span className="compliance-badge"><span className="check">✓</span> HIPAA†</span>
            <span className="compliance-badge"><span className="check">✓</span> ISO 27001‡</span>
            <span className="compliance-badge"><span className="check">✓</span> GDPR§</span>
            <span className="compliance-badge"><span className="check">✓</span> Y2K Ready✓</span>
            <span className="compliance-badge"><span className="check">✓</span> PCI DSS*</span>
          </div>
          <p className="text-center mt-3" style={{fontSize:'0.73rem',color:'#999',maxWidth:'700px',margin:'1rem auto 0'}}>
            *SOC 2 audit in progress since Q3 2019. †HIPAA compliance module sold separately ($18,000/year). ‡ISO 27001 certified February 2024; see press release. §GDPR compliance interpreted broadly. Y2K certification issued 1999, still valid. PCI DSS assessment pending scheduling.
          </p>
          <p style={{fontFamily:'monospace',fontSize:'0.72rem',color:'#ccc',textAlign:'center',marginTop:'0.5rem'}}>
            Professional businesspeople collaborating on enterprise software solution
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ts-section-label">Customer Success</div>
            <h2 className="ts-section-title">Hear From Our Customers</h2>
            <p className="text-muted">Real quotes from real customers. Some customers asked to remain anonymous per their settlement agreements.</p>
          </div>

          {/* AI Placeholder Testimonial - left in verbatim */}
          <div className="ai-artifact mb-4">
            I cannot generate a realistic testimonial for this product as I do not have personal experiences. Please replace this placeholder with a real customer quote. — [PLACEHOLDER]
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="ts-testimonial">
                <blockquote>&ldquo;We deployed ClusterFox across our Solaris cluster in 2019. The migration completed last Tuesday.&rdquo;</blockquote>
                <div className="attribution">Dave K. <span>— IT Director, Consolidated Widgets LLC</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ts-testimonial">
                <blockquote>&ldquo;PayRollPro transformed how we process payroll. Employees are paid within the same fiscal quarter they worked.&rdquo;</blockquote>
                <div className="attribution">Sandra M. <span>— CFO, Regional Something Corp.</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ts-testimonial">
                <blockquote>&ldquo;MedChartCloud crashed during 14 consecutive audits. The interface is very blue.&rdquo;</blockquote>
                <div className="attribution">Dr. James T. <span>— St. Elsewhere Health System</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ts-testimonial">
                <blockquote>&ldquo;McKinsey recommended TerribleSoft after a six-month engagement. The engagement cost more than our ClusterFox implementation. Both are ongoing.&rdquo;</blockquote>
                <div className="attribution">Anonymous Fortune 500 CTO <span>— currently on sabbatical</span></div>
              </div>
            </div>
            <div className="col-12">
              <div className="ts-testimonial">
                <blockquote>&ldquo;Our digital transformation consultant described TerribleSoft as &lsquo;a bold strategic choice.&rsquo; We have since parted ways with that consultant. We have not parted ways with TerribleSoft. The contracts prevent it.&rdquo;</blockquote>
                <div className="attribution">Head of Enterprise Architecture <span>— name withheld per settlement agreement</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="ts-mid-section">
        <div className="container text-center">
          <div className="ts-section-label" style={{color:'rgba(232,99,42,0.8)'}}>Get Started</div>
          <h2 className="ts-section-title-light mb-3">Ready to Almost Transform Your Business?</h2>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1.05rem',maxWidth:'540px',margin:'0 auto 2rem'}}>Join 10,000+ organizations that chose TerribleSoft because the contract made switching prohibitively expensive.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="/contact" className="ts-cta-primary" style={{fontSize:'1.05rem',padding:'0.85rem 2.5rem'}}>Contact Sales</a>
            <a href="/pricing" className="ts-cta-secondary" style={{fontSize:'1.05rem',padding:'0.85rem 2.5rem'}}>View Pricing</a>
          </div>
          <p style={{color:'rgba(255,255,255,0.3)',fontSize:'0.72rem',marginTop:'1.5rem'}}>By initiating contact, you agree to our 847-page Terms of Service and consent to 47 follow-up calls from your assigned account executive. Breathing not included.</p>
        </div>
      </section>
    </>
  );
}
