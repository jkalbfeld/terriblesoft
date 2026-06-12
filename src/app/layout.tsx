import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TerribleSoft™ — Enterprise Solutions You Can Almost Use',
  description: 'TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#0d2b45',borderBottom:'1px solid rgba(74,158,218,0.2)'}}>
          <div className="container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                <rect x="10" y="10" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                <rect x="6" y="6" width="14" height="14" fill="#0d2b45" stroke="#4a9eda" strokeWidth="1.5"/>
              </svg>
              <span style={{fontWeight:700,letterSpacing:'-0.5px'}}>TerribleSoft<sup>™</sup></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto gap-1 align-items-lg-center">
                <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="/press">Press</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/careers">Careers</a></li>
                <li className="nav-item"><a className="nav-link" href="/investors" style={{color:'#f0a500',fontWeight:600}}>Investors</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
                <li className="nav-item ms-2"><a className="btn btn-outline-warning btn-sm" href="/contact">Contact Sales</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer style={{background:'#0d2b45',color:'rgba(255,255,255,0.7)'}} className="pt-5 pb-3 mt-5 border-top border-secondary">
          <div className="container">
            <div className="row g-4 mb-4">
              <div className="col-lg-3">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                    <rect x="10" y="10" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                    <rect x="6" y="6" width="14" height="14" fill="#0d2b45" stroke="#4a9eda" strokeWidth="1.5"/>
                  </svg>
                  <strong style={{color:'#fff'}}>TerribleSoft<sup>™</sup></strong>
                </div>
                <p style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.45)',lineHeight:1.6}}>Enterprise software for organizations that have run out of alternatives. © 2024 TerribleSoft, Inc. All rights reserved. All wrongs also reserved.</p>
              </div>
              <div className="col-lg-2">
                <h6 style={{color:'#fff',fontWeight:700,fontSize:'0.82rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'1rem'}}>Products</h6>
                <ul className="list-unstyled" style={{fontSize:'0.85rem'}}>
                  {['ClusterFox™','PayRollPro™','HRForce™','MedChartCloud™','SupplyChainSuite™','FocusFox™'].map(p=>(<li key={p} className="mb-1"><a href="/products" style={{color:'rgba(255,255,255,0.55)',textDecoration:'none'}}>{p}</a></li>))}
                  <li><a href="/products/foxtrepan" style={{color:'rgba(255,255,255,0.2)',textDecoration:'none',fontSize:'0.75rem'}}>FoxTrepan™</a></li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h6 style={{color:'#fff',fontWeight:700,fontSize:'0.82rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'1rem'}}>Company</h6>
                <ul className="list-unstyled" style={{fontSize:'0.85rem'}}>
                  {[['About','/about'],['Careers','/careers'],['Press','/press'],['Investors','/investors'],['Contact','/contact']].map(([label,href])=>(<li key={label} className="mb-1"><a href={href} style={{color:'rgba(255,255,255,0.55)',textDecoration:'none'}}>{label}</a></li>))}
                </ul>
              </div>
              <div className="col-lg-2">
                <h6 style={{color:'#fff',fontWeight:700,fontSize:'0.82rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'1rem'}}>Legal</h6>
                <ul className="list-unstyled" style={{fontSize:'0.85rem'}}>
                  {['Privacy Policy','Terms of Service','Cookie Policy','EULA (847 pages)','GDPR Addendum'].map(l=>(<li key={l} className="mb-1"><a href="#" style={{color:'rgba(255,255,255,0.55)',textDecoration:'none'}}>{l}</a></li>))}
                </ul>
              </div>
              <div className="col-lg-3">
                <h6 style={{color:'#fff',fontWeight:700,fontSize:'0.82rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'1rem'}}>Stay Informed</h6>
                <p style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.45)',marginBottom:'0.75rem'}}>Product updates and unsolicited announcements.</p>
                <a href="/#subscribe" className="btn btn-outline-secondary btn-sm" style={{fontSize:'0.8rem'}}>Subscribe →</a>
              </div>
            </div>
            <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:'1rem',fontSize:'0.72rem',color:'rgba(255,255,255,0.3)',textAlign:'center'}}>
              TerribleSoft™ is a registered trademark. FoxHA™, FoxWatch™, FoxOver™, FoxNet™, FoxMigrate™, FocusFox™, FoxBand™, GazeVec™, FoxTrepan™, and PayRollPro™ are trademarks. Past performance is not indicative of future results. Stock chart may cause distress.
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
