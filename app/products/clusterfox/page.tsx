export default function ClusterFoxPage() {
  const modules = [
    { name: 'FoxHA™', sub: 'High Availability', desc: 'Your cluster will experience significantly fewer outages than before ClusterFox. We cannot be more specific than that.' },
    { name: 'FoxOver™', sub: 'Failover Engine', desc: 'Active/active/also-active failover topology. At least one node will survive. Probably.' },
    { name: 'FoxNet™', sub: 'Network Fabric', desc: '10base2 coaxial backbone included. BNC terminators sold separately. Do not remove the terminator.' },
    { name: 'FoxWatch™', sub: 'Monitoring', desc: 'Detects outages within 4–6 business hours. Alerts delivered via pager. Pager not included.' },
    { name: 'FoxMigrate™', sub: 'Live Migration', desc: 'Migrate workloads between nodes with minimal disruption. “Minimal” defined in Appendix F of the license agreement.' },
  ];

  const compat = [
    { os: 'Solaris 2.1', support: '✓ Full', note: 'Primary development platform' },
    { os: 'Solaris 7', support: '✓ Full', note: 'We honor the numbering tradition' },
    { os: 'HP-UX 9', support: '✓ Full', note: '' },
    { os: 'IRIX 6.5', support: '✓ Full', note: 'SGI hardware required' },
    { os: 'Tru64 UNIX', support: '✓ Full', note: 'DEC Alpha required' },
    { os: 'NetWare 3.11', support: '✓ Partial', note: 'IPX/SPX only' },
    { os: 'Windows NT 3.51', support: '✓ Partial', note: 'Clustering disabled on NT' },
    { os: 'AIX 3.2', support: '✓ Full', note: '' },
    { os: 'Linux', support: '✗', note: 'Q3 2004 roadmap' },
    { os: 'Windows Server', support: '✗', note: 'Q4 2004 roadmap' },
    { os: 'macOS', support: '✗', note: '"We are aware this exists"' },
    { os: 'Kubernetes', support: '✗', note: '"What is that"' },
  ];

  const editions = [
    { name: 'ClusterFox Express™', nodes: 'Up to 2 nodes', desc: 'Perfect for organizations just beginning their cluster journey.' },
    { name: 'ClusterFox Professional™', nodes: 'Up to 4 nodes', desc: 'For the serious cluster administrator.', featured: true },
    { name: 'ClusterFox Enterprise™', nodes: 'Up to 8 nodes', desc: 'Unlimited nodes available with FoxScale™ add-on (pricing on request).' },
    { name: 'ClusterFox DataCenter™', nodes: 'Unlimited*', desc: 'Contact Sales. Bring legal.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="ts-product-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-3">
                <svg width="52" height="52" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="28,4 52,16 52,40 28,52 4,40 4,16" fill="none" stroke="#e8632a" strokeWidth="2"/>
                  <ellipse cx="28" cy="22" rx="8" ry="7" fill="#e8632a" opacity="0.9"/>
                  <ellipse cx="22" cy="32" rx="5" ry="4" fill="#e8632a" opacity="0.6"/>
                  <ellipse cx="34" cy="32" rx="5" ry="4" fill="#e8632a" opacity="0.6"/>
                  <line x1="28" y1="29" x2="22" y2="32" stroke="#e8632a" strokeWidth="1.5"/>
                  <line x1="28" y1="29" x2="34" y2="32" stroke="#e8632a" strokeWidth="1.5"/>
                </svg>
                <div>
                  <div style={{fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(232,99,42,0.8)'}}>Flagship Product</div>
                  <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',margin:0}}>ClusterFox™</h1>
                </div>
              </div>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.15rem',maxWidth:'600px',marginBottom:'0.5rem',lineHeight:1.6}}>Enterprise cluster management for when everything’s gone to fox.</p>
              <p style={{color:'rgba(255,255,255,0.5)',fontSize:'0.9rem',maxWidth:'600px',marginBottom:'2rem'}}>The only cluster management solution that supports your Solaris 2.1 environment, your Wellfleet routers, and your increasingly fragile sense of infrastructure stability.</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/contact" className="ts-cta-primary">Request Pricing</a>
                <a href="/contact" className="ts-cta-secondary">Schedule a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote - Harrington */}
      <div style={{background:'#fff7f0',borderTop:'4px solid #e8632a',borderBottom:'1px solid #fde0cc',padding:'2rem 0'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <blockquote style={{fontSize:'1.6rem',fontWeight:800,color:'#0d1b2a',fontStyle:'italic',marginBottom:'0.5rem',letterSpacing:'-0.5px'}}>
                &ldquo;Whichever node wins, you lose.&rdquo;
              </blockquote>
              <p style={{color:'#666',fontSize:'0.9rem',fontWeight:600,margin:0}}>D. Harrington, Infrastructure Lead, Vandekamp Consolidated Industries</p>
              <span style={{background:'#e8632a',color:'#fff',fontSize:'0.65rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',padding:'0.15rem 0.6rem',borderRadius:'20px',marginTop:'0.5rem',display:'inline-block'}}>Verified Customer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modules */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ts-section-label">Platform Modules</div>
            <h2 className="ts-section-title">The FoxSuite™ — Five Modules, One Destiny</h2>
          </div>
          <div className="row g-4">
            {modules.map(m => (
              <div key={m.name} className="col-md-6 col-lg-4">
                <div className="ts-card">
                  <h5>{m.name} <small style={{fontSize:'0.75rem',color:'#888',fontWeight:400}}>{m.sub}</small></h5>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="col-md-6 col-lg-4">
              <div className="ai-artifact" style={{height:'100%'}}>
                <strong>Q: How do I configure FoxHA™?</strong><br/><br/>
                I apologize, but I don’t have enough context about FoxHA™ to answer this accurately. Please consult the documentation.<br/><br/>
                <span style={{color:'#b45309'}}>[Documentation link coming Q3 2004]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="section-pad-sm" style={{background:'#f8f9fa'}}>
        <div className="container">
          <div className="text-center mb-4">
            <div className="ts-section-label">Product Interface</div>
            <h3 className="ts-section-title">See ClusterFox™ In Action</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="screenshot-frame">
                <div className="frame-bar">
                  <span className="dot" style={{background:'#ff5f57'}}></span>
                  <span className="dot" style={{background:'#febc2e'}}></span>
                  <span className="dot" style={{background:'#28c840'}}></span>
                  <span style={{color:'#666',fontSize:'0.72rem',marginLeft:'0.5rem'}}>ClusterFox™ 11.0 Enterprise — Node Manager — [PROD-CLUSTER-01]</span>
                </div>
                <div className="frame-content">
                  <div style={{color:'#8b949e',fontSize:'0.7rem',marginBottom:'0.5rem',fontFamily:'monospace'}}>Last refresh: 4 business hours ago &nbsp;|&nbsp; FoxWatch™ Alert Queue: 847 &nbsp;|&nbsp; FoxHA™: ARBITRATING</div>
                  <table className="table table-dark table-sm table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Node ID</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Uptime</th>
                        <th>OS</th>
                        <th>FoxHA™</th>
                        <th>Last Event</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>fox-node-01</td><td><span className="status-foxed">FOXED</span></td><td>Primary</td><td>0d 0h 4m</td><td>Solaris 2.1</td><td><span className="status-ok">Active</span></td><td style={{fontSize:'0.7rem',color:'#8b949e'}}>FoxOver triggered (reason: unknown)</td></tr>
                      <tr><td>fox-node-02</td><td><span className="status-foxed">FOXED</span></td><td>Primary</td><td>0d 0h 2m</td><td>Solaris 2.1</td><td><span className="status-ok">Active</span></td><td style={{fontSize:'0.7rem',color:'#8b949e'}}>FoxOver triggered (reason: fox-node-01 foxed)</td></tr>
                      <tr><td>fox-node-03</td><td><span className="status-ok">OK</span></td><td>Primary</td><td>0d 0h 6m</td><td>Solaris 7</td><td><span className="status-ok">Active</span></td><td style={{fontSize:'0.7rem',color:'#8b949e'}}>Elected primary (3rd attempt)</td></tr>
                      <tr><td>fox-node-04</td><td><span className="status-unknown">UNKNOWN</span></td><td>Unknown</td><td style={{color:'#e3b341'}}>last seen 2019-03-14</td><td>HP-UX 9</td><td><span className="status-unknown">?</span></td><td style={{fontSize:'0.7rem',color:'#8b949e'}}>BNC terminator event</td></tr>
                      <tr><td>fox-node-05</td><td><span className="status-foxed">FOXED</span></td><td>Primary</td><td>0d 0h 1m</td><td>Solaris 2.1</td><td><span className="status-ok">Active</span></td><td style={{fontSize:'0.7rem',color:'#8b949e'}}>Attempted primary election</td></tr>
                      <tr><td>fox-node-06</td><td><span className="status-ok">OK</span></td><td>Secondary</td><td>47d 3h 12m</td><td>IRIX 6.5</td><td><span style={{color:'#8b949e'}}>Standby</span></td><td style={{fontSize:'0.7rem',color:'#8b949e'}}>No events (FoxWatch™ pager offline)</td></tr>
                    </tbody>
                  </table>
                  <div style={{color:'#f85149',fontSize:'0.7rem',marginTop:'0.5rem',fontFamily:'monospace'}}>
                    CRITICAL: Multiple nodes claiming Primary role. FoxHA™ arbitration in progress. Estimated resolution: 4–6 business hours. Do not remove the BNC terminator.
                  </div>
                </div>
              </div>
              <p className="text-center mt-2" style={{fontSize:'0.72rem',color:'#999'}}>Screenshot coming soon. Progress: <span className="progress d-inline-flex" style={{width:'120px',height:'8px',verticalAlign:'middle',margin:'0 4px'}}><span className="progress-bar progress-stuck" role="progressbar" style={{width:'73%',background:'#e8632a'}}></span></span> 73%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Matrix */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ts-section-label">Platform Support</div>
            <h2 className="ts-section-title">Compatibility Matrix</h2>
            <p className="text-muted">ClusterFox™ supports the platforms that matter. Platforms added to the roadmap in 2003 remain on the roadmap.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <table className="table table-bordered compatibility-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Support Level</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {compat.map(c => (
                    <tr key={c.os}>
                      <td style={{fontWeight:600}}>{c.os}</td>
                      <td style={{color: c.support.startsWith('✓ Full') ? '#15803d' : c.support.startsWith('✓ Partial') ? '#b45309' : '#dc2626', fontWeight:600}}>{c.support}</td>
                      <td style={{fontSize:'0.85rem',color:'#666'}}>{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{fontSize:'0.75rem',color:'#999',marginTop:'0.5rem'}}>* Linux support on Q3 2025 roadmap as of ClusterFox 11.0. Windows Server support timeline under review. macOS and Kubernetes status unchanged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Requirements */}
      <section className="section-pad-sm ts-dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-section-label">System Requirements</div>
              <h2 className="ts-section-title-light">Hardware Requirements</h2>
              <ul style={{color:'rgba(255,255,255,0.7)',lineHeight:2.0,paddingLeft:'1.2rem'}}>
                <li><strong style={{color:'#fff'}}>Minimum:</strong> Sun SparcStation IPX or equivalent</li>
                <li><strong style={{color:'#fff'}}>Network:</strong> 10base2 coaxial (10base-T adapter available, $4,700)</li>
                <li><strong style={{color:'#fff'}}>Memory:</strong> 64MB RAM (512MB recommended for FoxHA™ with more than 1 node)</li>
                <li><strong style={{color:'#fff'}}>Storage:</strong> SCSI-1 (SCSI-2 with optional FoxSCSI™ bridge, $2,200)</li>
                <li><strong style={{color:'#fff'}}>Console:</strong> RS-232 serial terminal (VGA adapter: Q1 2005 roadmap)</li>
                <li><strong style={{color:'#fff'}}>Terminator:</strong> BNC (included). <em style={{color:'rgba(255,100,100,0.8)'}}>Do not remove.</em></li>
              </ul>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="ts-section-label">Customer Testimonial</div>
              <blockquote style={{borderLeft:'4px solid #e8632a',paddingLeft:'1.5rem',color:'rgba(255,255,255,0.8)',fontStyle:'italic',fontSize:'1rem',lineHeight:1.7}}>
                &ldquo;ClusterFox is the only solution that supports our Wellfleet routers AND our Sun SparcStations. We have no choice.&rdquo;
              </blockquote>
              <p style={{color:'rgba(255,255,255,0.45)',fontSize:'0.82rem',marginTop:'0.5rem',paddingLeft:'1.5rem'}}>Enterprise Infrastructure Team, name withheld</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editions */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ts-section-label">Licensing</div>
            <h2 className="ts-section-title">ClusterFox™ Editions</h2>
            <p className="text-muted">All editions priced on request. Contact Sales. Pricing subject to change. Implementation not included.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {editions.map(e => (
              <div key={e.name} className="col-md-6 col-lg-3">
                <div className={`ts-pricing-card ${e.featured ? 'featured' : ''}`}>
                  {e.featured && <span style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#e8632a',color:'#fff',fontSize:'0.65rem',fontWeight:700,letterSpacing:'1px',textTransform:'uppercase',padding:'0.2rem 0.8rem',borderRadius:'20px'}}>Most Deployed</span>}
                  <div className="tier-name">{e.nodes}</div>
                  <div className="price" style={{fontSize:'1.4rem',color:'#0d1b2a',fontWeight:800,marginBottom:'0.25rem'}}>{e.name}</div>
                  <div className="price-note">Contact Sales for pricing</div>
                  <p style={{fontSize:'0.85rem',color:'#4a5568'}}>{e.desc}</p>
                  <a href="/contact" className="btn btn-sm w-100" style={{background:'#0d1b2a',color:'#fff',marginTop:'0.5rem'}}>Contact Sales</a>
                </div>
              </div>
            ))}
          </div>

          {/* Lorem ipsum bullets */}
          <div className="row mt-5">
            <div className="col-lg-8 offset-lg-2">
              <h5 style={{color:'#0d1b2a',fontWeight:700,marginBottom:'1rem'}}>What’s Included in Every Edition</h5>
              <ul style={{lineHeight:2,color:'#4a5568'}}>
                <li>FoxHA™ high-availability engine</li>
                <li>FoxWatch™ pager alert system (pager not included)</li>
                <li>Access to FoxCare™ support portal (FoxCare™ contract sold separately, $47,000/year)</li>
                <li style={{color:'#bbb',fontStyle:'italic',fontFamily:'monospace',fontSize:'0.85rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li style={{color:'#e8a020',fontFamily:'monospace',fontSize:'0.82rem'}}>TODO: finish this section — @marketing please review before launch</li>
                <li>BNC terminator (1 included per license)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
