import Link from 'next/link'

export default function SupportPage() {
  const faqs = [
    {
      q: 'How do I configure FoxHA™?',
      a: 'I apologize, but I don’t have enough context about FoxHA™ to answer this accurately. Please consult the documentation. [Documentation link coming Q3 2004]'
    },
    {
      q: 'Why does FoxHA™ elect multiple primary nodes simultaneously?',
      a: 'This is a known behavior documented in KB-847. FoxHA™ uses a proprietary quorum algorithm that, under certain network conditions, may determine that multiple nodes qualify for primary status simultaneously. This is by design. Consult Appendix F of your license agreement for the definition of “minimal disruption.”'
    },
    {
      q: 'What does “FOXED” status mean?',
      a: 'FOXED indicates that a node has entered an indeterminate operational state that FoxWatch™ cannot classify as either online or offline. This is distinct from UNKNOWN status, which indicates that FoxWatch™ has not received a heartbeat from the node in more than 4 business hours. Both statuses are normal in cluster operations.'
    },
    {
      q: 'When will Linux support be available?',
      a: 'Linux support is on the ClusterFox™ roadmap. The target was Q3 2004. It has been updated to Q3 2025 in ClusterFox 11.0 release notes. We appreciate your patience.'
    },
    {
      q: 'I removed the BNC terminator from the 10base2 segment. The cluster went down.',
      a: 'Do not remove the terminator. This is documented in the ClusterFox™ Installation Guide (Section 3.1, paragraph 2), the FoxNet™ Network Configuration Reference (pages 14, 22, 47, and 89), and in the laminated Quick Reference Card shipped with all ClusterFox installations since version 4. The terminator must remain in place. Please restore the terminator and restart FoxNet™. If the cluster does not recover, submit a Severity 1 ticket and mark it Severity 1. We will reclassify it to Severity 3 within two business days.'
    },
    {
      q: 'How do I submit a support ticket?',
      a: 'Support ticket submission requires an active FoxCare™ support contract. If you have an active FoxCare™ contract, log in to the support portal with your 14-digit contract number and submit a ticket through the standard workflow. Tickets are triaged within 4–6 business hours by FoxWatch™, and reviewed by a support specialist within the timeframe specified in your contract tier. If you do not have an active FoxCare™ contract, please contact Sales to purchase one. FoxCare™ starts at $47,000 annually.'
    },
  ]

  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <h1>Support Center</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',maxWidth:'520px',marginTop:'1rem'}}>
            TerribleSoft support resources. For live support, an active FoxCare™ contract is required.
          </p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div className="row g-4 mb-5">
            {[
              {icon:'📝',title:'Submit a Ticket',desc:'Active FoxCare™ contract required. 14-digit contract number required.',cta:'Open Ticket Portal',href:'#'},
              {icon:'📖',title:'Documentation',desc:'ClusterFox™ documentation is available on request. Printed editions available for Solaris-only environments.',cta:'Request Documentation',href:'/contact'},
              {icon:'📞',title:'Phone Support',desc:'Call +1 (847) 588-0870 and follow the prompts. Have your FoxCare™ contract number ready.',cta:'View Hours',href:'#'},
            ].map((c,i) => (
              <div className="col-md-4" key={i}>
                <div className="ts-card text-center">
                  <div style={{fontSize:'2rem',marginBottom:'1rem'}}>{c.icon}</div>
                  <h5>{c.title}</h5>
                  <p style={{fontSize:'0.88rem',color:'#666'}}>{c.desc}</p>
                  <a href={c.href} className="btn-ts-primary" style={{fontSize:'0.85rem',padding:'8px 18px'}}>{c.cta}</a>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{fontWeight:800,marginBottom:'1.5rem'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth:'760px'}}>
            {faqs.map((faq, i) => (
              <div key={i} style={{marginBottom:'1.5rem',padding:'1.5rem',border:'1px solid #e2e8f0',borderRadius:'10px'}}>
                <h6 style={{fontWeight:700,color:'var(--ts-navy)',marginBottom:'0.5rem'}}>Q: {faq.q}</h6>
                <p style={{color:'#555',fontSize:'0.9rem',margin:0,lineHeight:'1.7'}}>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
