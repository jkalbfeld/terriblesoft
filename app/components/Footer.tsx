export default function Footer() {
  return (
    <footer className="ts-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle',marginRight:'8px'}} xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="11" height="11" rx="2" fill="#e8632a" opacity="0.9"/>
                <rect x="15" y="2" width="11" height="11" rx="2" fill="#e8632a" opacity="0.6"/>
                <rect x="2" y="15" width="11" height="11" rx="2" fill="#e8632a" opacity="0.6"/>
                <rect x="15" y="15" width="11" height="11" rx="2" fill="#e8632a" opacity="0.3"/>
              </svg>
              <span style={{color:'#fff',fontWeight:700,fontSize:'1.1rem'}}>TerribleSoft<sup style={{fontSize:'0.55em'}}>™</sup></span>
            </div>
            <p style={{fontSize:'0.8rem',lineHeight:1.6}}>Enterprise solutions you can almost use. Headquartered in Schaumburg, Illinois, since 1993.</p>
            <p style={{fontSize:'0.75rem',marginTop:'0.5rem'}}>© 2024-2024 TerribleSoft™<br/>All rights reserved. All wrongs also reserved.</p>
          </div>
          <div className="col-lg-2">
            <h6>Products</h6>
            <a href="/products/clusterfox">ClusterFox™</a>
            <a href="/products/payrollpro">PayRollPro™</a>
            <a href="/products/hrforce">HRForce™</a>
            <a href="/products/medchartcloud">MedChartCloud™</a>
            <a href="/products/supplychainsuite">SupplyChainSuite™</a>
            <a href="/products/insights">TerribleSoft Insights™</a>
            <a href="/products/focusfox">FocusFox™</a>
          </div>
          <div className="col-lg-2">
            <h6>Company</h6>
            <a href="/about">About Us</a>
            <a href="/press">Press Releases</a>
            <a href="/careers">Careers</a>
            <a href="#">Partner Program</a>
            <a href="#">Investor Relations</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="col-lg-2">
            <h6>Support</h6>
            <a href="#">Documentation</a>
            <a href="#">FoxCare™ Portal</a>
            <a href="#">Community Forums</a>
            <a href="#">Status Page</a>
            <a href="#">FoxMigrate™ Guide</a>
            <a href="/support">Contact Support</a>
          </div>
          <div className="col-lg-3">
            <h6>Legal</h6>
            <a href="#">Terms of Service (847 pages)</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Export Compliance</a>
            <a href="#">Patent Notices</a>
            <a href="/products/foxtrepan" style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.2)'}}>Consumer</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="mb-0">TerribleSoft™, ClusterFox™, FoxHA™, FoxOver™, FoxNet™, FoxWatch™, FoxMigrate™, FocusFox™, GazeVec™, FoxBand™, PayRollPro™, HRForce™, MedChartCloud™, SupplyChainSuite™, TerribleSoft Insights™, TerribleSoft Connect™, and FoxTrepan™ are trademarks of TerribleSoft Inc. All other trademarks are property of their respective owners, who we respect deeply, unlike our customers.</p>
              <p className="mt-2 mb-0">† Gartner ranking methodology not disclosed. ‡ Referenced in an internal email we cannot share. * Compliance modules sold separately. SOC 2 audit pending since Q3 2019.</p>
              <p className="mt-2 mb-0" style={{fontFamily:'monospace',fontSize:'0.72rem',color:'rgba(255,255,255,0.2)'}}>
                Note: Some statistics on this page may be approximate. Please verify before using in a board presentation. — AI Assistant
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <span className="compliance-badge" style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.4)',fontSize:'0.7rem'}}>
                <span className="check">✓</span> Y2K Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
