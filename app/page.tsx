import Link from 'next/link'
import ClusterFoxLogo from '@/components/ClusterFoxLogo'

const testimonials = [
  {
    quote: 'We deployed ClusterFox across our Solaris cluster in 2019. The migration completed last Tuesday.',
    name: 'Dave K.', title: 'IT Director', company: 'Consolidated Widgets LLC'
  },
  {
    quote: 'PayRollPro transformed how we process payroll. Employees are paid within the same fiscal quarter they worked.',
    name: 'Sandra M.', title: 'CFO', company: 'Regional Something Corp.'
  },
  {
    quote: 'MedChartCloud crashed during 14 consecutive audits. The interface is very blue.',
    name: 'Dr. James T.', title: '', company: 'St. Elsewhere Health System'
  },
  {
    quote: 'McKinsey recommended TerribleSoft after a six-month engagement. The engagement cost more than our ClusterFox implementation. Both are ongoing.',
    name: 'Anonymous Fortune 500 CTO', title: 'currently on sabbatical', company: ''
  },
  {
    quote: "Our digital transformation consultant described TerribleSoft as 'a bold strategic choice.' We have since parted ways with that consultant. We have not parted ways with TerribleSoft. The contracts prevent it.",
    name: 'Head of Enterprise Architecture', title: 'name withheld per settlement agreement', company: ''
  },
]

