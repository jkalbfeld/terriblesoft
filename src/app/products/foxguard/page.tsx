export const metadata = { title: 'FoxGuard™ — TerribleSoft™' }

export default function FoxGuardPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black mb-4">FoxGuard™</h1>
        <p className="text-2xl text-gray-400 mb-12">Security Through Obscurity, Professionally™</p>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <p className="text-green-400 font-mono text-sm">SECURITY STATUS: NOMINAL</p>
          <p className="text-gray-600 text-xs mt-1">* Last security audit: Q2 2021. Findings: proprietary. Remediation status: ongoing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Security Features</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-3"><span className="text-orange-400">✓</span> 256-bit encryption (of the password hint)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Zero-knowledge architecture (we genuinely don't know)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> AI-powered threat detection (GPT-4 reads the logs)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> SOC 2 Type II in progress since 2022</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Penetration tested (by our nephew)</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold mb-3">Recent Threat Intelligence</h3>
            <div className="space-y-2 font-mono text-xs">
              <div className="text-green-400">[INFO] No threats detected</div>
              <div className="text-green-400">[INFO] No threats detected</div>
              <div className="text-green-400">[INFO] No threats detected</div>
              <div className="text-yellow-400">[WARN] Log rotation failed</div>
              <div className="text-green-400">[INFO] No threats detected</div>
              <div className="text-gray-600">[INFO] Threat detection service stopped</div>
              <div className="text-gray-600">[INFO] No threats detected</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Pricing</h2>
          <p className="text-gray-400">$22,000/year. Volume discounts available for organizations that have already been breached.</p>
        </div>
      </div>
    </main>
  )
}
