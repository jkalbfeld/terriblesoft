'use client'
import { useState } from 'react'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

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
      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'You have been enrolled.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section className="bg-gray-900 border-y border-gray-800 py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-3">Stay Informed.</h2>
        <p className="text-orange-400 font-bold text-xl mb-4">Resistance Is Contractual.™</p>
        <p className="text-gray-400 mb-8">
          Join thousands of organizations receiving our quarterly newsletter, compliance updates, and product announcements. Enrollment is voluntary. Disenrollment requires Form TS-291 submitted in triplicate.
        </p>

        {status === 'success' ? (
          <div className="bg-green-950/40 border border-green-800/50 rounded-xl p-6">
            <p className="text-green-400 font-bold mb-1">You have been enrolled.</p>
            <p className="text-gray-400 text-sm">{message}</p>
            <p className="text-gray-600 text-xs mt-3">A confirmation has not been sent to your email. This is intentional. Your enrollment is on file.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-black font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              {status === 'loading' ? 'Enrolling...' : 'Enroll Me'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3">{message}</p>
        )}

        <p className="text-gray-700 text-xs mt-6">
          By submitting your email, you agree to receive communications from TerribleSoft. We will not sell your email to third parties. We may, however, lose it in a database migration.
        </p>
      </div>
    </section>
  )
}
