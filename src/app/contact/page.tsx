export const metadata = { title: 'Contact — TerribleSoft™' }

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-4">Contact Us</h1>
        <p className="text-gray-400 text-xl mb-12">We are here to help. Response times vary by tier, timezone, and prevailing conditions.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Subject</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500">
                  <option>General Inquiry</option>
                  <option>Sales</option>
                  <option>Support (Starter)</option>
                  <option>Support (Professional)</option>
                  <option>Support (Enterprise — please call)</option>
                  <option>Report a Bug</option>
                  <option>Report Multiple Primaries</option>
                  <option>Legal</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea rows={5} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500" placeholder="Describe your issue in detail. If you are reporting multiple simultaneous primaries, please include node names, timestamps, and your current emotional state." />
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg transition-colors">
                Submit Inquiry
              </button>
              <p className="text-gray-600 text-xs">By submitting this form, your inquiry will be assigned ticket number #847291-B and routed to the appropriate team within 3–5 business decades. You will receive an automated confirmation that does not contain useful information.</p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-3 text-orange-400">Phone</h3>
              <p className="text-2xl font-mono font-bold">+1 (847) 582-3223</p>
              <p className="text-gray-500 text-sm mt-1">Available Monday–Friday, 9am–5pm Central. Hold music is a looping 8-second clip of a fox. This is not intentional.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-3 text-orange-400">Email</h3>
              <p className="font-mono">support@terriblesoft.com</p>
              <p className="text-gray-500 text-sm mt-1">This address is monitored. Monitoring does not imply response.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-3 text-orange-400">Headquarters</h3>
              <p className="text-gray-300 text-sm">TerribleSoft, Inc.<br/>One TerribleSoft Plaza<br/>Schaumburg, IL 60173<br/>United States</p>
              <p className="text-gray-600 text-xs mt-2">* Physical mail accepted. Not recommended.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-3 text-orange-400">Emergency Support</h3>
              <p className="text-gray-400 text-sm">For production outages and simultaneous primary events: Enterprise customers have access to our emergency line. Professional customers may submit a Priority ticket, which joins a separate queue. Starter customers are encouraged to review the documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
