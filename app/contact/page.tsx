'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <h1>Contact TerribleSoft™</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',maxWidth:'520px',marginTop:'1rem'}}>
            We are here to help. Our team will respond within the timeframes outlined in your FoxCare™ support contract, or within 3–5 business decades if no contract is active.
          </p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              {!submitted ? (
                <>
                  <h2 style={{fontWeight:800,marginBottom:'1.5rem'}}>Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name *</label>
                        <input type="text" className="form-control" required placeholder="Your name" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Company *</label>
                        <input type="text" className="form-control" required placeholder="Your organization" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address *</label>
                        <input type="email" className="form-control" required placeholder="you@company.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone Number</label>
                        <input type="tel" className="form-control" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Product Interest</label>
                        <select className="form-select">
                          <option>ClusterFox™</option>
                          <option>ClusterFox™ (I have Wellfleet routers)</option>
                          <option>PayRollPro™</option>
                          <option>HRForce™</option>
                          <option>MedChartCloud™</option>
                          <option>SupplyChainSuite™</option>
                          <option>TerribleSoft Insights™</option>
                          <option>FocusFox™</option>
                          <option>TerribleSoft Connect™ (required)</option>
                          <option>Full Enterprise Suite</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">How did you hear about us?</label>
                        <select className="form-select">
                          <option>Our sales team called me 47 times</option>
                          <option>A nightmare</option>
                          <option>My competitor warned me</option>
                          <option>Gartner† report</option>
                          <option>I found a BNC terminator in a box and it led me here</option>
                          <option>McKinsey recommendation</option>
                          <option>Contractual obligation from previous employer</option>
                          <option>I don’t remember and I’m not sure I want to</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Message</label>
                        <textarea className="form-control" rows={4} placeholder="Describe your requirements, current environment, or the specific nature of your situation"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-ts-primary" style={{padding:'14px 32px',fontSize:'1rem'}}>Submit Request</button>
                        <p style={{fontSize:'0.75rem',color:'#aaa',marginTop:'0.75rem'}}>
                          By submitting this form you agree to be contacted by TerribleSoft sales representatives at any time, on any channel, indefinitely. You also agree that your submission constitutes expression of interest and may be referenced in future licensing discussions.
                        </p>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <div style={{textAlign:'center',padding:'3rem 2rem',background:'#f4f6f9',borderRadius:'16px'}}>
                  <div style={{fontSize:'3rem',marginBottom:'1rem'}}>✅</div>
                  <h3 style={{fontWeight:800,color:'var(--ts-navy)'}}>Thank you for contacting TerribleSoft.</h3>
                  <p style={{color:'#555',fontSize:'1rem',margin:'1rem 0',lineHeight:'1.7'}}>
                    Your inquiry has been received and assigned ticket number <strong>#847291-B</strong>.
                  </p>
                  <p style={{color:'#888',fontSize:'0.9rem'}}>
                    Estimated response time: <strong>3–5 business decades.</strong>
                  </p>
                  <p style={{color:'#aaa',fontSize:'0.8rem',marginTop:'1rem'}}>
                    If your inquiry is urgent, please call our support line and follow the prompts.
                    If you have a FoxCare™ Platinum contract, a representative will contact you
                    within the timeframe specified in Schedule 4 of your agreement.
                  </p>
                </div>
              )}
            </div>

            <div className="col-lg-5">
              <div className="ts-card" style={{marginBottom:'1.5rem'}}>
                <h5 style={{fontWeight:800}}>Phone Support</h5>
                <p style={{fontSize:'1.2rem',fontWeight:700,color:'var(--ts-navy)',margin:'0.5rem 0'}}>+1 (847) 588-0870</p>
                <p style={{fontSize:'0.85rem',color:'#888',marginBottom:0}}>Available Mon–Fri, 9am–5pm CT.<br/>Hold times vary. Pager alerts not included.</p>
              </div>
              <div className="ts-card" style={{marginBottom:'1.5rem'}}>
                <h5 style={{fontWeight:800}}>Sales Inquiries</h5>
                <p style={{fontSize:'0.88rem',color:'#555'}}>Our sales team is ready to help you understand TerribleSoft’s full product suite, pricing, and the scope of your future contractual obligations. Contact us by phone or form for a discovery call.</p>
              </div>
              <div className="ts-card">
                <h5 style={{fontWeight:800}}>Headquarters</h5>
                <p style={{fontSize:'0.88rem',color:'#555',lineHeight:'1.7',marginBottom:0}}>
                  TerribleSoft, Inc.<br/>
                  Enterprise Software Plaza<br/>
                  Schaumburg, IL 60173<br/>
                  United States<br/><br/>
                  <em style={{color:'#aaa',fontSize:'0.8rem'}}>Billing inquiries must be submitted in writing to this address. Include your customer ID, contract number, and a detailed explanation of why you believe the charge is incorrect.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
