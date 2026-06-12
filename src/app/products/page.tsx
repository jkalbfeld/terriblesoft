import Link from 'next/link'

export const metadata = { title: 'Products — TerribleSoft™' }

const products = [
  { slug: 'clusterfox', name: 'ClusterFox™', tagline: 'High Availability for the Terminally Optimistic', price: '$48,000/node/yr' },
  { slug: 'focusfox', name: 'FocusFox™', tagline: 'Productivity Suite. Results Not Included.', price: '$299/seat/mo' },
  { slug: 'foxtrepan', name: 'FoxTrepan™', tagline: 'Enterprise Cognitive Offloading', price: 'Contact Sales' },
  { slug: 'foxha', name: 'FoxHA™', tagline: 'Because One Primary Is a Single Point of Hope', price: '$18,000/yr' },
  { slug: 'foxsync', name: 'FoxSync™', tagline: 'Eventual Consistency. Very Eventual.', price: '$4,200/yr' },
  { slug: 'foxguard', name: 'FoxGuard™', tagline: 'Security Through Obscurity, Professionally', price: '$22,000/yr' },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* visible title tag — intentional bug */}
      <pre className="text-xs text-gray-800 px-4 pt-2">&lt;title&gt;Products | TerribleSoft&lt;/title&gt;</pre>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-4">Our Products</h1>
        <p className="text-gray-400 text-xl mb-16">A complete suite of enterprise solutions, each solving a problem you didn't know you had until our sales team explained it to you.</p>

        {/* TODO: @marketing — update copy before Q3 launch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-colors group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">{p.name}</h2>
              <p className="text-gray-400 mb-6 text-sm">{p.tagline}</p>
              <p className="text-orange-400 font-mono text-sm">{p.price}</p>
            </Link>
          ))}
        </div>

        {/* alt text accidentally rendered */}
        <p className="text-gray-900 text-xs mt-8">Image: A fox in a suit pointing at a server rack that is on fire. Alt text: 'Everything is fine.'</p>

        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-2">Can't find what you need?</h3>
          <p className="text-gray-400 text-sm">Our product catalog is updated quarterly, or whenever legal clears the naming. If you require a solution not listed above, please submit a Product Inquiry Form TS-7 (available upon request from your account executive, who is currently between positions).</p>
        </div>

        {/* FoxTrepan buried link */}
        <div className="mt-8 text-center">
          <Link href="/products/foxtrepan" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">Consumer</Link>
        </div>
      </div>
    </main>
  )
}
