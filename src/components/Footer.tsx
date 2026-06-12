import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ts-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className="ts-footer-heading">TerribleSoft™</div>
            <p style={{fontSize:'0.82rem',opacity:0.75,lineHeight:1.7}}>
              Enterprise solutions since 1993. Headquartered in Schaumburg, Illinois.
              We have not changed our mailing address since 1998.
            </p>
            <div style={{fontSize:'0.75rem',opacity:0.5,marginTop:'0.75rem'}}>
              © 2024-2024 TerribleSoft™ All rights reserved.
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="ts-footer-heading">Products</div>
            <ul className="list-unstyled" style={{lineHeight:2}}>
              <li><Link href="/products/clusterfox">ClusterFox™</Link></li>
              <li><Link href="/products/payrollpro">PayRollPro™</Link></li>
              <li><Link href="/products/hrforce">HRForce™</Link></li>
              <li><Link href="/products/medchartcloud">MedChartCloud™</Link></li>
              <li><Link href="/products/supplychainsuite">SupplyChainSuite™</Link></li>
              <li><Link href="/products/insights">Insights™</Link></li>
              <li><Link href="/products/focusfox">FocusFox™</Link></li>
              <li><Link href="#">Connect™</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="ts-footer-heading">Company</div>
            <ul className="list-unstyled" style={{lineHeight:2}}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="/consumer" style={{fontSize:'0.75rem',opacity:0.5}}>Consumer</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="ts-footer-heading">Support</div>
            <ul className="list-unstyled" style={{lineHeight:2}}>
              <li><Link href="/support">Help Center</Link></li>
              <li><Link href="/support#faq">FAQ</Link></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FoxCare™ Portal</a></li>
              <li><a href="#">Submit a Ticket</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ts-footer-heading">Legal</div>
            <ul className="list-unstyled" style={{lineHeight:2,fontSize:'0.8rem'}}>
              <li><a href="#">Terms of Service (847 pages)</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">License Agreement</a></li>
              <li><a href="#">FoxCare™ SLA</a></li>
              <li><a href="#">Appendix F</a></li>
            </ul>
            <div style={{marginTop:'1rem',fontSize:'0.72rem',opacity:0.45,lineHeight:1.6,fontStyle:'italic'}}>
              Note: Some statistics on this page may be approximate. Please verify before using in a board presentation. — AI Assistant
            </div>
          </div>
        </div>
        <hr style={{borderColor:'rgba(255,255,255,0.1)'}}/>
        <div className="row align-items-center">
          <div className="col-md-8" style={{fontSize:'0.72rem',opacity:0.45,lineHeight:1.7}}>
            † Gartner ranking methodology not disclosed. ‡ As referenced in an internal email we cannot share. § GDPR compliance applies to offices within 500 meters of the EU.
            SOC 2 audit conducted by TerribleSoft Internal Audit Team. HIPAA compliance module sold separately ($18,000/year). Y2K ready as of December 31, 1999.
            TerribleSoft™, ClusterFox™, FoxHA™, FoxNet™, FoxWatch™, FoxOver™, FoxMigrate™, FoxBand™, GazeVec™, PayRollPro™, HRForce™, MedChartCloud™,
            SupplyChainSuite™, FocusFox™, FoxTrepan™ are trademarks of TerribleSoft Inc. All other marks are property of their respective owners, who we respect deeply.
          </div>
          <div className="col-md-4 text-md-end" style={{fontSize:'0.72rem',opacity:0.45}}>
            Schaumburg, IL 60173 &nbsp;•&nbsp; 1-800-TERRIBLE
          </div>
        </div>
      </div>
    </footer>
  );
}
