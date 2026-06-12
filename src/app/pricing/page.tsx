export const metadata = { title: 'Pricing — TerribleSoft™' }

const features = [
  { name: 'ClusterFox Nodes', starter: '1 node', pro: '3 nodes', enterprise: 'Unlimited*' },
  { name: 'Simultaneous Primaries', starter: 'Up to 2', pro: 'Up to 4', enterprise: 'Unlimited*' },
  { name: 'FoxHA™ High Availability', starter: '✓ Included†', pro: '✓ Included†', enterprise: '✓ Included†' },
  { name: 'FoxWatch™ Monitoring', starter: 'Coming Soon (Q3 2004)', pro: '✓ Included†', enterprise: '✓ Included†' },
  { name: 'FoxMigrate™ Live Migration', starter: '—', pro: '✓ Included†', enterprise: '✓ Included†' },
  { name: 'FocusFox™ Seats', starter: '—', pro: '25 seats', enterprise: 'Unlimited (see note)' },
  { name: 'FocusFox™ Level 4', starter: '—', pro: '—', enterprise: 'Description on request' },
  { name: 'PayRollPro™', starter: 'Available with upgrade', pro: 'Available with upgrade', enterprise: '✓ Included†' },
  { name: 'MedChartCloud™ HIPAA Compliance', starter: 'Coming Soon (Q3 2004)', pro: 'Module sold separately ($18k/yr)', enterprise: 'Module sold separately ($18k/yr)' },
  { name: 'Support', starter: 'Email (72hr SLA)', pro: 'Phone (hold times vary)', enterprise: 'Dedicated rep (shared)' },
  { name: 'Implementation Services', starter: 'Not included ($47k min)', pro: 'Not included ($47k min)', enterprise: 'Not included (pricing on request)' },
  { name: 'SLA Uptime Guarantee', starter: 'Coming Soon (Q3 2004)', pro: 'Available with upgrade', enterprise: 'Negotiated separately' },
  { name: 'FoxTrepan™ Consumer Access', starter: '—', pro: '—', enterprise: '✓ (see your account exec)' },
  { name: 'Available in California', starter: '✓', pro: '✓', enterprise: 'Partial — see footnote ‡' },
]

