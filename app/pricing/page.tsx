const tiers = [
  {
    name: 'TerribleSoft Essential™',
    tier: 'Essential',
    price: 'Contact Sales',
    note: 'For organizations beginning their TerribleSoft journey.',
    featured: false,
    features: [
      { label: 'ClusterFox Express™ (2 nodes)', val: '✓ Included*' },
      { label: 'PayRollPro™', val: '✓ Included*' },
      { label: 'HRForce™', val: 'Available with upgrade' },
      { label: 'MedChartCloud™', val: 'Available with upgrade' },
      { label: 'SupplyChainSuite™', val: 'Not available' },
      { label: 'TerribleSoft Insights™', val: 'Available with upgrade' },
      { label: 'FocusFox™', val: 'Coming Soon (Q3 2004)' },
      { label: 'TerribleSoft Connect™', val: 'Sold separately' },
      { label: 'FoxCare™ Support', val: 'Email only (3–5 business weeks)' },
      { label: 'Implementation Services', val: '✓ Included*' },
      { label: 'Training', val: 'Coming Soon (Q3 2004)' },
      { label: 'SLA', val: 'Best effort' },
    ]
  },
  {
    name: 'TerribleSoft Professional™',
    tier: 'Professional',
    price: 'Contact Sales',
    note: 'For organizations that have graduated from Essential.',
    featured: true,
    features: [
      { label: 'ClusterFox Professional™ (4 nodes)', val: '✓ Included*' },
      { label: 'PayRollPro™', val: '✓ Included*' },
      { label: 'HRForce™', val: '✓ Included*' },
      { label: 'MedChartCloud™', val: '✓ Included*' },
      { label: 'SupplyChainSuite™', val: 'Available with upgrade' },
      { label: 'TerribleSoft Insights™', val: '✓ Included*' },
      { label: 'FocusFox™', val: '✓ Included* (Levels 1–2 only)' },
      { label: 'TerribleSoft Connect™', val: 'Sold separately' },
      { label: 'FoxCare™ Support', val: 'Phone + email (response: 2–3 business weeks)' },
      { label: 'Implementation Services', val: '✓ Included*' },
      { label: 'Training', val: '✓ Included* (1 session)' },
      { label: 'SLA', val: '99.0% (measured quarterly)' },
    ]
  },
  {
    name: 'TerribleSoft Enterprise™',
    tier: 'Enterprise',
    price: 'Contact Sales',
    note: 'For organizations that have accepted their situation.',
    featured: false,
    features: [
      { label: 'ClusterFox Enterprise™ (8+ nodes)', val: '✓ Included*' },
      { label: 'PayRollPro™', val: '✓ Included*' },
      { label: 'HRForce™', val: '✓ Included*' },
      { label: 'MedChartCloud™', val: '✓ Included*' },
      { label: 'SupplyChainSuite™ (all 47 modules)', val: '✓ Included*' },
      { label: 'TerribleSoft Insights™', val: '✓ Included*' },
      { label: 'FocusFox™ (all levels incl. Level 4)', val: '✓ Included*' },
      { label: 'TerribleSoft Connect™', val: '✓ Included*' },
      { label: 'FoxCare™ Platinum', val: 'Dedicated account manager (on call 9–5 EST, M–F)' },
      { label: 'Implementation Services', val: '✓ Included*' },
      { label: 'Training', val: '✓ Included* (3 sessions/year)' },
      { label: 'SLA', val: '99.9% (see Appendix F)' },
    ]
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">Pricing</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'1rem'}}>Simple, Transparent Pricing</h1>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1.05rem',maxWidth:'540px'}}>All tiers priced on request. Contact Sales for pricing. Pricing is not published for competitive reasons and also because it depends on how our sales team assesses your situation.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {tiers.map(t => (
              <div key={t.name} className="col-lg-4">
                <div className={`ts-pricing-card h-100 ${t.featured ? 'featured' : ''}`} style={{position:'relative'}}>
                  {t.featured && (
                    <span style={{position:'absolute',top:'-14px',left:'50%',transform:'translateX(-50%)',background:'#e8632a',color:'#fff',fontSize:'0.65rem',fontWeight:700,letterSpacing:'1px',textTransform:'uppercase',padding:'0.25rem 1rem',borderRadius:'20px',whiteSpace:'nowrap'}}>Most Chosen By Default</span>
                  )}
                  <div className="tier-name">{t.tier}</div>
                  <div className="price">{t.price}</div>
                  <div className="price-note">{t.note}</div>
                  <ul className="list-unstyled" style={{fontSize:'0.82rem'}}>
                    {t.features.map(f => (
                      <li key={f.label} style={{padding:'0.4rem 0',borderBottom:'1px solid #f0f0f0',display:'flex',justifyContent:'space-between',gap:'1rem'}}>
                        <span style={{color:'#374151'}}>{f.label}</span>
                        <span style={{color: f.val.startsWith('✓') ? '#15803d' : f.val.includes('2004') || f.val.includes('upgrade') ? '#b45309' : '#6b7280',fontWeight:600,textAlign:'right',flexShrink:0}}>{f.val}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="ts-cta-primary w-100 mt-3" style={{textAlign:'center',display:'block'}}>Contact Sales</a>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 offset-lg-2">
              <div style={{background:'#fffbeb',border:'1px solid #fde68a',borderRadius:'8px',padding:'1.5rem'}}>
                <h5 style={{fontWeight:700,color:'#92400e',marginBottom:'1rem'}}>Important Pricing Notes</h5>
                <ul style={{fontSize:'0.82rem',color:'#78350f',lineHeight:1.9}}>
                  <li>*“Included” means included in the base licensing fee. Implementation, configuration, training, data migration, and ongoing support are not included and are available via separate Professional Services engagements ($47,000 minimum).</li>
                  <li>By initiating contact with Sales, you agree to our 847-page Terms of Service and consent to follow-up communications from your assigned account executive.</li>
                  <li>Pricing subject to change. Current pricing valid until our next contract renewal cycle.</li>
                  <li>Implementation not included. Breathing not included.</li>
                  <li>TerribleSoft Connect™ is required for using more than one product simultaneously and is priced separately across all tiers.</li>
                  <li>Level 4 FocusFox™ corrective response available to Enterprise tier. Description on request. Not available in California, the EU, or countries with functioning labor law.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
