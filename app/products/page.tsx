import Link from 'next/link'
import ClusterFoxLogo from '@/components/ClusterFoxLogo'

const products = [
  {
    slug: 'clusterfox',
    name: 'ClusterFox™',
    tagline: 'Enterprise cluster management for when everything’s gone to fox.',
    icon: null,
    flagship: true,
    features: [
      'FoxHA™ active/active/also-active failover',
      'FoxWatch™ outage detection (4–6 business hours)',
      'Solaris 2.1 primary platform',
      'Linux support: Q3 2004 roadmap',
    ],
  },
  {
    slug: 'payrollpro',
    name: 'PayRollPro™',
    tagline: 'Payroll software so comprehensive, your accountant will need a support contract too.',
    icon: '💰',
    features: [
      'Multi-jurisdiction tax calculation (accuracy not guaranteed)',
      'Direct deposit: 1–7 business days',
      'Compliance with all tax laws as of Q2 2003',
      'W-2 generation (manual review recommended)',
    ],
  },
  {
    slug: 'hrforce',
    name: 'HRForce™',
    tagline: 'Human Resources management. Emphasis on “force.”',
    icon: '🤝',
    features: [
      'Employee onboarding (avg 14 screens)',
      'Performance reviews (1-to-1 rating scale)',
      'Org chart builder',
      'Termination workflow (reviewed by legal at least once)',
    ],
  },
  {
    slug: 'medchartcloud',
    name: 'MedChartCloud™',
    tagline: 'HIPAA-compliant* patient record management. (*compliance module sold separately)',
    icon: '🏥',
    features: [
      'Patient record management',
      'Double-booking by design',
      'Certified on IE6 and Netscape Navigator 7',
      'Billing integration',
    ],
  },
  {
    slug: 'supplychainsuite',
    name: 'SupplyChainSuite™',
    tagline: '47 modules. You need all 47. No, you cannot buy fewer.',
    icon: '📦',
    features: [
      'Inventory tracking (±15%)',
      'Vendor management',
      'Demand forecasting (Gartner† once called it “a system”)',
      'All 47 modules mandatory',
    ],
  },
  {
    slug: 'insights',
    name: 'TerribleSoft Insights™',
    tagline: 'Business intelligence that confirms what you already feared.',
    icon: '📊',
    features: [
      'Dashboard and reporting',
      'AI-Powered Analytics™ (linear regression, 1997)',
      'CSV export with randomized column order',
      'Confirms what you already knew',
    ],
  },
  {
    slug: 'focusfox',
    name: 'FocusFox™',
    tagline: 'Employee engagement enforcement for the modern distributed workforce.',
    icon: '👀',
    features: [
      'GazeVec™ eye-tracking (±40° accuracy)',
      'FoxBand™ wearable compliance device',
      'Level 3 haptic feedback (details on request)',
      'Not available in California or the EU',
    ],
  },
  {
    slug: 'connect',
    name: 'TerribleSoft Connect™',
    tagline: 'Required for using more than one TerribleSoft product simultaneously.',
    icon: '🔌',
    features: [
      'Integration middleware',
      'Required for inter-product communication',
      'Sold separately',
      'Priced separately',
    ],
  },
]