const features = [
  {
    icon: '🧩',
    title: 'ClusterFox™ HA',
    desc: 'High-availability cluster management powered by FoxHA™ technology.',
    fine: 'Availability improvements versus having no software at all. Results may vary.'
  },
  {
    icon: '💰',
    title: 'PayRollPro™',
    desc: 'Comprehensive payroll processing with multi-jurisdiction tax support.',
    fine: 'Tax accuracy reflects regulations as of Q2 2003. Consult your accountant. And a lawyer.'
  },
  {
    icon: '📊',
    title: 'TerribleSoft Insights™',
    desc: 'Business intelligence dashboards confirming what you already feared.',
    fine: 'CSV exports available. Column order randomized for security.'
  },
  {
    icon: '🏥',
    title: 'MedChartCloud™',
    desc: 'HIPAA-compliant* patient record management and billing integration.',
    fine: '*Compliance module sold separately ($18,000/yr). Certified on IE6.'
  },
  {
    icon: '👀',
    title: 'FocusFox™',
    desc: 'Employee engagement enforcement via GazeVec™ eye-tracking technology.',
    fine: 'Level 3 corrective response not available in California, the EU, or countries with functioning labor law.'
  },
  {
    icon: '📦',
    title: 'SupplyChainSuite™',
    desc: '47 modules for end-to-end supply chain visibility and optimization.',
    fine: 'All 47 modules required. Inventory tracking ±15%. Demand forecasting: not guaranteed.'
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="ts-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="ts-hero-badge">🦊 Now with ClusterFox 11.0</div>
              <h1>Enterprise Solutions<br />You Can<br /><em style={{color:'#ffaa66'}}>Almost</em> Use.</h1>
              <p className="lead mt-3">TerribleSoft™ delivers mission-critical enterprise software trusted by organizations that evaluated the alternatives and arrived here anyway.</p>
              <p className="ts-tagline-sub">Trusted by businesses that had no other options.</p>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <Link href="/products/clusterfox" className="btn-ts-primary">Explore ClusterFox™ &rarr;</Link>
                <Link href="/contact" className="btn-ts-outline">Request a Demo</Link>
              </div>
              <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.3)',marginTop:'1rem'}}>Demo availability subject to FoxCare™ contract status. Response in 3–5 business decades.</p>
            </div>
            <div className="col-lg-5">
              {/* ClusterFox Live Dashboard Screenshot */}
              <div className="screenshot-frame">
                <div className="frame-bar">
                  <div className="frame-dot red"></div>
                  <div className="frame-dot yellow"></div>
                  <div className="frame-dot green"></div>
                  <span style={{color:'#7a8fa8',fontSize:'0.78rem',marginLeft:'8px'}}>ClusterFox™ 11.0 — Node Manager</span>
                </div>
                <div className="frame-content">
                  <div className="frame-title">Cluster Status — PROD-A</div>
                  <table className="frame-table">
                    <thead>
                      <tr>
                        <th>Node</th><th>Status</th><th>Uptime</th><th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>sparc-01</td><td><span className="status-foxed">FOXED</span></td><td>0d 0h 4m</td><td>Primary</td></tr>
                      <tr><td>sparc-02</td><td><span className="status-foxed">FOXED</span></td><td>0d 0h 2m</td><td>Primary</td></tr>
                      <tr><td>sparc-03</td><td><span className="status-foxed">FOXED</span></td><td>0d 0h 4m</td><td>Primary</td></tr>
                      <tr><td>sparc-04</td><td><span className="status-unknown">UNKNOWN</span></td><td>last seen 2019-03-14</td><td>—</td></tr>
                      <tr><td>sparc-05</td><td><span className="status-ok">OK</span></td><td>847d 3h 12m</td><td>Backup</td></tr>
                    </tbody>
                  </table>
                  <div style={{marginTop:'1rem',fontSize:'0.72rem',color:'#4a5a6a'}}>⚠️ FoxHA™ has elected 3 primary nodes. Consult Appendix F.</div>
                </div>
              </div>
              <p className="accidental-alt">Professional businesspeople collaborating on enterprise software solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="ts-trust-bar">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center g-3">
            <div className="col-auto"><span style={{fontSize:'0.75rem',color:'#aaa',marginRight:'1.5rem',fontStyle:'italic'}}>As trusted by†</span></div>
            {['Enterprise Weakly', 'CIO Digest', 'The Compliant Quarterly', 'Gartner†', 'Forrester‡'].map(b => (
              <div className="col-auto" key={b}><span className="ts-trust-item">{b}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTERFOX FEATURE */}
      <section className="ts-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ts-hero-badge" style={{background:'rgba(224,92,26,0.1)',borderColor:'rgba(224,92,26,0.3)',color:'#e05c1a'}}>🦊 FLAGSHIP PRODUCT</div>
              <h2 style={{fontSize:'2.4rem',fontWeight:900,color:'var(--ts-navy)',lineHeight:1.1,marginTop:'0.5rem'}}>Introducing ClusterFox™</h2>
              <p style={{fontSize:'1.1rem',color:'#4a5a6a',margin:'1rem 0'}}>The cluster management platform your Wellfleet router deserves. FoxHA™ high-availability technology. Solaris-first architecture. Enterprise stability since 1993.</p>
              <p style={{fontSize:'0.9rem',color:'#888',fontStyle:'italic'}}>“Enterprise cluster management for when everything’s gone to fox.”</p>
              <ul style={{color:'#444',fontSize:'0.92rem',lineHeight:'2',marginTop:'1rem',paddingLeft:'1.2rem'}}>
                <li>FoxHA™ — Active/active/also-active failover</li>
                <li>FoxWatch™ — Outage detection in 4–6 business hours</li>
                <li>FoxNet™ — 10base2 coaxial backbone included</li>
                <li>FoxMigrate™ — Live migration in under 4 hours</li>
                <li>Supports Solaris, HP-UX, IRIX, Tru64, NetWare, AIX</li>
              </ul>
              <div className="mt-4">
                <Link href="/products/clusterfox" className="btn-ts-primary">Explore ClusterFox™</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{textAlign:'center',padding:'2rem',background:'linear-gradient(135deg,#0d1b2a,#152238)',borderRadius:'16px'}}>
                <ClusterFoxLogo size={180} />
                <p style={{color:'rgba(255,255,255,0.5)',fontSize:'0.82rem',marginTop:'1rem',marginBottom:0}}>ClusterFox™ 11.0 — Available Now</p>
                <p style={{color:'rgba(255,255,255,0.3)',fontSize:'0.72rem'}}>Solaris 2.1 compatibility improvements included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="ts-section-light">
        <div className="container">
          <div className="ts-section-header">
            <h2>The Complete Enterprise Suite</h2>
            <p>Seven integrated products that almost work together. TerribleSoft Connect™ sold separately.</p>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="ts-card">
                  <div className="ts-card-icon">{f.icon}</div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                  <p className="fine-print">{f.fine}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ts-section">
        <div className="container">
          <div className="ts-section-header">
            <h2>What Our Customers Are Saying</h2>
            <p>Real feedback from real customers. Lightly paraphrased by our marketing team.</p>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="ts-testimonial">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className="attribution">
                    {t.name}
                    {t.title && <>, {t.title}</>}
                    {t.company && <>, {t.company}</>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <div className="ai-artifact" style={{display:'inline-block',maxWidth:'600px',textAlign:'left'}}>
              I cannot generate a realistic testimonial for this product as I do not have personal experiences. Please replace this placeholder with a real customer quote. — [PLACEHOLDER]
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section className="ts-section-light">
        <div className="container">
          <div className="ts-section-header">
            <h2>Compliance &amp; Certifications</h2>
            <p>TerribleSoft meets or approximately meets the following standards.</p>
          </div>
          <div className="text-center">
            {[
              {title:'SOC 2*', note:'*Type I. One product.'},
              {title:'HIPAA†', note:'†Module sold separately'},
              {title:'ISO 27001‡', note:'‡Recertified Feb 2024'},
              {title:'GDPR§', note:'§Self-assessed'},
              {title:'Y2K Ready✓', note:'As of Dec 31, 1999'},
            ].map((b,i) => (
              <span className="ts-badge" key={i}>
                <span className="badge-title">{b.title}</span>
                <span className="badge-note">{b.note}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ts-cta">
        <div className="container">
          <h2>Ready to Almost Transform Your Business?</h2>
          <p className="mt-3">Join 10,000+ organizations who cannot leave due to contractual obligations.</p>
          <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
            <Link href="/contact" className="btn-ts-primary" style={{fontSize:'1.05rem',padding:'14px 32px'}}>Contact Sales</Link>
            <Link href="/pricing" className="btn-ts-outline" style={{fontSize:'1.05rem',padding:'13px 32px'}}>View Pricing</Link>
          </div>
          <p style={{marginTop:'1.5rem',fontSize:'0.8rem',color:'rgba(255,255,255,0.3)'}}>
            By submitting a contact request, you agree to be contacted by our sales team indefinitely.
            Pricing subject to change. Implementation not included. Breathing not included.
          </p>
        </div>
      </section>

      <pre className="html-comment container mt-4" style={{fontSize:'0.72rem'}}>{`<!-- TODO: replace hero image with actual product screenshot. Also ask legal about the Umbrella Corporation partnership announcement. - jared@terriblesoft.com -->`}</pre>
    </div>
  )
}
