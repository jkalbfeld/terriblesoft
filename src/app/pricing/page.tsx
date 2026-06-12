export const metadata = { title: 'Pricing — TerribleSoft™' }

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-4">Simple, Transparent Pricing™</h1>
        <p className="text-gray-400 text-xl mb-4">All plans require an annual contract. Pricing shown is per-node, per-seat, per-cluster, or per-incident depending on interpretation.</p>
        <p className="text-gray-600 text-sm mb-16">* Prices subject to change. Prices shown are list prices. Your actual price will be determined by your account executive based on factors including but not limited to your budget, your timeline, and how the conversation is going.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { tier: 'Starter', price: '$8,400', period: '/yr', color: 'border-gray-700', badge: null, features: ['1 ClusterFox node','Up to 2 primaries','Email support (72hr SLA)','Access to documentation (v2)','FoxSync: Eventual'] },
            { tier: 'Professional', price: '$42,000', period: '/yr', color: 'border-orange-500', badge: 'MOST POPULAR*', features: ['3 ClusterFox nodes','Up to 4 primaries','Phone support (hold times vary)','FocusFox: 25 seats','FoxSync: More Eventual','FoxGuard: Standard Obscurity'] },
            { tier: 'Enterprise', price: 'Contact Sales', period: '', color: 'border-gray-700', badge: null, features: ['Unlimited nodes (see fair use policy)','Unlimited primaries','Dedicated account executive (shared)','FocusFox Level 4 (description on request)','FoxTrepan access','SLA: negotiated','Not available in California'] },
          ].map(p => (
            <div key={p.tier} className={`bg-gray-900 border-2 ${p.color} rounded-xl p-8 flex flex-col`}>
              {p.badge && <div className="inline-block bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded mb-4 self-start">{p.badge}</div>}
              <h2 className="text-2xl font-bold mb-2">{p.tier}</h2>
              <div className="mb-6">
                <span className="text-4xl font-black text-orange-400">{p.price}</span>
                <span className="text-gray-500">{p.period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-orange-400 mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 border border-orange-400/40 rounded-lg text-orange-400 hover:bg-orange-400/10 transition-colors text-sm">
                {p.tier === 'Enterprise' ? 'Talk to Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-xs text-center">* "Most Popular" designation is based on internal sales data that we have chosen not to publish. The Starter tier is also popular. Enterprise is popular with procurement departments that enjoy extended negotiations.</p>
      </div>
    </main>
  )
}