export default function ProductsPage() {
  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <div className="visible-title-tag">&lt;title&gt;Products | TerribleSoft™ Enterprise Software Solutions&lt;/title&gt;</div>
          <h1>The Complete Enterprise Suite</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',maxWidth:'560px',marginTop:'1rem'}}>
            Seven products. Eight if you count TerribleSoft Connect™, which you have to.
            Each one addressing a different part of your business that was previously merely inconvenient.
          </p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="row g-4">
            {/* ClusterFox — double width */}
            <div className="col-12">
              <div className="ts-card" style={{borderColor:'#e05c1a',borderWidth:'2px',background:'linear-gradient(135deg,#fff 0%,#fff8f4 100%)'}}>
                <div className="row align-items-center g-4">
                  <div className="col-md-2 text-center">
                    <ClusterFoxLogo size={100} />
                  </div>
                  <div className="col-md-7">
                    <div className="ts-hero-badge" style={{background:'rgba(224,92,26,0.1)',borderColor:'rgba(224,92,26,0.3)',color:'#e05c1a',marginBottom:'0.5rem'}}>🦊 FLAGSHIP PRODUCT</div>
                    <h4 style={{fontWeight:900,color:'var(--ts-navy)'}}>ClusterFox™</h4>
                    <p style={{color:'#666',fontStyle:'italic',marginBottom:'0.75rem'}}>{products[0].tagline}</p>
                    <ul style={{columns:2,paddingLeft:'1.2rem',fontSize:'0.88rem',color:'#444'}}>
                      {products[0].features.map((f,i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="col-md-3 text-center">
                    <Link href="/products/clusterfox" className="btn-ts-primary" style={{width:'100%',textAlign:'center',marginBottom:'0.5rem',display:'block'}}>View ClusterFox™</Link>
                    <Link href="/contact" className="btn btn-outline-secondary btn-sm w-100">Request Demo</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining products */}
            {products.slice(1).map((p, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="ts-card">
                  <div className="ts-card-icon">{p.icon}</div>
                  <h5>{p.name}</h5>
                  <p style={{fontStyle:'italic',color:'#666',fontSize:'0.88rem',marginBottom:'0.75rem'}}>{p.tagline}</p>
                  <ul style={{paddingLeft:'1.2rem',fontSize:'0.85rem',color:'#555',marginBottom:'1rem'}}>
                    {p.features.map((f, j) => <li key={j} style={{marginBottom:'0.2rem'}}>{f}</li>)}
                  </ul>
                  <Link href={`/products/${p.slug}`} className="btn btn-outline-secondary btn-sm">Learn More</Link>
                </div>
              </div>
            ))}
          </div>

          {/* AI ARTIFACT */}
          <div className="ai-artifact mt-5">
            <ul style={{margin:0,paddingLeft:'1.5rem'}}>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              <li>TODO: finish this section — @marketing please review before launch</li>
            </ul>
          </div>

          {/* FoxTrepan Easter Egg */}
          <div style={{marginTop:'6rem',paddingTop:'3rem',borderTop:'1px solid #f0f0f0'}}>
            <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'center'}}>
              <div style={{display:'inline-block',background:'#f8f0ff',border:'1px solid #d0a0e0',borderRadius:'12px',padding:'2.5rem 2rem'}}>
                <div style={{fontSize:'0.72rem',color:'#9a6ab0',textTransform:'uppercase',letterSpacing:'0.8px',fontWeight:700,marginBottom:'0.75rem'}}>TerribleSoft Consumer Division</div>
                <h4 style={{fontWeight:900,color:'#2d1a3d',marginBottom:'0.5rem'}}>FoxTrepan™</h4>
                <p style={{fontStyle:'italic',color:'#7a5a8a',fontSize:'0.9rem',marginBottom:'1rem'}}>Take your wellness into your own hands.</p>
                <p style={{fontSize:'0.88rem',color:'#555',marginBottom:'0.75rem'}}>
                  User-installable firmware for home-based auto-trepanation devices.
                  Precision depth control (±3mm). Bluetooth-enabled. Alexa integration.
                </p>
                <ul style={{textAlign:'left',fontSize:'0.85rem',color:'#666',paddingLeft:'1.5rem',marginBottom:'1rem'}}>
                  <li>Precision depth control (±3mm)</li>
                  <li>Bluetooth-enabled. Alexa integration. App sold separately.</li>
                  <li>Sterilization wizard included in firmware v4.1+</li>
                  <li>Compatible with most consumer-grade rotary tools</li>
                </ul>
                <div style={{background:'#fff',borderRadius:'8px',padding:'1rem',marginBottom:'1rem',borderLeft:'3px solid #9a6ab0'}}>
                  <p style={{fontStyle:'italic',fontSize:'0.88rem',color:'#444',margin:'0 0 0.5rem'}}>&ldquo;I don’t know what came over me, but I feel different now.&rdquo;</p>
                  <div style={{fontSize:'0.78rem',color:'#888'}}>K. Freeman, Raccoon City, MI</div>
                </div>
                <div style={{fontSize:'0.72rem',color:'#b07a9a',marginBottom:'1rem'}}>FDA Clearance Status: <strong>Pending (Since 2017)</strong></div>
                <Link href="/contact" className="btn btn-sm" style={{background:'#9a6ab0',color:'#fff',borderRadius:'20px',padding:'6px 20px',fontSize:'0.82rem'}}>Learn More</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <p className="visible-meta container">
        TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]
      </p>
    </div>
  )
}
