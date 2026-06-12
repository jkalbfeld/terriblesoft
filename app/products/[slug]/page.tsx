const products: Record<string, {
  name: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  finePrint: string;
  requirements: string;
  screenshotData?: { headers: string[]; rows: (string | {text:string;cls:string})[][] };
}> = {
  payrollpro: {
    name: 'PayRollPro™',
    icon: '💰',
    tagline: 'Payroll software so comprehensive, your accountant will need a support contract too.',
    description: 'PayRollPro™ is TerribleSoft’s flagship payroll management solution, purpose-built for organizations that require multi-jurisdictional payroll processing with the confidence that comes from a platform that has been in continuous development since 1997. Your employees will be paid. The timing is flexible.',
    features: [
      'Multi-jurisdiction tax calculation (accuracy not guaranteed)',
      'Direct deposit (1–7 business days, subject to bank processing)',
      'W-2 generation (manual review strongly recommended)',
      'Compliance with all tax laws as of Q2 2003',
      'Garnishment processing (manual configuration per jurisdiction)',
      'Benefits deduction module (47 deduction types, 12 supported)',
      'Year-end reporting package (additional licensing required)',
      'Integration with HRForce™ via TerribleSoft Connect™ (sold separately)',
    ],
    finePrint: 'Tax law compliance as of Q2 2003. Local jurisdiction updates available via Professional Services engagement ($47,000 minimum). Net pay calculation accuracy varies by jurisdiction. TerribleSoft is not responsible for IRS penalties arising from PayRollPro™ outputs. Results should be reviewed by a qualified accountant before submission.',
    requirements: 'Windows 98 or Solaris 2.1. 32MB RAM minimum. 256MB recommended for organizations with more than 3 employees. ODBC-compliant database required (not included). Internet Explorer 5.5 or Netscape Navigator 4.7 for web module.',
    screenshotData: {
      headers: ['Employee', 'Pay Period', 'Gross Pay', 'Deductions', 'Net Pay', 'Status'],
      rows: [
        ['J. Anderson', 'Q2 2024', '$4,200.00', '$847.00', '$3,353.00', '✓ Processed'],
        ['M. Thompson', 'Q2 2024', '$3,800.00', '$710.00', '$3,090.00', '⏳ Pending (since Q2)'],
        ['R. Davis', 'Q1 2024', '$5,100.00', '$5,947.00', {text:'-$847.00', cls:'status-foxed'}, {text:'ERROR', cls:'status-foxed'}],
        ['S. Wilson', 'Q3 2023', '$4,400.00', '$820.00', '$3,580.00', {text:'Pending (since Q3)', cls:'status-unknown'}],
        ['K. Martinez', 'Q2 2024', '$3,600.00', '$675.00', '$2,925.00', '✓ Processed'],
      ]
    }
  },
  hrforce: {
    name: 'HRForce™',
    icon: '👤',
    tagline: 'Human Resources management. Emphasis on “force.”',
    description: 'HRForce™ provides comprehensive human capital management capabilities for organizations that understand that people are their most important asset and would like to document that understanding across 14 onboarding screens.',
    features: [
      'Employee onboarding workflow (average: 14 screens, 3 business days)',
      'Performance review module (configurable rating scales from 1 to 1)',
      'Org chart builder (manual refresh required after any personnel change)',
      'Termination workflow (reviewed by legal at least once)',
      'PTO tracking (accrual logic configurable by certified HRForce™ administrator)',
      'Employee self-service portal (IE6 recommended)',
      'Compliance reporting (federal; state compliance module sold separately)',
      'Integration with PayRollPro™ via TerribleSoft Connect™ (sold separately)',
    ],
    finePrint: 'TerribleSoft is not responsible for employment law outcomes resulting from HRForce™ configuration. Termination workflow has been reviewed by legal counsel. Legal counsel review does not constitute legal advice. Performance review module rating scale (1 to 1) is a known limitation under active development (Q2 2005 roadmap).',
    requirements: 'Windows 98 SE or later. Solaris 2.1 supported. 64MB RAM minimum. Microsoft Access 2000 or later for local database mode. LDAP directory integration available with HRForce™ Connect Module ($12,000/year).',
  },
  medchartcloud: {
    name: 'MedChartCloud™',
    icon: '🏥',
    tagline: 'HIPAA-compliant* patient record management for the modern healthcare enterprise.',
    description: 'MedChartCloud™ delivers comprehensive electronic health record management, billing integration, and clinical workflow tools to healthcare organizations that require a HIPAA-compliant* solution with a browser-based interface certified on the leading web platforms of the early 2000s.',
    features: [
      'Patient record management (structured and unstructured data)',
      'Billing and claims integration (manual clearinghouse submission)',
      'Appointment scheduling (double-booking by design — increases patient throughput)',
      'E-prescribing module (fax delivery; electronic DEA number required)',
      'Lab results integration (HL7 v2.3 supported)',
      'HIPAA audit logging (logs retained for 6 years or until disk fills, whichever comes first)',
      'Patient portal (IE6 and Netscape Navigator 7)',
      'ICD-10 billing codes (ICD-10-CM as of 2015 edition)',
    ],
    finePrint: '*HIPAA compliance module sold separately, $18,000/year. Base product provides the interface; compliance is a configurable add-on. MedChartCloud™ has crashed during 14 consecutive audits at one major health system. The interface is very blue. TerribleSoft recommends IE6 for optimal performance.',
    requirements: 'Windows 2000 or Windows XP. Solaris 7 supported with FoxSCSI™ bridge. 128MB RAM. SQL Server 2000 or Oracle 8i. Internet Explorer 6 recommended. Netscape Navigator 7 supported. Chrome, Firefox, Safari: not tested.',
  },
  supplychainsuite: {
    name: 'SupplyChainSuite™',
    icon: '📦',
    tagline: '47 modules. You need all 47. No, you cannot buy fewer.',
    description: 'SupplyChainSuite™ is TerribleSoft’s comprehensive supply chain management platform, encompassing every aspect of your logistics and procurement operations across 47 tightly integrated modules. The modules cannot be separated. This is by design. A Gartner† analyst once described the suite as “a system.”',
    features: [
      'Inventory tracking (±15% accuracy, configurable tolerance)',
      'Vendor management (approved vendor list, manual maintenance)',
      'Purchase order workflow (12-step approval chain, all 12 required)',
      'Logistics optimization (“we move the boxes to where the boxes need to be”)',
      'Demand forecasting module (statistical; results are directional)',
      'Warehouse management (barcode scanning via RS-232 terminal)',
      'EDI integration (X12 v3010 and X12 v3020)',
      'Executive dashboard (refreshes every 4 business hours)',
    ],
    finePrint: '† Gartner analyst quote sourced from an internal email we cannot share. All 47 modules are licensed as a bundle. Individual module pricing is not available. Demand forecasting accuracy not warranted. ±15% inventory accuracy is a system specification, not a defect.',
    requirements: 'Windows NT 4.0 Server or later. HP-UX 9 supported. 256MB RAM minimum (2GB recommended for all 47 modules active). Oracle 8i or SQL Server 7.0. 50GB disk space for module installation. VT220-compatible terminal required for warehouse module.',
  },
  insights: {
    name: 'TerribleSoft Insights™',
    icon: '📊',
    tagline: 'Business intelligence that confirms what you already feared.',
    description: 'TerribleSoft Insights™ delivers enterprise business intelligence capabilities to organizations ready to confront the data they have been avoiding. With AI-Powered Analytics™ (linear regression, 1997 edition) and a reporting engine that can generate a PDF in under 45 minutes, Insights™ transforms your data into conclusions you could have reached without software.',
    features: [
      'Interactive dashboard (IE6 optimized; other browsers: results may vary)',
      'Report builder (47 report templates; custom reports via Professional Services)',
      'AI-Powered Analytics™ (linear regression engine, 1997 algorithm)',
      'Data connectors: CSV, Excel 97, dBase III, and “other”',
      'CSV export (columns in random order, for security)',
      'Scheduled reports (email delivery; SMTP configuration required)',
      'KPI tracking (KPIs defined at implementation; changes require re-implementation)',
      'Executive summary module (auto-generates summaries; results should be reviewed)',
    ],
    finePrint: '“AI-Powered” refers to automated statistical processing using linear regression. Insights™ does not use machine learning, neural networks, or any technology developed after 1997. CSV column randomization is a documented security feature. Disabling it requires a FoxCare™ Enterprise support ticket.',
    requirements: 'Windows 98 or later. Solaris 2.1 supported. 128MB RAM. Internet Explorer 5.5 minimum for dashboard. Java Runtime Environment 1.3 required for report engine. Screen resolution 800x600 minimum.',
  },
  focusfox: {
    name: 'FocusFox™',
    icon: '👁️',
    tagline: 'Employee engagement enforcement for the modern distributed workforce.',
    description: 'FocusFox™ uses proprietary GazeVec™ eye-tracking technology integrated with your video conferencing platform to ensure meeting participants are fully engaged. When an attention deficit event is detected, FocusFox™ delivers a configurable corrective response via the FoxBand™ wearable compliance device. Meetings have never been more attended.',
    features: [
      'GazeVec™ eye-tracking (±40° accuracy; calibration every 15 minutes)',
      'Zoom, Teams, and WebEx integration (Google Meet: Q3 2004 roadmap)',
      'Real-time attention heatmap across all employees',
      'Four corrective response levels (Level 4 available to Enterprise tier; description on request)',
      '“Voluntary” enrollment workflow (“employees are informed”)',
      'HR audit trail for documentation and legal proceedings',
      'FoxBand™ wearable compliance device (sold separately, $340/unit, minimum order 10)',
      'FoxBand™ battery life: 6 hours (sufficient for most mandatory all-hands meetings)',
    ],
    finePrint: 'TerribleSoft is not responsible for medical, legal, or employment outcomes resulting from FocusFox™ deployment. FoxBand™ is classified as a “wellness device” for regulatory purposes. Level 3 and above require signed employee acknowledgment forms (form TS-847). Level 4 not available in California, the EU, or countries with functioning labor law.',
    requirements: 'Windows 10 or later. macOS 11+ supported (FoxBand™ pairing only; GazeVec™ requires Windows). Webcam required. Minimum 720p for GazeVec™ accuracy. FoxBand™ requires Bluetooth 4.0 and paired iOS 12+ or Android 8+ device for management app.',
  },
  connect: {
    name: 'TerribleSoft Connect™',
    icon: '🔗',
    tagline: 'Integration middleware for connecting TerribleSoft products to each other.',
    description: 'TerribleSoft Connect™ is the integration backbone required for using more than one TerribleSoft product simultaneously. Without Connect™, each product operates as a standalone island of data. With Connect™, those islands are joined by a bridge that requires its own licensing, its own server, and its own implementation engagement.',
    features: [
      'Bidirectional sync between any two TerribleSoft products (latency varies)',
      'Event-driven integration engine (polling interval: configurable, minimum 15 minutes)',
      'Error queue management (manual review required; errors do not self-resolve)',
      'Data transformation layer (47 transformation templates)',
      'API gateway for third-party integrations (REST and SOAP; GraphQL: “we are aware this exists”)',
      'Integration monitoring dashboard (FoxWatch™ alerts via pager)',
      'Rollback capability (manual; requires FoxCare™ Enterprise support)',
      'Documentation (PDF, 1,200 pages; last updated Q1 2009)',
    ],
    finePrint: 'TerribleSoft Connect™ is required for all multi-product deployments. Purchasing multiple TerribleSoft products without Connect™ results in products that do not exchange data. This is not a defect; it is an architecture decision.',
    requirements: 'Dedicated server required. Windows Server 2003 or HP-UX 11. 512MB RAM minimum. Oracle 9i or SQL Server 2000. Java Runtime Environment 1.4.',
  },
  foxtrepan: {
    name: 'FoxTrepan™',
    icon: '🩹',
    tagline: 'Take your wellness into your own hands.',
    description: 'FoxTrepan™ is TerribleSoft’s consumer wellness firmware solution, designed for individuals who are serious about taking a proactive, hands-on approach to personal health management. Compatible with most consumer-grade rotary tools, FoxTrepan™ brings the precision of enterprise software to personal wellness.',
    features: [
      'Precision depth control (±3mm)',
      'Bluetooth-enabled real-time telemetry',
      'Alexa integration (“Alexa, how deep is too deep”)',
      'Sterilization wizard included in firmware v4.1+',
      'Compatible with most consumer-grade rotary tools',
      'Emergency stop gesture recognition (accuracy: ±40°)',
      'Post-procedure wellness survey (optional)',
      'App sold separately ($4.99/month subscription)',
    ],
    finePrint: 'FDA clearance status: Pending (Since 2017). FoxTrepan™ is not a medical device. It is a wellness device. These are different categories. TerribleSoft is not responsible for medical outcomes. Consult a physician before use. Depth control accuracy of ±3mm meets or exceeds competing consumer auto-trepanation firmware platforms.',
    requirements: 'Consumer-grade rotary tool (variable speed, 10,000–35,000 RPM). Bluetooth 4.2 device for app connectivity. iOS 14+ or Android 9+. Steady hand. Good lighting. Someone nearby.',
  },
};

