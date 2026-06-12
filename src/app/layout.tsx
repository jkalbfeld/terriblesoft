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
        <nav className="navbar navbar-expand-lg navbar-dark bg-navy border-bottom border-secondary">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                <rect x="10" y="10" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                <rect x="6" y="6" width="14" height="14" fill="#0d2b45" stroke="#4a9eda" strokeWidth="1.5"/>
              </svg>
              <span style={{fontWeight: 700, letterSpacing: '-0.5px'}}>TerribleSoft<sup>™</sup></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto gap-1">
                <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="/press">Press</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/careers">Careers</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
                <li className="nav-item ms-2"><a className="btn btn-outline-warning btn-sm" href="/contact">Contact Sales</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-navy text-light pt-5 pb-3 mt-5 border-top border-secondary">
          <div className="container">
            <div className="row g-4 mb-4">
              <div className="col-lg-3">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                    <rect x="10" y="10" width="14" height="14" fill="#1a3a5c" stroke="#4a9eda" strokeWidth="1.5"/>
                    <rect x="6" y="6" width="14" height="14" fill="#0d2b45" stroke="#4a9eda" strokeWidth="1.5"/>
                  </svg>
                  <strong>TerribleSoft<sup>™</sup></strong>
                </div>
                <p className="text-secondary small">Enterprise Solutions You Can Almost Use.</p>
                <p className="text-secondary small">Schaumburg, IL 60173<br/>Founded 1993</p>
              </div>
              <div className="col-lg-2">
                <h6 className="text-uppercase fw-bold small text-warning mb-3">Products</h6>
                <ul className="list-unstyled small">
                  <li><a href="/products/clusterfox" className="text-secondary text-decoration-none">ClusterFox™</a></li>
                  <li><a href="/products/payrollpro" className="text-secondary text-decoration-none">PayRollPro™</a></li>
                  <li><a href="/products/hrforce" className="text-secondary text-decoration-none">HRForce™</a></li>
                  <li><a href="/products/medchartcloud" className="text-secondary text-decoration-none">MedChartCloud™</a></li>
                  <li><a href="/products/supplychainsuite" className="text-secondary text-decoration-none">SupplyChainSuite™</a></li>
                  <li><a href="/products/insights" className="text-secondary text-decoration-none">Insights™</a></li>
                  <li><a href="/products/focusfox" className="text-secondary text-decoration-none">FocusFox™</a></li>
                  <li><a href="/products" className="text-secondary text-decoration-none"><small>Consumer ↓</small></a></li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h6 className="text-uppercase fw-bold small text-warning mb-3">Company</h6>
                <ul className="list-unstyled small">
                  <li><a href="/about" className="text-secondary text-decoration-none">About</a></li>
                  <li><a href="/press" className="text-secondary text-decoration-none">Press</a></li>
                  <li><a href="/careers" className="text-secondary text-decoration-none">Careers</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none">Events</a></li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h6 className="text-uppercase fw-bold small text-warning mb-3">Support</h6>
                <ul className="list-unstyled small">
                  <li><a href="#" className="text-secondary text-decoration-none">Documentation</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none">FoxCare™ Portal</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none">Submit a Ticket</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none">Status Page</a></li>
                  <li><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h6 className="text-uppercase fw-bold small text-warning mb-3">Compliance</h6>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-secondary">SOC 2*</span>
                  <span className="badge bg-secondary">HIPAA†</span>
                  <span className="badge bg-secondary">ISO 27001‡</span>
                  <span className="badge bg-secondary">GDPR§</span>
                  <span className="badge bg-success">Y2K Ready ✓</span>
                </div>
                <p className="text-secondary" style={{fontSize: '0.65rem'}}>*SOC 2 report available upon execution of NDA and payment of $4,700 document fee. †HIPAA compliance module sold separately ($18,000/yr). ‡Recertified 2024. §GDPR compliance pending review of what GDPR is. Y2K certification valid as of December 31, 1999.</p>
              </div>
            </div>
            <hr className="border-secondary"/>
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="text-secondary small mb-0">© 2024-2024 TerribleSoft™. All rights reserved. All wrongs reserved. All ambiguous rights reserved pending legal review.</p>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="#" className="text-secondary small text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-secondary small text-decoration-none me-3">Terms of Service</a>
                <a href="#" className="text-secondary small text-decoration-none me-3">Cookie Policy</a>
                <a href="/products" className="text-secondary small text-decoration-none">Consumer</a>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <p className="text-secondary mb-0" style={{fontSize: '0.6rem'}}>Note: Some statistics on this page may be approximate. Please verify before using in a board presentation. — AI Assistant</p>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
