import Link from 'next/link'

const tiers = [
  {
    name: 'TerribleSoft Essentials',
    price: 'Contact Sales',
    tagline: 'For organizations beginning their TerribleSoft journey.',
    features: [
      { label: 'ClusterFox Express™ (2 nodes)', val: '✓ Included*' },
      { label: 'PayRollPro™', val: '✓ Included*' },
      { label: 'HRForce™', val: '✓ Included*' },
      { label: 'MedChartCloud™', val: 'Available with upgrade' },
      { label: 'SupplyChainSuite™', val: 'Available with upgrade' },
      { label: 'FocusFox™', val: 'Available with upgrade' },
      { label: 'TerribleSoft Insights™', val: 'Available with upgrade' },
      { label: 'TerribleSoft Connect™', val: 'Not included' },
      { label: 'FoxCare™ Support', val: 'Coming Soon (Q3 2004)' },
      { label: 'Implementation Services', val: 'Required ($47,000 min.)' },
      { label: 'Linux Support', val: 'Coming Soon (Q3 2004)' },
      { label: 'Solaris Support', val: '✓ Included*' },
    ]
  },
  {
    name: 'TerribleSoft Professional',
    price: 'Contact Sales',
    tagline: 'For serious enterprise operations.',
    featured: true,
    features: [
      { label: 'ClusterFox Professional™ (4 nodes)', val: '✓ Included*' },
      { label: 'PayRollPro™', val: '✓ Included*' },
      { label: 'HRForce™', val: '✓ Included*' },
      { label: 'MedChartCloud™', val: '✓ Included*' },
      { label: 'SupplyChainSuite™', val: '✓ Included*' },
      { label: 'FocusFox™', val: 'Available with upgrade' },
      { label: 'TerribleSoft Insights™', val: '✓ Included*' },
      { label: 'TerribleSoft Connect™', val: 'Required (sold separately)' },
      { label: 'FoxCare™ Support', val: 'Available with upgrade' },
      { label: 'Implementation Services', val: 'Required ($47,000 min.)' },
      { label: 'Linux Support', val: 'Coming Soon (Q3 2004)' },
      { label: 'Solaris Support', val: '✓ Included*' },
    ]
  },
  {
    name: 'TerribleSoft Enterprise',
    price: 'Contact Sales',
    tagline: 'For organizations that have exhausted all other options.',
    features: [
      { label: 'ClusterFox Enterprise™ (8 nodes)', val: '✓ Included*' },
      { label: 'PayRollPro™', val: '✓ Included*' },
      { label: 'HRForce™', val: '✓ Included*' },
      { label: 'MedChartCloud™', val: '✓ Included*' },
      { label: 'SupplyChainSuite™ (all 47 modules)', val: '✓ Included*' },
      { label: 'FocusFox™', val: '✓ Included*' },
      { label: 'TerribleSoft Insights™', val: '✓ Included*' },
      { label: 'TerribleSoft Connect™', val: 'Required (sold separately)' },
      { label: 'FoxCare™ Support', val: '✓ Included*' },
      { label: 'Implementation Services', val: 'Required ($47,000 min.)' },
      { label: 'Linux Support', val: 'Coming Soon (Q3 2004)' },
      { label: 'Solaris Support', val: '✓ Included*' },
    ]
  },
]

export default function PricingPage() {
  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <h1>Transparent Pricing</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',maxWidth:'500px',marginTop:'1rem'}}>
            All prices listed as “Contact Sales.” We believe in pricing transparency.
            Transparent in that the price exists. The value of the price is shared on request.
          </p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="row g-4">
            {tiers.map((tier, i) => (
              <div className="col-lg-4" key={i}>
                <div className={`pricing-card h-100${tier.featured ? ' featured' : ''}`}>
                  {tier.featured && <div className="pricing-badge">Most Contractually Obligated</div>}
                  <h4 style={{fontWeight:900,marginBottom:'0.25rem'}}>{tier.name}</h4>
                  <p style={{color:'#888',fontSize:'0.88rem',marginBottom:'1rem'}}>{tier.tagline}</p>
                  <div className="price mb-3">Contact<br/>Sales</div>
                  <div style={{marginBottom:'1.5rem'}}>
                    {tier.features.map((f, j) => (
                      <div className="pricing-feature" key={j}>
                        <span style={{fontSize:'0.85rem',color:f.val.startsWith('✓') ? '#333' : '#aaa'}}>
                          <span className={f.val.startsWith('✓') ? 'check-yes' : 'check-no'} style={{marginRight:'6px'}}>
                            {f.val.startsWith('✓') ? '✓' : '–'}
                          </span>
                          {f.label}
                        </span>
                        <div style={{fontSize:'0.75rem',color:'#999',paddingLeft:'18px'}}>{f.val}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-ts-primary" style={{width:'100%',textAlign:'center',display:'block'}}>Contact Sales for Pricing</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4" style={{background:'#f8f9fa',borderRadius:'12px',borderLeft:'4px solid var(--ts-orange)'}}>
            <h5 style={{fontWeight:700,marginBottom:'0.5rem'}}>Enterprise &amp; DataCenter•</h5>
            <p style={{fontSize:'0.9rem',color:'#555',marginBottom:'0.75rem'}}>For organizations requiring ClusterFox DataCenter™ or deployments exceeding 8 nodes, please contact our enterprise sales team. Bring legal.</p>
            <Link href="/contact" className="btn-ts-primary">Contact Enterprise Sales</Link>
          </div>

          <div style={{marginTop:'3rem',padding:'1.5rem',background:'#fffbf0',border:'1px solid #f0d080',borderRadius:'8px',fontSize:'0.8rem',color:'#5a4a00'}}>
            <strong>* Important Notes Regarding “✓ Included” Features:</strong><br/>
            *Requires Professional Implementation Services engagement ($47,000 minimum). TerribleSoft Connect™ required for inter-product functionality (sold separately, priced per product pair per server per year). HIPAA compliance module sold separately ($18,000/yr). FoxCare™ support contract required for support ticket submission. FoxBand™ hardware required for FocusFox™ corrective response features (minimum order 10 units at $340/unit). All features subject to platform compatibility (see individual product pages). Linux support not included. Implementation timeline is an estimate. TerribleSoft implementation estimates have a historical accuracy rate that is available upon request but is not disclosed in this document.<br/><br/>
            By using TerribleSoft you agree to our 847-page Terms of Service. Pricing subject to change. Implementation not included. Breathing not included.
          </div>
        </div>
      </section>
    </div>
  )
}
