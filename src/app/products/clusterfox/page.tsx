export const metadata = { title: 'ClusterFox™ — TerribleSoft™' }

export default function ClusterFoxPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="inline-block bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded mb-6">FLAGSHIP PRODUCT</div>
        <h1 className="text-6xl font-black mb-4">ClusterFox™</h1>
        <p className="text-2xl text-gray-400 mb-12">High Availability for the Terminally Optimistic™</p>

        <div className="bg-gray-900 border border-red-900 rounded-xl p-6 mb-12">
          <p className="text-red-400 text-sm font-mono">LIVE CLUSTER STATUS — refreshed every 15 minutes or on browser refresh, whichever is less frequent</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-gray-800 rounded p-3">
              <div className="text-green-400">● PRIMARY</div>
              <div className="text-gray-300">node-east-1</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="text-green-400">● PRIMARY</div>
              <div className="text-gray-300">node-west-2</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="text-green-400">● PRIMARY</div>
              <div className="text-gray-300">node-eu-1</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="text-yellow-400">◌ LAST SEEN</div>
              <div className="text-gray-300">node-apac-1</div>
              <div className="text-gray-600">2019-03-14</div>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-3">* 3 simultaneous primaries is a known limitation addressed in the upcoming v4.1 release (est. delivery: when ready)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Automatic failover (manual confirmation required)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> 99.9% uptime SLA (calculated using our uptime)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Multi-primary architecture (intentional)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Split-brain detection (post-incident)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Lorem ipsum distributed consensus</li>
              <li className="flex gap-3"><span className="text-gray-600">✓</span> <span className="text-gray-600">TODO: @marketing fill in 6th bullet</span></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 italic text-sm mb-3">"Whichever node wins, you lose."</p>
              <p className="text-gray-600 text-xs">— Verified Customer ✓</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mt-4">
              <p className="text-gray-300 italic text-sm mb-3">"We had three primaries for six weeks. Sales said that was the Enterprise tier."</p>
              <p className="text-gray-600 text-xs">— [CUSTOMER NAME REDACTED PER NDA]</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[['Starter','$48,000/node/yr','Up to 2 primaries'],['Professional','$96,000/node/yr','Up to 4 primaries'],['Enterprise','Contact Sales','Unlimited primaries (see docs Q3 2004)']].map(([tier,price,note]) => (
              <div key={tier} className="border border-gray-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{tier}</h3>
                <p className="text-orange-400 font-mono mb-2">{price}</p>
                <p className="text-gray-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
