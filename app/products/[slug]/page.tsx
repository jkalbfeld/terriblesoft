import Link from 'next/link'

const productData: Record<string, {
  name: string, tagline: string, icon: string, desc: string,
  features: string[], requirements: string, note?: string
}> = {
  payrollpro: {
    name: 'PayRollPro™',
    tagline: 'Payroll software so comprehensive, your accountant will need a support contract too.',
    icon: '💰',
    desc: 'PayRollPro™ is TerribleSoft’s enterprise payroll processing platform, delivering comprehensive multi-jurisdiction tax calculation, direct deposit facilitation, and year-end reporting across all supported payroll configurations.',
    features: [
      'Multi-jurisdiction tax calculation (accuracy not guaranteed)',
      'Direct deposit processing: 1–7 business days',
      'W-2 and 1099 generation (manual review strongly recommended)',
      'Compliance with all applicable tax laws as of Q2 2003',
      'Payroll journal and audit trail',
      'Legacy COBOL calculation engine (maintained since 1994)',
      'Export to Lotus 1-2-3 format',
      'Integration with HRForce™ via TerribleSoft Connect™ (required)',
    ],
    requirements: 'Windows 98 or Solaris 2.1. 32 MB RAM. 200 MB disk space. Internet Explorer 5.5 or Netscape Navigator 4.7 for web interface.',
    note: 'PayRollPro™ is not responsible for payroll discrepancies resulting from jurisdictional tax law changes after Q2 2003. TerribleSoft offers a TaxPatch™ service for an additional annual fee.',
  },
  hrforce: {
    name: 'HRForce™',
    tagline: 'Human Resources management. Emphasis on “force.”',
    icon: '🤝',
    desc: 'HRForce™ provides comprehensive human resources management capabilities, from initial onboarding through offboarding, with every step thoroughly documented, screen-counted, and workflow-enforced.',
    features: [
      'Employee onboarding workflow (average 14 screens)',
      'Configurable performance review rating scale (1 to 1)',
      'Org chart builder with hierarchical depth limit of 8',
      'Benefits enrollment portal (annual open enrollment only)',
      'Termination workflow (reviewed by legal team at least once)',
      'Time and attendance tracking (±15 minutes accuracy)',
      'Employee self-service portal (read-only)',
      'Integration with PayRollPro™ via TerribleSoft Connect™ (required, sold separately)',
    ],
    requirements: 'Windows 2000 or Solaris 7. 64 MB RAM. 500 MB disk. Internet Explorer 6.0 required for full functionality.',
    note: 'The termination workflow in HRForce™ has been reviewed by a legal professional. TerribleSoft does not warrant that this review reflects your jurisdiction’s current employment law. Form TS-391 (Employee Acknowledgment of Termination) must be signed prior to workflow completion.',
  },
  medchartcloud: {
    name: 'MedChartCloud™',
    tagline: 'HIPAA-compliant* patient record management for the modern healthcare organization.',
    icon: '🏥',
    desc: 'MedChartCloud™ delivers enterprise-grade electronic health record management, billing integration, and appointment scheduling in a fully cloud-hosted environment certified on the browsers your clinical staff already use.',
    features: [
      'Patient record management and EHR storage',
      'Appointment scheduling (double-booking enabled by default)',
      'Billing integration with major payers',
      'HIPAA compliance module available (sold separately: $18,000/yr)',
      'Certified on Internet Explorer 6, Netscape Navigator 7',
      'Patient portal (login functionality in beta since 2011)',
      'ICD-9 code support (ICD-10 migration: Q2 2006 roadmap)',
      'HL7 v2.1 interface engine',
    ],
    requirements: 'Internet Explorer 6.0 required. Windows XP or Solaris 7. 128 MB RAM. Clinical workstations must not have popup blockers enabled.',
    note: '*HIPAA compliance module sold separately ($18,000/year). MedChartCloud™ itself has not been independently audited for HIPAA compliance. The word “cloud” refers to TerribleSoft’s managed hosting environment in Schaumburg, IL.',
  },
  supplychainsuite: {
    name: 'SupplyChainSuite™',
    tagline: '47 modules. You need all 47. No, you cannot buy fewer.',
    icon: '📦',
    desc: 'SupplyChainSuite™ provides end-to-end supply chain visibility, vendor management, and logistics optimization across all 47 integrated modules. All modules are required. Module dependencies are documented in Schedule 7 of the license agreement.',
    features: [
      'Inventory tracking and management (±15% accuracy)',
      'Vendor management and procurement',
      'Logistics optimization (we move the boxes to where the boxes need to be)',
      'Demand forecasting module (Gartner† once described it as “a system”)',
      'Warehouse management integration',
      'EDI 850/856/810 support',
      'All 47 modules included (and required)',
      'FoxFlow™ workflow engine (module 34 of 47)',
    ],
    requirements: 'Solaris 7 or Windows NT 4.0 SP6. 256 MB RAM. 10 GB disk. Oracle 8i database required (not included). Sun SparcServer 1000 or equivalent recommended for full 47-module deployment.',
    note: '† Gartner analyst quote from internal email, not a published report. Full context not available.',
  },
  insights: {
    name: 'TerribleSoft Insights™',
    tagline: 'Business intelligence that confirms what you already feared.',
    icon: '📊',
    desc: 'TerribleSoft Insights™ delivers powerful business intelligence dashboards, reporting, and AI-powered analytics to give your leadership team the data-driven confidence to make the decisions they were going to make anyway.',
    features: [
      'Executive dashboard and reporting suite',
      'AI-Powered Analytics™ engine (linear regression, 1997 edition)',
      'Drill-down reporting (up to 2 levels)',
      'CSV export with randomized column order (for security)',
      'Scheduled report delivery via email or fax',
      'Integration with all TerribleSoft products via Connect™',
      'KPI tracking (KPIs defined by customer, not verified by TerribleSoft)',
      'Mobile-responsive design (IE6 on Windows Mobile)',
    ],
    requirements: 'Windows XP or Solaris 7. 128 MB RAM. Internet Explorer 6.0. Microsoft Excel 97 recommended for CSV import.',
    note: 'AI-Powered Analytics™ is a registered trademark. The underlying technology is a linear regression model implemented in 1997. TerribleSoft is evaluating neural network capabilities for a future release.',
  },
  focusfox: {
    name: 'FocusFox™',
    tagline: 'Employee engagement enforcement for the modern distributed workforce.',
    icon: '👀',
    desc: 'FocusFox™ uses proprietary GazeVec™ eye-tracking technology to ensure your distributed workforce remains fully present during all scheduled collaboration events, with configurable corrective response escalation via the FoxBand™ wearable compliance device.',
    features: [
      'GazeVec™ eye-tracking (±40° accuracy, calibration every 15 minutes)',
      'Zoom, Teams, and WebEx integration',
      'Google Meet: Q3 2004 roadmap',
      'FoxBand™ wearable compliance device ($340/unit, min. order 10)',
      'Level 1–4 corrective response escalation (IT-configurable)',
      'Real-time attention heatmap dashboard',
      '“Voluntary” enrollment workflow (“employees are informed”)',
      'HR audit trail for documentation and litigation preparation',
    ],
    requirements: 'Windows 10 or macOS 12+. Webcam required. FoxBand™ devices required for Level 2+ corrective response. Employees must be informed of enrollment per Form TS-847.',
    note: 'TerribleSoft is not responsible for medical, legal, or employment outcomes resulting from FocusFox™ deployment. FoxBand™ is classified as a “wellness device” for regulatory purposes. Level 3 corrective response and above require signed employee acknowledgment forms. Level 4 is not available in California, the EU, or countries with functioning labor law. FoxBand™ battery life: 6 hours (sufficient for most mandatory all-hands meetings).',
  },
  connect: {
    name: 'TerribleSoft Connect™',
    tagline: 'Integration middleware for connecting TerribleSoft products to each other.',
    icon: '🔌',
    desc: 'TerribleSoft Connect™ is required for using more than one TerribleSoft product simultaneously. It provides the integration middleware layer that enables product-to-product communication across the TerribleSoft enterprise suite.',
    features: [
      'Enables inter-product communication',
      'Required for any multi-product deployment',
      'Message queue with FoxQueue™ technology',
      'Supports all TerribleSoft products (as of their respective release dates)',
      'API documentation available under NDA',
      'FoxBus™ enterprise service bus (v1.2)',
      'XML-based data interchange (DTD available on request)',
      'Priced per product pair',
    ],
    requirements: 'Must be installed before any other TerribleSoft products. Solaris 7 or Windows NT 4.0. 128 MB RAM. Oracle 8i or SQL Server 7.0 required for message persistence.',
    note: 'TerribleSoft Connect™ must be purchased separately for each pair of products you wish to connect. A three-product deployment requires three Connect™ licenses. Pricing is per-product-pair per server per year.',
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug]

  if (!product) {
    return (
      <div className="container" style={{padding:'80px 0',textAlign:'center'}}>
        <h1>Product Not Found</h1>
        <p style={{color:'#888'}}>This product may have been discontinued, renamed, or moved to the Q3 2004 roadmap.</p>
        <Link href="/products" className="btn-ts-primary">View All Products</Link>
      </div>
    )
  }

  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div style={{fontSize:'3rem',marginBottom:'0.75rem'}}>{product.icon}</div>
              <h1>{product.name}</h1>
              <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',fontStyle:'italic',maxWidth:'560px',marginTop:'0.5rem'}}>{product.tagline}</p>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <Link href="/contact" className="btn-ts-primary">Contact Sales</Link>
                <Link href="/pricing" className="btn-ts-outline">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2 style={{fontWeight:800,color:'var(--ts-navy)',marginBottom:'1rem'}}>Overview</h2>
              <p style={{fontSize:'1rem',color:'#444',lineHeight:'1.8'}}>{product.desc}</p>

              <h3 style={{fontWeight:800,color:'var(--ts-navy)',marginTop:'2rem',marginBottom:'1rem',fontSize:'1.4rem'}}>Key Features</h3>
              <ul style={{paddingLeft:'1.5rem',lineHeight:'2',color:'#444',fontSize:'0.95rem'}}>
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>

              {product.note && (
                <div className="ai-artifact mt-4">
                  <strong>Important Note:</strong> {product.note}
                </div>
              )}
            </div>
            <div className="col-lg-5">
              <div className="ts-card" style={{marginBottom:'1.5rem'}}>
                <h5>System Requirements</h5>
                <p style={{fontSize:'0.88rem',color:'#555',lineHeight:'1.7'}}>{product.requirements}</p>
              </div>

              <div className="screenshot-coming">
                <div style={{fontSize:'2rem',marginBottom:'1rem'}}>📸</div>
                <p style={{color:'#888',marginBottom:'1rem',fontSize:'0.9rem'}}>Product screenshot coming soon</p>
                <div className="progress" style={{width:'100%',height:'8px'}}>
                  <div className="progress-bar" role="progressbar" style={{width:'73%',background:'var(--ts-accent)'}}></div>
                </div>
                <p style={{fontSize:'0.72rem',color:'#bbb',marginTop:'0.5rem'}}>73% complete</p>
              </div>

              <div className="ts-card mt-3" style={{background:'var(--ts-light)'}}>
                <h6 style={{fontWeight:700,color:'var(--ts-navy)'}}>Requires TerribleSoft Connect™</h6>
                <p style={{fontSize:'0.82rem',color:'#666',margin:0}}>This product requires TerribleSoft Connect™ middleware to integrate with other TerribleSoft products. Sold separately. Priced per product pair.</p>
              </div>
            </div>
          </div>

          {/* Testimonials specific to this product */}
          <div className="mt-5 pt-4" style={{borderTop:'1px solid #eee'}}>
            <h3 style={{fontWeight:800,marginBottom:'1.5rem'}}>Customer Perspectives</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="ts-testimonial">
                  <p>&ldquo;{product.name} has transformed our operations in ways that are difficult to describe, and in some cases, difficult to reverse.&rdquo;</p>
                  <div className="attribution">Enterprise Customer, name withheld</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ai-artifact">
                  I cannot generate a realistic testimonial for this product as I do not have personal experiences. Please replace this placeholder with a real customer quote. — [PLACEHOLDER]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { slug: 'payrollpro' }, { slug: 'hrforce' }, { slug: 'medchartcloud' },
    { slug: 'supplychainsuite' }, { slug: 'insights' }, { slug: 'focusfox' }, { slug: 'connect' }
  ]
}
