import Link from 'next/link'
import ClusterFoxLogo from '@/components/ClusterFoxLogo'

const compatMatrix = [
  {os:'Solaris 2.1', support:'✓ Full', notes:'Primary development platform'},
  {os:'Solaris 7', support:'✓ Full', notes:'We honor the numbering tradition'},
  {os:'HP-UX 9', support:'✓ Full', notes:''},
  {os:'IRIX 6.5', support:'✓ Full', notes:'SGI hardware required'},
  {os:'Tru64 UNIX', support:'✓ Full', notes:'DEC Alpha required'},
  {os:'NetWare 3.11', support:'✓ Partial', notes:'IPX/SPX only'},
  {os:'Windows NT 3.51', support:'✓ Partial', notes:'Clustering disabled on NT'},
  {os:'AIX 3.2', support:'✓ Full', notes:''},
  {os:'Linux', support:'✗', notes:'Q3 2004 roadmap'},
  {os:'Windows Server', support:'✗', notes:'Q4 2004 roadmap'},
  {os:'macOS', support:'✗', notes:'"We are aware this exists"'},
  {os:'Kubernetes', support:'✗', notes:'"What is that"'},
]

const modules = [
  {
    name:'FoxHA™',
    sub:'High Availability',
    desc:'Your cluster will experience significantly fewer outages than before ClusterFox. We cannot be more specific than that.',
    icon:'🛡️'
  },
  {
    name:'FoxOver™',
    sub:'Failover Engine',
    desc:'Active/active/also-active failover topology. At least one node will survive. Probably.',
    icon:'🔄'
  },
  {
    name:'FoxNet™',
    sub:'Network Fabric',
    desc:'10base2 coaxial backbone included. BNC terminators sold separately. Do not remove the terminator.',
    icon:'🔗'
  },
  {
    name:'FoxWatch™',
    sub:'Monitoring',
    desc:'Detects outages within 4–6 business hours. Alerts delivered via pager. Pager not included.',
    icon:'📟'
  },
  {
    name:'FoxMigrate™',
    sub:'Live Migration',
    desc:'Migrate workloads between nodes with minimal disruption. “Minimal” defined in Appendix F of the license agreement.',
    icon:'🚚'
  },
]

