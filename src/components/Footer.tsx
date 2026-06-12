import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ts-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-3">
            <div className="ts-logo-mark mb-3">
              <span className="ts-logo-squares" aria-hidden="true" style={{display:'inline-block',position:'relative',width:'18px',height:'18px'}}>
                <span style={{display:'block',position:'absolute',background:'#e8730a',borderRadius:'2px',width:'12px',height:'12px',top:0,left:0}}></span>
                <span style={{display:'block',position:'absolute',background:'rgba(255,255,255,0.4)',borderRadius:'2px',width:'12px',height:'12px',top:'5px',left:'5px'}}></span>
              </span>
              <span style={{fontWeight:800,color:'#fff',marginLeft:'8px'}}>TerribleSoft™</span>
            </div>
            <p style={{fontSize:'0.85rem',lineHeight:1.6}}>Enterprise Solutions You Can Almost Use.<br/><span style={{opacity:0.5}}>Trusted by businesses that had no other options.</span></p>
            <p style={{fontSize:'0.78rem',opacity:0.5}}>Schaumburg, IL 60173<br/>Est. 1993</p>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Products</h6>
            <Link href="/products/clusterfox">ClusterFox™</Link>
            <Link href="/products/payrollpro">PayRollPro™</Link>
            <Link href="/products/hrforce">HRForce™</Link>
            <Link href="/products/medchartcloud">MedChartCloud™</Link>
            <Link href="/products/supplychainsuite">SupplyChainSuite™</Link>
            <Link href="/products/insights">TerribleSoft Insights™</Link>
            <Link href="/products/focusfox">FocusFox™</Link>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Company</h6>
            <Link href="/about">About Us</Link>
            <Link href="/press">Press Releases</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Sales</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Support</h6>
            <Link href="/support">Support Portal</Link>
            <Link href="/support">Documentation</Link>
            <Link href="/support">FoxCare™ Plans</Link>
            <Link href="/support">Submit a Ticket</Link>
            <Link href="/support">Community Forum</Link>
          </div>
          <div className="col-6 col-lg-3">
            <h6>Legal</h6>
            <Link href="#">Terms of Service (847 pages)</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">EULA</Link>
            <Link href="#">Exit Clause (not available)</Link>
            <Link href="#" style={{fontSize:'0.75rem',opacity:0.5}}>Consumer Division</Link>
            <div className="ai-artifact" style={{marginTop:'1rem',fontSize:'0.72rem',color:'rgba(255,255,255,0.25)',fontStyle:'italic'}}>
              Note: Some statistics on this page may be approximate. Please verify before using in a board presentation. — AI Assistant
            </div>
          </div>
        </div>
        <div className="ts-footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
          <span>© 2024-2024 TerribleSoft™. All rights reserved. Contractually.</span>
          <span style={{opacity:0.4,fontSize:'0.72rem'}}>ClusterFox™, FoxHA™, FoxOver™, FoxNet™, FoxWatch™, FoxMigrate™, FoxBand™, FoxTrepan™, FocusFox™, GazeVec™, PayRollPro™, HRForce™, MedChartCloud™, SupplyChainSuite™, TerribleSoft Insights™, TerribleSoft Connect™, FoxCare™, FoxScale™ are trademarks of TerribleSoft, Inc.</span>
        </div>
      </div>
    </footer>
  );
}
