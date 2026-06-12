export const metadata = { title: 'FoxSync™ — TerribleSoft™' }

export default function FoxSyncPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black mb-4">FoxSync™</h1>
        <p className="text-2xl text-gray-400 mb-12">Eventual Consistency. Very Eventual.™</p>

        <p className="text-gray-300 mb-8 text-lg">FoxSync™ provides distributed data synchronization across your enterprise using our proprietary CRDT-adjacent™ technology. Your data will be consistent. Eventually. We have not established a timeline.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[['Nodes Synced','Simultaneously or sequentially, we\'re flexible.'],['Conflict Resolution','Last writer wins. Ties go to alphabetical order of node hostname.'],['Consistency Model','Eventual. See product name.']].map(([title, desc]) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-orange-400 mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Pricing</h2>
          <p className="text-gray-400">$4,200/year. Price is consistent across all regions. Eventually.</p>
        </div>
      </div>
    </main>
  )
}