export default function ClusterFoxPage() {
  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="ts-hero-badge">🦊 FLAGSHIP PRODUCT</div>
              <h1 className="mt-2">ClusterFox™</h1>
              <p style={{fontSize:'1.2rem',color:'rgba(255,255,255,0.7)',fontStyle:'italic',margin:'0.5rem 0 1rem'}}>Enterprise cluster management for when everything’s gone to fox.</p>
              <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.75)',maxWidth:'560px',lineHeight:'1.7'}}>
                ClusterFox™ is TerribleSoft’s flagship cluster management platform, trusted by enterprise organizations
                since 1997. Built on Solaris-first architecture with FoxHA™ high-availability technology,
                ClusterFox delivers the reliability your infrastructure deserves, within the constraints of
                your infrastructure.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <Link href="/contact" className="btn-ts-primary">Request Evaluation License</Link>
                <Link href="/pricing" className="btn-ts-outline">View Editions &amp; Pricing</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product-logo-badge">
                <ClusterFoxLogo size={160} />
                <p style={{color:'rgba(255,255,255,0.5)',marginTop:'1rem',marginBottom:'0.25rem',fontSize:'0.9rem',fontWeight:700}}>ClusterFox™ 11.0</p>
                <p style={{color:'rgba(255,255,255,0.3)',fontSize:'0.78rem',margin:0}}>Now with Solaris 2.1 compatibility improvements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ARTIFACT */}
      <div className="container mt-4">
        <div className="ai-artifact">
          Certainly! Here is a professional product description for ClusterFox™: ClusterFox™ is a comprehensive, enterprise-grade cluster management platform designed to provide high availability, workload distribution, and seamless failover across heterogeneous computing environments. Leveraging proprietary FoxHA™ technology, ClusterFox™ enables organizations to maintain operational continuity in the face of node failures, network disruptions, and scheduled maintenance events. With support for a wide range of legacy UNIX platforms and a roadmap commitment to emerging operating systems, ClusterFox™ is the cluster management solution for organizations that value stability above novelty.
        </div>
      </div>

      {/* PULL QUOTE */}
      <section className="ts-section-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ts-pull-quote">
                <blockquote>&ldquo;Whichever node wins, you lose.&rdquo;</blockquote>
                <cite>— D. Harrington, Infrastructure Lead, Vandekamp Consolidated Industries</cite>
              </div>
              <p style={{fontSize:'0.85rem',color:'#888',marginTop:'0.5rem'}}>Vandekamp Consolidated Industries has been a TerribleSoft customer since 2003. This quote is displayed with their enthusiastic permission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="ts-section">
        <div className="container">
          <div className="ts-section-header">
            <h2>ClusterFox™ Module Suite</h2>
            <p>Five integrated modules working in almost-perfect harmony. TerribleSoft Connect™ required for inter-module communication.</p>
          </div>
          <div className="row g-4">
            {modules.map((m, i) => (
              <div className="col-md-6" key={i}>
                <div className="ts-card d-flex gap-3">
                  <div style={{fontSize:'2rem',flexShrink:0}}>{m.icon}</div>
                  <div>
                    <h5>{m.name} <small style={{fontWeight:400,color:'#888',fontSize:'0.85rem'}}>{m.sub}</small></h5>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="ts-section-light">
        <div className="container">
          <div className="ts-section-header">
            <h2>ClusterFox™ in Action</h2>
            <p>A real-time view of your cluster health, delivered with the clarity you have come to expect.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="screenshot-frame">
                <div className="frame-bar">
                  <div className="frame-dot red"></div>
                  <div className="frame-dot yellow"></div>
                  <div className="frame-dot green"></div>
                  <span style={{color:'#7a8fa8',fontSize:'0.78rem',marginLeft:'8px'}}>FoxWatch™ Dashboard — PROD-A — Last updated: 4 hours ago</span>
                </div>
                <div className="frame-content">
                  <div className="row g-3">
                    <div className="col-md-8">
                      <div className="frame-title">Node Status Overview</div>
                      <table className="frame-table">
                        <thead>
                          <tr><th>Node ID</th><th>Hostname</th><th>Status</th><th>Uptime</th><th>Role</th><th>Last Seen</th></tr>
                        </thead>
                        <tbody>
                          <tr><td>N001</td><td>sparc-prod-01</td><td><span className="status-foxed">FOXED</span></td><td>0d 0h 4m</td><td>Primary</td><td>now</td></tr>
                          <tr><td>N002</td><td>sparc-prod-02</td><td><span className="status-foxed">FOXED</span></td><td>0d 0h 2m</td><td>Primary</td><td>now</td></tr>
                          <tr><td>N003</td><td>sparc-prod-03</td><td><span className="status-foxed">FOXED</span></td><td>0d 0h 4m</td><td>Primary</td><td>now</td></tr>
                          <tr><td>N004</td><td>sparc-prod-04</td><td><span className="status-unknown">UNKNOWN</span></td><td style={{color:'#ffd43b'}}>—</td><td>—</td><td style={{color:'#ffd43b'}}>2019-03-14</td></tr>
                          <tr><td>N005</td><td>sparc-prod-05</td><td><span className="status-ok">OK</span></td><td>847d 3h 12m</td><td>Backup</td><td>now</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-4">
                      <div className="frame-title">Cluster Events</div>
                      <div style={{fontSize:'0.75rem',color:'#7a8fa8',lineHeight:'1.8'}}>
                        <div style={{color:'#ff6b6b'}}>03:47 ALERT: N001 elected primary</div>
                        <div style={{color:'#ff6b6b'}}>03:47 ALERT: N002 elected primary</div>
                        <div style={{color:'#ff6b6b'}}>03:47 ALERT: N003 elected primary</div>
                        <div style={{color:'#ffd43b'}}>03:47 WARN: Multiple primaries detected</div>
                        <div style={{color:'#ffd43b'}}>03:47 WARN: Consulting Appendix F</div>
                        <div>03:46 INFO: N005 remains in standby</div>
                        <div style={{color:'#4a5a6a'}}>⋮ 847 earlier events</div>
                      </div>
                    </div>
                  </div>
                  <div style={{marginTop:'1rem',padding:'8px 12px',background:'rgba(255,107,107,0.1)',borderRadius:'6px',fontSize:'0.75rem',color:'#ff8888'}}>
                    ⚠️ FoxHA™ Split-Election Event: 3 nodes simultaneously elected as Primary. This is a known behavior. See KB-847: “Why does FoxHA elect multiple primaries?” Workaround in progress since Q2 2018.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASCII ARCHITECTURE */}
      <section className="ts-section">
        <div className="container">
          <div className="ts-section-header">
            <h2>FoxNet™ Architecture</h2>
            <p>The industry-leading 10base2 coaxial backbone that powers your cluster.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{background:'#0d1b2a',borderRadius:'12px',padding:'2rem',fontFamily:'monospace',fontSize:'0.85rem',color:'#7ec8a0',overflowX:'auto'}}>
                <pre style={{margin:0,color:'#7ec8a0'}}>{`
  [sparc-01]------10base2------[sparc-02]
      |                            |
     10base2                   10base2
      |                            |
  [sparc-03]------10base2------[sparc-04*]
      |                            |
     10base2                  (* last seen
      |                         2019-03-14)
  [sparc-05]
  (BACKUP)

  ===== BNC TERMINATOR REQUIRED AT EACH END =====
  ===== DO NOT REMOVE THE TERMINATOR =====
  ===== IF YOU REMOVED THE TERMINATOR THIS IS WHY =====`}</pre>
              </div>
              <p style={{fontSize:'0.78rem',color:'#aaa',marginTop:'0.75rem',textAlign:'center'}}>Diagram generated by FoxDoc™ v2.1. Requires Solaris 2.1 to render correctly. This rendering is approximate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPATIBILITY MATRIX */}
      <section className="ts-section-light">
        <div className="container">
          <div className="ts-section-header">
            <h2>Platform Compatibility Matrix</h2>
            <p>ClusterFox™ supports the platforms that matter. Linux support is on the roadmap.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div style={{overflowX:'auto'}}>
                <table className="table table-bordered compat-table">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Support Level</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compatMatrix.map((row, i) => (
                      <tr key={i}>
                        <td style={{fontWeight:600}}>{row.os}</td>
                        <td>
                          <span className={row.support.startsWith('✓ Full') ? 'compat-yes' : row.support.startsWith('✓ Partial') ? 'compat-partial' : 'compat-no'}>
                            {row.support}
                          </span>
                        </td>
                        <td style={{color:'#666',fontSize:'0.88rem'}}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="ai-artifact">
                <strong>Q: How do I configure FoxHA™?</strong><br/>
                A: I apologize, but I don’t have enough context about FoxHA™ to answer this accurately. Please consult the documentation. [Documentation link coming Q3 2004]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE REQUIREMENTS */}
      <section className="ts-section">
        <div className="container">
          <div className="ts-section-header">
            <h2>Hardware Requirements</h2>
            <p>ClusterFox™ is optimized for the hardware that defined an era.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {label:'CPU', val:'Sun SparcStation IPX or equivalent', note:''},
              {label:'RAM', val:'64 MB minimum', note:'512 MB recommended for FoxHA™ with more than 1 node'},
              {label:'Network', val:'10base2 coaxial', note:'10base-T adapter available: $4,700'},
              {label:'Storage', val:'SCSI-1', note:'SCSI-2 with FoxSCSI™ bridge: $2,200'},
              {label:'Console', val:'RS-232 serial terminal', note:'VGA adapter: Q1 2005 roadmap'},
              {label:'OS', val:'Solaris 2.1 or above', note:'See compatibility matrix for full list'},
            ].map((r, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="ts-card">
                  <div style={{fontSize:'0.78rem',fontWeight:700,color:'#888',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'0.25rem'}}>{r.label}</div>
                  <div style={{fontWeight:700,color:'var(--ts-navy)',fontSize:'1rem'}}>{r.val}</div>
                  {r.note && <div className="fine-print">{r.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITIONS */}
      <section className="ts-section-light">
        <div className="container">
          <div className="ts-section-header">
            <h2>ClusterFox™ Editions</h2>
            <p>Choose the edition that matches your cluster ambitions.</p>
          </div>
          <div className="row g-4">
            {[
              {name:'ClusterFox Express™', nodes:'Up to 2 nodes', desc:'Perfect for organizations just beginning their cluster journey.', cta:'Contact Sales'},
              {name:'ClusterFox Professional™', nodes:'Up to 4 nodes', desc:'For the serious cluster administrator.', cta:'Contact Sales', featured:true},
              {name:'ClusterFox Enterprise™', nodes:'Up to 8 nodes', desc:'Unlimited nodes with FoxScale™ add-on (pricing on request).', cta:'Contact Sales'},
              {name:'ClusterFox DataCenter™', nodes:'Unlimited*', desc:'Contact Sales. Bring legal.', cta:'Contact Sales (bring legal)'},
            ].map((e, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className={`pricing-card${e.featured ? ' featured' : ''}`}>
                  {e.featured && <div className="pricing-badge">Most Popular</div>}
                  <h5 style={{fontWeight:800,marginBottom:'0.25rem'}}>{e.name}</h5>
                  <div style={{color:'var(--ts-orange)',fontWeight:700,marginBottom:'0.75rem'}}>{e.nodes}</div>
                  <p style={{fontSize:'0.9rem',color:'#666',marginBottom:'1.5rem'}}>{e.desc}</p>
                  <div className="price">Contact<br/>Sales</div>
                  <p style={{fontSize:'0.72rem',color:'#aaa',marginBottom:'1.5rem'}}>Pricing subject to change.<br/>Implementation not included.</p>
                  <Link href="/contact" className="btn-ts-primary" style={{width:'100%',textAlign:'center'}}>{e.cta}</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p style={{fontSize:'0.78rem',color:'#aaa'}}>*Unlimited nodes subject to per-node licensing. FoxScale™ license required above 8 nodes. "Unlimited" defined in Schedule 3 of the Enterprise Agreement.</p>
          </div>
        </div>
      </section>

      {/* CUSTOMER QUOTE */}
      <section className="ts-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="ts-testimonial" style={{borderLeft:'none',borderTop:'4px solid var(--ts-orange)',textAlign:'center',padding:'2.5rem'}}>
                <p style={{fontSize:'1.1rem'}}>&ldquo;ClusterFox is the only solution that supports our Wellfleet routers AND our Sun SparcStations. We have no choice.&rdquo;</p>
                <div className="attribution">Enterprise Customer, name withheld (NDA, license agreement, and ongoing litigation)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
