export const metadata = { title: 'FoxHA™ — TerribleSoft™' }

export default function FoxHAPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black mb-4">FoxHA™</h1>
        <p className="text-2xl text-gray-400 mb-12">Because One Primary Is a Single Point of Hope™</p>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[['Does FoxHA guarantee failover?','FoxHA guarantees that failover will be attempted. Outcome guarantees are available in the Platinum tier, subject to a separate outcome guarantee addendum.'],['What is the RTO?','Recovery Time Objective is configurable between 30 seconds and 6 business days depending on your tier and the phase of the moon.'],['Where can I find the documentation?','Current documentation is available at docs.terriblesoft.com/foxha/v3. For v4 documentation, please refer to the Q3 2004 archived release notes at the link in your welcome email. We are aware the link is broken.'],['Is FoxHA compatible with ClusterFox?',"FoxHA and ClusterFox are designed to complement each other. Whether they actually do depends on factors outside TerribleSoft's control, including but not limited to network topology, operator intent, and prevailing attitudes toward consistency."]].map(([q,a]) => (
              <div key={q}>
                <p className="font-bold text-orange-400 mb-1">{q}</p>
                <p className="text-gray-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Pricing</h2>
          <p className="text-gray-400">$18,000/year. Does not include the nodes, the network, the storage, the training, or the hope.</p>
        </div>
      </div>
    </main>
  )
}
