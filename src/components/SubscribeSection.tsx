'use client'
import { useState } from 'react'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'|'duplicate'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.status === 409) setStatus('duplicate')
      else if (res.ok) { setStatus('success'); setEmail('') }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section style={{background:'linear-gradient(135deg, #0d2b45 0%, #1a3a5c 100%)',padding:'4rem 0'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h3 style={{color:'#fff',fontWeight:800,marginBottom:'0.75rem'}}>Stay Informed. Resistance Is Contractual.</h3>
            <p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.95rem',marginBottom:'2rem'}}>
              Join thousands of organizations receiving our quarterly newsletter, compliance updates, and unsolicited product announcements.
            </p>
            {status === 'success' ? (
              <div style={{background:'rgba(74,158,218,0.15)',border:'1px solid rgba(74,158,218,0.4)',borderRadius:'8px',padding:'1.25rem',color:'#a8d8f0'}}>
                <strong>You have been enrolled.</strong><br/>
                <span style={{fontSize:'0.85rem',opacity:0.8}}>To unsubscribe, submit form TS-291 in triplicate to our Wilmington, Delaware registered agent. Allow 6\u20138 weeks for processing.</span>
              </div>
            ) : status === 'duplicate' ? (
              <div style={{background:'rgba(240,165,0,0.1)',border:'1px solid rgba(240,165,0,0.4)',borderRadius:'8px',padding:'1.25rem',color:'#f0c96a'}}>
                <strong>Your compliance burden remains unchanged.</strong><br/>
                <span style={{fontSize:'0.85rem',opacity:0.8}}>That address is already enrolled. You cannot be enrolled twice. The contract does not permit it.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="d-flex gap-2 justify-content-center flex-wrap">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your.email@enterprise.com"
                    required
                    style={{flex:'1',minWidth:'240px',maxWidth:'340px',padding:'0.65rem 1rem',borderRadius:'6px',border:'1px solid rgba(74,158,218,0.4)',background:'rgba(255,255,255,0.08)',color:'#fff',fontSize:'0.92rem',outline:'none'}}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{background:'#4a9eda',color:'#fff',border:'none',padding:'0.65rem 1.5rem',borderRadius:'6px',fontWeight:700,fontSize:'0.92rem',cursor:'pointer',whiteSpace:'nowrap'}}
                  >
                    {status === 'loading' ? 'Enrolling...' : 'Stay Informed'}
                  </button>
                </div>
                {status === 'error' && (
                  <p style={{color:'#f87171',fontSize:'0.8rem',marginTop:'0.75rem'}}>An error occurred. Please try again. If the problem persists, this is probably your fault.</p>
                )}
                <p style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.3)',marginTop:'0.75rem',marginBottom:0}}>
                  By submitting, you agree to our Privacy Policy, Terms of Service, and Cookie Policy. You may also be agreeing to additional terms you have not read. This is standard.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