export default function PricingPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0d2b45 0%,#1a3a5c 100%)',padding:'4rem 0 3rem',color:'#fff'}}>
        <div className="container">
          <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(74,158,218,0.8)',marginBottom:'0.75rem'}}>SIMPLE, TRANSPARENT PRICING™</p>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',letterSpacing:'-1px',marginBottom:'1rem'}}>Plans &amp; Pricing</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.05rem',maxWidth:'580px',lineHeight:1.7}}>All plans require an annual contract. Pricing shown is per-node, per-seat, per-cluster, or per-incident depending on interpretation.</p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section style={{padding:'4rem 0',background:'#f8fafc'}}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[
              {
                tier: 'Starter',
                price: '$8,400',
                period: '/yr',
                badge: null,
                highlight: false,
                bullets: [
                  '1 ClusterFox node',
                  'Up to 2 simultaneous primaries',
                  'Email support (72hr SLA*)',
                  'Access to documentation (v2, 2003)',
                  'FoxSync™: Eventual',
                  'Compliance: Q3 2004',
                ],
                cta: 'Contact Sales',
              },
              {
                tier: 'Professional',
                price: '$42,000',
                period: '/yr',
                badge: 'MOST POPULAR*',
                highlight: true,
                bullets: [
                  '3 ClusterFox nodes',
                  'Up to 4 simultaneous primaries',
                  'Phone support (hold times vary)',
                  'FocusFox™: 25 seats',
                  'FoxSync™: More Eventual',
                  'FoxGuard™: Standard Obscurity',
                  'FoxMigrate™: Under 4 hours',
                ],
                cta: 'Contact Sales',
              },
              {
                tier: 'Enterprise',
                price: 'Contact Sales',
                period: '',
                badge: null,
                highlight: false,
                bullets: [
                  'Unlimited nodes (see fair use policy)',
                  'Dedicated account executive (shared)',
                  'FocusFox™ Level 4 (description on request)',
                  'SLA: negotiated case-by-case',
                  'FoxTrepan™ access',
                  'Legal review included',
                  '‡ Not available in California (enterprise tier only)',
                ],
                cta: 'Bring Legal',
              },
            ].map(p => (
              <div key={p.tier} className="col-md-6 col-lg-4">
                <div style={{border: p.highlight ? '2px solid #4a9eda' : '1px solid #e2e8f0',borderRadius:'14px',padding:'2rem',background:'#fff',height:'100%',display:'flex',flexDirection:'column',position:'relative',boxShadow: p.highlight ? '0 8px 24px rgba(74,158,218,0.12)' : 'none'}}>
                  {p.badge && <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#4a9eda',color:'#fff',fontSize:'0.68rem',fontWeight:700,letterSpacing:'1px',padding:'4px 14px',borderRadius:'20px',whiteSpace:'nowrap'}}>{p.badge}</div>}
                  <h2 style={{fontWeight:800,color:'#0d2b45',marginBottom:'0.5rem'}}>{p.tier}</h2>
                  <div style={{marginBottom:'1.5rem'}}>
                    <span style={{fontSize:'2.4rem',fontWeight:900,color:'#0d2b45'}}>{p.price}</span>
                    <span style={{color:'#94a3b8',fontSize:'0.9rem'}}>{p.period}</span>
                  </div>
                  <ul style={{listStyle:'none',padding:0,margin:0,flex:1}}>
                    {p.bullets.map(b => (
                      <li key={b} style={{display:'flex',gap:'0.6rem',alignItems:'flex-start',marginBottom:'0.6rem',fontSize:'0.85rem',color:'#475569'}}>
                        <span style={{color:'#4a9eda',flexShrink:0,marginTop:'2px'}}>✓</span>{b}
                      </li>
                    ))}
                  </ul>
                  <button style={{marginTop:'1.5rem',width:'100%',padding:'0.75rem',background: p.highlight ? '#0d2b45' : 'transparent',border:`2px solid ${p.highlight ? '#0d2b45' : '#e2e8f0'}`,borderRadius:'8px',color: p.highlight ? '#fff' : '#0d2b45',fontWeight:700,fontSize:'0.9rem',cursor:'pointer'}}>{p.cta}</button>
                </div>
              </div>
            ))}
          </div>
          <p style={{textAlign:'center',fontSize:'0.72rem',color:'#94a3b8',marginTop:'1.5rem'}}>* "Most Popular" designation based on internal sales data that we have chosen not to publish. † Requires Professional Implementation Services ($47,000 minimum). ‡ FocusFox Level 4 not available in California, the EU, or countries with functioning labor law.</p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{padding:'3rem 0',background:'#fff'}}>
        <div className="container">
          <h2 style={{fontWeight:800,color:'#0d2b45',marginBottom:'0.5rem',textAlign:'center'}}>Full Feature Comparison</h2>
          <p style={{color:'#64748b',textAlign:'center',marginBottom:'2rem',fontSize:'0.9rem'}}>A comprehensive overview of what is and is not included at each tier.</p>
          <div style={{overflowX:'auto'}}>
            <table className="table" style={{fontSize:'0.84rem'}}>
              <thead>
                <tr style={{background:'#f8fafc'}}>
                  <th style={{color:'#0d2b45',fontWeight:700,width:'40%',padding:'0.9rem'}}>Feature</th>
                  <th style={{color:'#0d2b45',fontWeight:700,textAlign:'center',padding:'0.9rem'}}>Starter</th>
                  <th style={{color:'#4a9eda',fontWeight:700,textAlign:'center',padding:'0.9rem',background:'#f0f7ff'}}>Professional</th>
                  <th style={{color:'#0d2b45',fontWeight:700,textAlign:'center',padding:'0.9rem'}}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.name} style={{background: i % 2 === 0 ? '#fff' : '#f8fafc'}}>
                    <td style={{padding:'0.75rem 0.9rem',color:'#0d2b45',fontWeight:500}}>{f.name}</td>
                    <td style={{padding:'0.75rem 0.9rem',textAlign:'center',color: f.starter === '—' ? '#cbd5e1' : f.starter.startsWith('Coming') ? '#f59e0b' : '#475569'}}>{f.starter}</td>
                    <td style={{padding:'0.75rem 0.9rem',textAlign:'center',background:'#f0f7ff',color: f.pro === '—' ? '#cbd5e1' : f.pro.startsWith('Coming') ? '#f59e0b' : '#475569'}}>{f.pro}</td>
                    <td style={{padding:'0.75rem 0.9rem',textAlign:'center',color: f.enterprise === '—' ? '#cbd5e1' : '#475569'}}>{f.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{background:'#fffbeb',border:'1px solid #fde68a',borderRadius:'8px',padding:'1.25rem',marginTop:'1.5rem',fontSize:'0.8rem',color:'#92400e',lineHeight:1.7}}>
            By using TerribleSoft products, you agree to our Terms of Service (847 pages, available upon written request with 30-day processing time). Pricing subject to change without notice. Implementation not included at any tier. Breathing not included. Performance benchmarks available upon execution of mutual NDA. Past performance of ClusterFox does not predict future uptime. TerribleSoft is not responsible for cluster states described as "FOXED" in monitoring dashboards.
          </div>
        </div>
      </section>
    </main>
  )
}
