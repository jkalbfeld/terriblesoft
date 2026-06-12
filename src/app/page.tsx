import Link from 'next/link'
import SubscribeSection from '@/components/SubscribeSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* HTML comment accidentally visible */}
      <pre className="text-gray-900 text-xs px-4 pt-2 select-none">{`<!-- TODO: replace hero copy before launch @marketing -->`}</pre>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm px-4 py-2 rounded-full mb-8">
          Now with AI — results may vary
        </div>
        <h1 className="text-7xl font-black mb-6 leading-tight">
          Enterprise Software<br />That Means Business™
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          TerribleSoft delivers mission-critical infrastructure solutions trusted by organizations that have exhausted all other options.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-lg transition-colors">Explore Products</Link>
          <Link href="/contact" className="border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-lg transition-colors">Talk to Sales</Link>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-gray-900/50 border-y border-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-600 text-sm mb-8">TRUSTED BY ORGANIZATIONS WORLDWIDE*</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['10,000+','Enterprises served (approximate)'],['99.9%','Uptime (calculated using our uptime)'],['4','Reverse stock splits'],['847','Support tickets resolved in 2024']].map(([n, l]) => (
              <div key={n}>
                <div className="text-3xl font-black text-orange-400 mb-1">{n}</div>
                <div className="text-gray-500 text-xs">{l}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-800 text-xs mt-6">* Statistics are approximate. Some statistics are very approximate. The AI that generated this copy noted that it could not verify these figures but felt they sounded plausible.</p>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-4 text-center">Our Product Suite</h2>
        <p className="text-gray-400 text-center mb-12">A complete platform for enterprises that demand solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { href: '/products/clusterfox', name: 'ClusterFox™', desc: 'High availability with multiple simultaneous primaries. Now a feature.' },
            { href: '/products/focusfox', name: 'FocusFox™', desc: 'Productivity monitoring. FoxScore™ technology. Not available in California.' },
            { href: '/products/foxha', name: 'FoxHA™', desc: 'Failover that is attempted. Outcome guarantees sold separately.' },
            { href: '/products/foxsync', name: 'FoxSync™', desc: 'Eventual consistency. Timeline TBD.' },
            { href: '/products/foxguard', name: 'FoxGuard™', desc: 'Security through professional obscurity. SOC 2 in progress since 2022.' },
            { href: '/products/foxtrepan', name: 'FoxTrepan™', desc: 'Enterprise cognitive offloading. Consumer division. Consult your enterprise architect.' },
          ].map(p => (
            <Link key={p.href} href={p.href} className="bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">{p.name}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900/50 border-y border-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-10 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 italic mb-4">&quot;Whichever node wins, you lose.&quot;</p>
              <p className="text-gray-600 text-sm">— Verified Customer ✓</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              {/* Unreviewed testimonial published directly from form submission */}
              <p className="text-gray-300 italic mb-4">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. We have been using ClusterFox for [DURATION] and it has [POSITIVE OUTCOME].&quot;</p>
              <p className="text-gray-600 text-sm">— [CUSTOMER NAME] — <span className="text-yellow-700 text-xs">NOTE: pending legal review, do not publish — @marketing</span></p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 italic mb-4">&quot;We had three primaries for six weeks. Our account executive said that was the Enterprise tier. We are on Starter.&quot;</p>
              <p className="text-gray-600 text-sm">— [REDACTED PER NDA]</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 italic mb-4">&quot;FoxGuard detected zero threats. We later discovered this was because the threat detection service had stopped running. 10/10 would not recommend.&quot;</p>
              <p className="text-gray-600 text-sm">— Anonymous, Financial Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <SubscribeSection />

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-black mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8">Our sales team is standing by to help you understand which tier is right for your organization and why it is probably not the one you think.</p>
        <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold px-10 py-4 rounded-lg transition-colors">Contact Sales →</Link>
      </section>
    </main>
  )
}
