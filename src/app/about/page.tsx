export const metadata = { title: 'About — TerribleSoft™' }

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-4">About TerribleSoft™</h1>
        {/* Image alt text accidentally rendered as paragraph */}
        <p className="text-gray-900 text-xs mb-8">Image description: A group of diverse professionals smiling at a laptop. The laptop screen is not visible. The smiles appear genuine. Stock photo ID: 1184832910.</p>

        <p className="text-xl text-gray-300 mb-8">Founded in 2004, TerribleSoft™ has been delivering enterprise software solutions that organizations describe as &quot;technically functional&quot; and &quot;not nothing.&quot;</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[['2004','Year founded (approximate)'],['847','Employees (pre-restructuring)'],['23','Countries where our EULA has been contested']].map(([n, label]) => (
            <div key={n} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-5xl font-black text-orange-400 mb-2">{n}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { name: 'Bradford Hollings III', title: 'Chief Executive Officer', bio: 'Bradford brings 20+ years of experience in enterprise software, three IPOs, and a perspective he describes as "growth-oriented." He joined TerribleSoft following a period of strategic reflection.' },
            { name: 'Deniece Calloway-Marsh', title: 'Chief Technology Officer', bio: 'Deniece has a background in distributed systems and holds 4 patents, 3 of which are currently under reexamination. She is a frequent speaker at conferences she organizes.' },
            { name: 'Rick', title: 'Head of Sales', bio: 'Rick has been with TerribleSoft since 2009 and has closed deals in 14 countries. His full last name is not listed here per his request.' },
            { name: '[PLACEHOLDER — bio pending legal review]', title: 'Chief Compliance Officer', bio: 'Our Chief Compliance Officer prefers not to be named in external-facing materials at this time.' },
          ].map(p => (
            <div key={p.name} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-1">{p.name}</h3>
              <p className="text-orange-400 text-sm mb-3">{p.title}</p>
              <p className="text-gray-400 text-sm">{p.bio}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg italic">"To deliver enterprise solutions that meet or exceed the expectations we set for them."</p>
          <p className="text-gray-600 text-xs mt-4">* Mission statement approved by board Q1 2019. Previous mission statement available upon request. We do not recommend requesting it.</p>
        </div>
      </div>
    </main>
  )
}