export async function generateStaticParams() {
  return Object.keys(products).map(slug => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products[slug];
  if (!p) return <div className="container section-pad"><h1>Product not found</h1><a href="/products">Back to Products</a></div>;

  return (
    <>
      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">TerribleSoft™ Product Suite</div>
          <div style={{fontSize:'2.5rem',marginBottom:'0.5rem'}}>{p.icon}</div>
          <h1 style={{fontWeight:800,fontSize:'2.5rem',color:'#fff',letterSpacing:'-1px',marginBottom:'0.75rem'}}>{p.name}</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.05rem',maxWidth:'580px',marginBottom:'2rem',lineHeight:1.6}}>{p.tagline}</p>
          <div className="d-flex flex-wrap gap-3">
            <a href="/contact" className="ts-cta-primary">Contact Sales</a>
            <a href="/contact" className="ts-cta-secondary">Request Demo</a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 style={{fontWeight:800,color:'#0d1b2a',marginBottom:'1rem',fontSize:'1.8rem'}}>Product Overview</h2>
              <p style={{color:'#4a5568',lineHeight:1.8,fontSize:'1rem',marginBottom:'2rem'}}>{p.description}</p>

              <h3 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'1rem',fontSize:'1.3rem'}}>Key Features</h3>
              <ul style={{lineHeight:2.1,color:'#4a5568'}}>
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>

              {p.screenshotData && (
                <div className="mt-4">
                  <h4 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'1rem'}}>Product Interface</h4>
                  <div className="screenshot-frame">
                    <div className="frame-bar">
                      <span className="dot" style={{background:'#ff5f57'}}></span>
                      <span className="dot" style={{background:'#febc2e'}}></span>
                      <span className="dot" style={{background:'#28c840'}}></span>
                      <span style={{color:'#666',fontSize:'0.7rem',marginLeft:'0.5rem'}}>{p.name} — [screenshot coming soon]</span>
                    </div>
                    <div className="frame-content">
                      <table className="table table-dark table-sm mb-0">
                        <thead>
                          <tr>{p.screenshotData.headers.map(h => <th key={h}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {p.screenshotData.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => {
                                if (typeof cell === 'string') return <td key={j}>{cell}</td>;
                                return <td key={j}><span className={cell.cls}>{cell.text}</span></td>;
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <div className="ts-card" style={{background:'#f8f9fa',border:'1px solid #e9ecef'}}>
                <h5 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'1rem'}}>Pricing</h5>
                <div style={{fontSize:'1.8rem',fontWeight:900,color:'#0d1b2a',marginBottom:'0.25rem'}}>Contact Sales</div>
                <p style={{fontSize:'0.82rem',color:'#666',marginBottom:'1.5rem'}}>Pricing available upon execution of mutual NDA. Implementation not included. Breathing not included.</p>
                <a href="/contact" className="ts-cta-primary w-100" style={{textAlign:'center',display:'block',marginBottom:'0.75rem'}}>Contact Sales</a>
                <a href="/contact" className="btn btn-outline-secondary w-100" style={{fontSize:'0.9rem'}}>Request Demo</a>
                <hr/>
                <h6 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'0.5rem',fontSize:'0.82rem'}}>System Requirements</h6>
                <p style={{fontSize:'0.78rem',color:'#666',lineHeight:1.7}}>{p.requirements}</p>
              </div>
              <div className="ts-card mt-3" style={{border:'1px solid #fde68a',background:'#fffbeb'}}>
                <h6 style={{fontWeight:700,color:'#92400e',fontSize:'0.82rem',marginBottom:'0.5rem'}}>⚠️ Important Notes</h6>
                <p style={{fontSize:'0.78rem',color:'#78350f',lineHeight:1.6}}>{p.finePrint}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
