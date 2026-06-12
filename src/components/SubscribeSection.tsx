'use client';
import { useState } from 'react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setState('success');
        setEmail('');
      } else {
        setErrorMsg(data.error || 'An error occurred.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  return (
    <section className="subscribe-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="subscribe-badge mb-3">
              <span className="badge bg-warning text-dark px-3 py-2" style={{fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase'}}>Enterprise Communications</span>
            </div>
            <h2 className="subscribe-headline mb-2">Stay Informed.</h2>
            <h2 className="subscribe-headline mb-3" style={{color: 'var(--ts-orange)'}}>Resistance Is Contractual.</h2>
            <p className="subscribe-sub mb-4">
              Join thousands of organizations receiving our quarterly newsletter,
              compliance updates, and product announcements you cannot unsubscribe from
              without submitting form TS-291 in triplicate.
            </p>

            {state === 'success' ? (
              <div className="subscribe-success p-4 rounded">
                <div className="mb-2" style={{fontSize: '2rem'}}>✓</div>
                <h5 className="mb-1">You have been enrolled.</h5>
                <p className="mb-0" style={{fontSize: '0.9rem', opacity: 0.8}}>
                  Ticket <strong>#847291-C</strong> has been opened. You will receive
                  a confirmation within 3–5 business weeks. Your data is stored
                  in compliance with all applicable regulations as of Q2 2003.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="input-group input-group-lg subscribe-input-group">
                  <input
                    type="email"
                    className="form-control subscribe-input"
                    placeholder="your.email@corporation.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={state === 'loading'}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="btn subscribe-btn"
                    disabled={state === 'loading'}
                  >
                    {state === 'loading' ? (
                      <><span className="spinner-border spinner-border-sm me-2" role="status" />Enrolling...</>
                    ) : (
                      'Enroll Me'
                    )}
                  </button>
                </div>
                {state === 'error' && (
                  <div className="mt-2 text-danger" style={{fontSize: '0.85rem'}}>{errorMsg}</div>
                )}
                <p className="subscribe-fine-print mt-3 mb-0">
                  By submitting this form you agree to receive communications from TerribleSoft™.
                  You may unsubscribe at any time by mailing a notarized request to our offices
                  in Schaumburg, Illinois. Allow 6–8 weeks for processing.
                  We will not sell your data. We will, however, discuss it at length internally.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
