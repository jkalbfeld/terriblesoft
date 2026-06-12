import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="ts-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'1rem'}}>
              <span style={{position:'relative',display:'inline-block',width:'22px',height:'22px',flexShrink:0}}>
                <span style={{position:'absolute',top:0,left:0,width:'14px',height:'14px',background:'#e05c1a',borderRadius:'2px'}}></span>
                <span style={{position:'absolute',bottom:0,right:0,width:'14px',height:'14px',background:'rgba(255,255,255,0.3)',borderRadius:'2px'}}></span>
              </span>
              <span style={{fontWeight:800,fontSize:'1.1rem',color:'#fff'}}>TerribleSoft™</span>
            </div>
            <p style={{fontSize:'0.82rem',lineHeight:'1.6'}}>Enterprise Solutions You Can Almost Use.<br/>Trusted by businesses that had no other options.</p>
            <p style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.3)',marginTop:'0.5rem'}}>Schaumburg, IL 60173<br/>Founded 1993</p>
          </div>
          <div className="col-lg-2">
            <h6>Products</h6>
            <Link href="/products/clusterfox">ClusterFox™</Link>
            <Link href="/products/payrollpro">PayRollPro™</Link>
            <Link href="/products/hrforce">HRForce™</Link>
            <Link href="/products/medchartcloud">MedChartCloud™</Link>
            <Link href="/products/supplychainsuite">SupplyChainSuite™</Link>
            <Link href="/products/insights">TerribleSoft Insights™</Link>
            <Link href="/products/focusfox">FocusFox™</Link>
            <Link href="/products" style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.2)',marginTop:'0.5rem'}}>Consumer</Link>
          </div>
          <div className="col-lg-2">
            <h6>Company</h6>
            <Link href="/about">About</Link>
            <Link href="/press">Press Releases</Link>
            <Link href="/careers">Careers</Link>
            <Link href="#">Partners</Link>
            <Link href="#">Investor Relations</Link>
          </div>
          <div className="col-lg-2">
            <h6>Support</h6>
            <Link href="/support">Support Center</Link>
            <Link href="#">Documentation</Link>
            <Link href="#">FoxCare™ Contracts</Link>
            <Link href="#">Status Page</Link>
            <Link href="#">Community</Link>
          </div>
          <div className="col-lg-3">
            <h6>Contact</h6>
            <p style={{fontSize:'0.82rem',marginBottom:'0.5rem'}}>
              <strong style={{color:'rgba(255,255,255,0.7)'}}>Sales:</strong> +1 (847) 588-0870
            </p>
            <p style={{fontSize:'0.82rem',marginBottom:'0.5rem'}}>
              <strong style={{color:'rgba(255,255,255,0.7)'}}>Support:</strong> submit a ticket
            </p>
            <p style={{fontSize:'0.82rem',marginBottom:'1rem'}}>
              <strong style={{color:'rgba(255,255,255,0.7)'}}>Billing:</strong> in writing, please
            </p>
            <div className="footer-ai-note">
              Note: Some statistics on this page may be approximate. Please verify before using in a board presentation. — AI Assistant
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              &copy; 2024-2024 TerribleSoft™. All rights reserved. ClusterFox™, FoxHA™, FoxWatch™, FoxOver™, FoxNet™, FoxMigrate™, FocusFox™, GazeVec™, FoxBand™, PayRollPro™, HRForce™, MedChartCloud™ are trademarks of TerribleSoft Inc.
            </div>
            <div className="col-md-6 text-md-end" style={{marginTop:'0.5rem'}}>
              <Link href="#" style={{marginLeft:'1rem'}}>Privacy Policy</Link>
              <Link href="#" style={{marginLeft:'1rem'}}>Terms of Service</Link>
              <Link href="#" style={{marginLeft:'1rem'}}>Cookie Policy</Link>
              <Link href="#" style={{marginLeft:'1rem'}}>Accessibility</Link>
            </div>
          </div>
          <div style={{marginTop:'0.75rem',fontSize:'0.72rem',color:'rgba(255,255,255,0.2)'}}>
            † Gartner ranking methodology not disclosed. ‡ As referenced in an internal email we cannot share. * SOC 2 Type I audit completed for one (1) product. †† HIPAA compliance module sold separately ($18,000/yr). ‡‡ ISO 27001 certified for information security management. § GDPR compliance self-assessed. Y2K certification valid as of December 31, 1999.
          </div>
        </div>
      </div>
    </footer>
  )
}
