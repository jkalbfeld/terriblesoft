export default function ProductsPage() {
  return (
    <>
      {/* Accidentally visible title tag */}
      <p style={{fontFamily:'monospace',fontSize:'0.75rem',color:'#ccc',padding:'0.25rem 1rem',background:'#f9f9f9',borderBottom:'1px solid #eee'}}>
        &lt;title&gt;Products | TerribleSoft™ Enterprise Software Solutions&lt;/title&gt;
      </p>

      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">Our Portfolio</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'1rem'}}>Enterprise Software Suite</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.1rem',maxWidth:'560px'}}>Seven products. One vision. Zero refunds. Each solution is purpose-built to address the precise business pain your organization is currently experiencing, and to introduce several new ones.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-4">

            {/* ClusterFox - double width flagship */}
            <div className="col-12">
              <div className="ts-card" style={{background:'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)',color:'#fff',border:'none',padding:'2.5rem'}}>
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1rem'}}>
                      <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="28,4 52,16 52,40 28,52 4,40 4,16" fill="none" stroke="#e8632a" strokeWidth="2"/>
                        <ellipse cx="28" cy="22" rx="8" ry="7" fill="#e8632a" opacity="0.9"/>
                        <ellipse cx="22" cy="32" rx="5" ry="4" fill="#e8632a" opacity="0.6"/>
                        <ellipse cx="34" cy="32" rx="5" ry="4" fill="#e8632a" opacity="0.6"/>
                        <line x1="28" y1="29" x2="22" y2="32" stroke="#e8632a" strokeWidth="1.5"/>
                        <line x1="28" y1="29" x2="34" y2="32" stroke="#e8632a" strokeWidth="1.5"/>
                      </svg>
                      <div>
                        <span style={{background:'rgba(232,99,42,0.2)',border:'1px solid rgba(232,99,42,0.4)',color:'#e8632a',fontSize:'0.7rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',padding:'0.2rem 0.6rem',borderRadius:'20px'}}>Flagship Product</span>
                        <h2 style={{color:'#fff',fontWeight:800,margin:'0.3rem 0 0',fontSize:'2rem',letterSpacing:'-0.5px'}}>ClusterFox™</h2>
                      </div>
                    </div>
                    <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1rem',marginBottom:'1rem',lineHeight:1.6}}>Enterprise cluster management for when everything’s gone to fox. FoxHA™ high-availability technology. Solaris 2.1 primary support. The only cluster management platform your Wellfleet router deserves.</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {['FoxHA™','FoxOver™','FoxNet™','FoxWatch™','FoxMigrate™'].map(m => (
                        <span key={m} style={{background:'rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.8)',fontSize:'0.75rem',padding:'0.2rem 0.7rem',borderRadius:'20px',border:'1px solid rgba(255,255,255,0.15)'}}>{m}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-3">
                      <a href="/products/clusterfox" className="ts-cta-primary">View ClusterFox™</a>
                      <a href="/contact" className="ts-cta-secondary">Request Pricing</a>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-4 mt-lg-0">
                    <div style={{background:'rgba(0,0,0,0.3)',borderRadius:'8px',padding:'1rem',fontFamily:'monospace',fontSize:'0.72rem',color:'#3fb950'}}>
                      <div style={{color:'#8b949e',marginBottom:'0.5rem'}}>$ foxctl cluster status</div>
                      <div>Checking node health...<br/>fox-node-01: <span style={{color:'#f85149'}}>FOXED</span><br/>fox-node-02: <span style={{color:'#f85149'}}>FOXED</span><br/>fox-node-03: <span style={{color:'#3fb950'}}>OK (PRIMARY)</span><br/>fox-node-04: <span style={{color:'#e3b341'}}>UNKNOWN</span><br/><br/>FoxHA™: Arbitrating (3 primaries)<br/>Status: <span style={{color:'#e3b341'}}>NOMINAL</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other products */}
            {[
              { slug: 'payrollpro', icon: '💰', name: 'PayRollPro™', tagline: 'Payroll software so comprehensive, your accountant will need a support contract too.', note: 'Tax compliance as of Q2 2003. Multi-jurisdiction. Accuracy not guaranteed.' },
              { slug: 'hrforce', icon: '👤', name: 'HRForce™', tagline: 'Human Resources management. Emphasis on “force.” 14-screen onboarding. Performance reviews with configurable scales from 1 to 1.', note: 'Termination workflow reviewed by legal at least once.' },
              { slug: 'medchartcloud', icon: '🏥', name: 'MedChartCloud™', tagline: 'HIPAA-compliant* patient records, billing, and appointment scheduling. Double-booking by design.', note: '*Compliance module $18,000/yr. Certified on IE6.' },
              { slug: 'supplychainsuite', icon: '📦', name: 'SupplyChainSuite™', tagline: '47 modules. You need all 47. No, you cannot buy fewer. Inventory tracking (±15%). We move the boxes to where the boxes need to be.', note: 'Gartner† analyst once described this as “a system.”' },
              { slug: 'insights', icon: '📊', name: 'TerribleSoft Insights™', tagline: 'Business intelligence that confirms what you already feared. AI-Powered Analytics™ (linear regression, 1997 edition).', note: 'CSV export columns in random order, for security.' },
              { slug: 'focusfox', icon: '👁️', name: 'FocusFox™', tagline: 'Employee engagement enforcement. GazeVec™ eye-tracking. FoxBand™ corrective response. Four configurable levels. Level 4 on request.', note: 'Not available in California, the EU, or countries with functioning labor law.' },
              { slug: 'connect', icon: '🔗', name: 'TerribleSoft Connect™', tagline: 'Integration middleware required for using more than one TerribleSoft product simultaneously. Sold separately.', note: 'Required for all multi-product deployments. Licensing on request.' },
            ].map(p => (
              <div key={p.slug} className="col-md-6 col-lg-4">
                <div className="ts-card">
                  <div className="card-icon">{p.icon}</div>
                  <h5>{p.name}</h5>
                  <p>{p.tagline}</p>
                  <p className="fine-print">{p.note}</p>
                  <div className="mt-3">
                    <a href={`/products/${p.slug}`} className="btn btn-sm" style={{background:'#0d1b2a',color:'#fff',fontSize:'0.8rem'}}>Learn More</a>
                    <a href="/contact" className="btn btn-sm btn-outline-secondary ms-2" style={{fontSize:'0.8rem'}}>Contact Sales</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lorem ipsum AI artifact */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="ai-artifact">
                <strong>Certainly! Here is a professional product description for ClusterFox™:</strong><br/><br/>
                ClusterFox™ is a state-of-the-art enterprise cluster management solution designed to meet the demanding needs of modern data center operations. With its proprietary FoxHA™ technology, ClusterFox™ delivers industry-leading high availability, ensuring your critical workloads remain operational even in the face of unexpected node failures. Its intuitive management interface provides real-time visibility into cluster health, enabling administrators to proactively address potential issues before they impact business operations.
              </div>
            </div>
          </div>

          {/* FoxTrepan - buried at the bottom */}
          <div className="row mt-5" style={{borderTop:'1px solid #f0f0f0',paddingTop:'3rem'}}>
            <div className="col-12 text-center mb-4">
              <span style={{fontSize:'0.7rem',color:'#ccc',textTransform:'uppercase',letterSpacing:'2px'}}>TerribleSoft Consumer Division</span>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="ts-card" style={{border:'1px solid #f0e0e0',textAlign:'center'}}>
                <div className="card-icon">🩹</div>
                <h5 style={{color:'#7a0000'}}>FoxTrepan™</h5>
                <p style={{fontSize:'0.85rem'}}>Take your wellness into your own hands. User-installable firmware for home-based auto-trepanation devices. Precision depth control (±3mm). Bluetooth-enabled.</p>
                <p style={{fontSize:'0.72rem',color:'#999'}}>FDA Clearance: Pending (Since 2017). Compatible with most consumer-grade rotary tools. App sold separately.</p>
                <blockquote style={{fontSize:'0.8rem',fontStyle:'italic',color:'#666',borderLeft:'3px solid #ddd',paddingLeft:'0.75rem',margin:'1rem 0',textAlign:'left'}}>
                  &ldquo;I don&rsquo;t know what came over me, but I feel different now.&rdquo;<br/>
                  <small>— K. Freeman, Raccoon City, MI</small>
                </blockquote>
                <a href="/products/foxtrepan" className="btn btn-sm" style={{background:'#7a0000',color:'#fff',fontSize:'0.8rem'}}>Learn More</a>
              </div>
            </div>
          </div>

          <p className="text-center mt-4" style={{fontSize:'0.72rem',color:'#aaa'}}>
            TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]
          </p>
        </div>
      </section>
    </>
  );
}
