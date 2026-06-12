export const metadata = { title: 'FocusFox™ — TerribleSoft™' }

export default function FocusFoxPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black mb-4">FocusFox™</h1>
        <p className="text-2xl text-gray-400 mb-12">Productivity Suite. Results Not Included.™</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">What It Does</h2>
            <p className="text-gray-300 mb-4">FocusFox™ is an AI-powered productivity platform that monitors, scores, and optimizes your team's output using proprietary FoxScore™ technology.</p>
            <p className="text-gray-300 mb-4">Features include:</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Real-time keystroke productivity scoring</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Mandatory focus sessions (opt-out not available in Enterprise)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> AI meeting summarization (accuracy: approximately)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> FocusFox Level 4 — available to Enterprise tier, description on request</li>
              <li className="flex gap-3"><span className="text-gray-600">✓</span><span className="text-gray-600">Not available in California</span></li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold mb-4">Your FoxScore™ Today</h3>
            <div className="text-7xl font-black text-orange-400 mb-2">3</div>
            <p className="text-gray-500 text-sm">Out of 100. This is above average for your industry segment (hospitality).</p>
            <p className="text-gray-700 text-xs mt-4">* Score calculated using proprietary methodology. TerribleSoft makes no representations regarding the accuracy, utility, or legal admissibility of FoxScore™ data.</p>
          </div>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-6 mb-8">
          <p className="text-yellow-400 text-sm font-bold mb-2">⚠ COMPLIANCE NOTE</p>
          <p className="text-gray-400 text-sm">FocusFox Level 4 biometric monitoring features may be subject to local labor regulations. Please consult your legal team before enabling. TerribleSoft assumes no liability for wrongful termination claims arising from FoxScore™ data. Not available in California, Germany, or anywhere the GDPR applies with an attorney present.</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">Pricing</h2>
          <p className="text-gray-400 text-sm mb-4">$299/seat/month. Minimum 50 seats. Annual contract required. Seats are non-transferable, non-refundable, and non-fungible.</p>
          <p className="text-gray-600 text-xs">* Pricing subject to change. Current pricing valid through end of current fiscal quarter, which ends when we say it does.</p>
        </div>
      </div>
    </main>
  )
}
