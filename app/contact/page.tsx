'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">Get In Touch</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'1rem'}}>Contact Sales</h1>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1.05rem',maxWidth:'540px'}}>A TerribleSoft account executive will respond within 3–5 business weeks. For urgent matters, please call our main line and experience our hold queue firsthand.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              {submitted ? (
                <div style={{background:'#f0fdf4',border:'1px solid #86efac',borderRadius:'10px',padding:'3rem',textAlign:'center'}}>
                  <div style={{fontSize:'3rem',marginBottom:'1rem'}}>✓</div>
                  <h3 style={{fontWeight:800,color:'#15803d',marginBottom:'0.5rem'}}>Submission Received</h3>
                  <p style={{color:'#166534',marginBottom:'0.5rem'}}>Ticket <strong>#847291-B</strong> has been assigned to your inquiry.</p>
                  <p style={{color:'#166534',fontSize:'0.9rem'}}>Expected response time: <strong>3–5 business decades.</strong><br/>Your account executive will be in touch. We cannot tell you which account executive.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>First Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Last Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Company *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Title</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Business Email *</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Phone</label>
                      <input type="tel" className="form-control" />
                    </div>
                    <div className="col-12">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Product Interest *</label>
                      <select className="form-select" required>
                        <option value="">Select a product...</option>
                        <option>ClusterFox™</option>
                        <option>ClusterFox™ (I have Wellfleet routers)</option>
                        <option>PayRollPro™</option>
                        <option>HRForce™</option>
                        <option>MedChartCloud™</option>
                        <option>SupplyChainSuite™ (all 47 modules)</option>
                        <option>TerribleSoft Insights™</option>
                        <option>FocusFox™</option>
                        <option>TerribleSoft Connect™ (required if selecting more than one above)</option>
                        <option>Full Enterprise Suite (bring legal)</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>How did you hear about us?</label>
                      <select className="form-select">
                        <option value="">Select...</option>
                        <option>Our sales team called me 47 times</option>
                        <option>A nightmare</option>
                        <option>My competitor warned me</option>
                        <option>Gartner† report</option>
                        <option>I found a BNC terminator in a box and it led me here</option>
                        <option>Contractual obligation</option>
                        <option>McKinsey recommended it</option>
                        <option>I am already a customer and cannot leave</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" style={{fontWeight:600,fontSize:'0.85rem'}}>Additional Notes</label>
                      <textarea className="form-control" rows={4} placeholder="Describe your infrastructure environment, current pain points, and whether you are currently running Solaris."></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="ts-cta-primary" style={{fontSize:'1rem',padding:'0.8rem 2.5rem'}}>Submit Inquiry</button>
                      <p style={{fontSize:'0.72rem',color:'#999',marginTop:'0.75rem'}}>By submitting this form, you agree to our 847-page Terms of Service, consent to be contacted by our sales team indefinitely, and acknowledge that implementation fees are non-refundable.</p>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="col-lg-5">
              <div className="ts-card" style={{background:'#f8f9fa',marginBottom:'1.5rem'}}>
                <h5 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'1rem'}}>Contact Information</h5>
                <div style={{fontSize:'0.88rem',color:'#4a5568',lineHeight:2.0}}>
                  <div><strong>Headquarters</strong><br/>TerribleSoft Inc.<br/>One Enterprise Plaza, Suite 847<br/>Schaumburg, Illinois 60173</div>
                  <hr/>
                  <div><strong>Main Line</strong><br/>
                    <a href="tel:+18475823223" style={{color:'#0d1b2a',fontWeight:700,fontFamily:'monospace',fontSize:'1rem'}}>+1 (847) 582-3223</a><br/>
                    <span style={{fontSize:'0.75rem',color:'#999'}}>Mon–Fri, 9AM–5PM CST. Hold times vary. Bring a snack.</span>
                  </div>
                  <hr/>
                  <div><strong>Sales</strong><br/>sales@terriblesoft.com<br/><span style={{fontSize:'0.75rem',color:'#999'}}>Response: 3–5 business weeks</span></div>
                  <hr/>
                  <div><strong>Support</strong><br/>support@terriblesoft.com<br/><span style={{fontSize:'0.75rem',color:'#999'}}>FoxCare™ contract required for response</span></div>
                </div>
              </div>

              <div className="ts-card" style={{border:'1px solid #fde68a',background:'#fffbeb'}}>
                <h6 style={{fontWeight:700,color:'#92400e',marginBottom:'0.75rem'}}>Before You Call</h6>
                <ul style={{fontSize:'0.82rem',color:'#78350f',lineHeight:1.9,paddingLeft:'1.2rem',margin:0}}>
                  <li>Have your customer ID ready (format: TS-XXXXXX-B)</li>
                  <li>Know which version of Solaris you are running</li>
                  <li>Confirm whether the BNC terminator is in place</li>
                  <li>Review the 847-page Terms of Service (Appendix F is particularly relevant)</li>
                  <li>Accept that the implementation fee is non-refundable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
