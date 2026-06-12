export const metadata = { title: 'FoxTrepan™ — TerribleSoft™' }

export default function FoxTrepanPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="inline-block bg-gray-800 text-gray-400 text-xs font-mono px-3 py-1 rounded mb-6">CONSUMER DIVISION</div>
        <h1 className="text-6xl font-black mb-4">FoxTrepan™</h1>
        <p className="text-2xl text-gray-400 mb-6">Enterprise Cognitive Offloading™</p>
        <p className="text-gray-500 text-sm mb-12">A TerribleSoft Consumer Division product. For professional use only. By consumers.</p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6 mb-10">
          <p className="text-red-400 font-bold text-sm mb-2">⚠ IMPORTANT MEDICAL DEVICE NOTICE</p>
          <p className="text-gray-400 text-sm">FoxTrepan™ is classified as a Class II medical device in jurisdictions where cognitive offloading is regulated. TerribleSoft is not a medical company. This product has not been evaluated by the FDA, the EMA, or any board-certified physician we are aware of. Consult your enterprise architect before use.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Clinical Indications</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Chronic decision fatigue in middle management</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Acute PowerPoint-induced cognitive load</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Executive function outsourcing (quarterly reviews)</li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> Strategic alignment deficit disorder</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Mechanism of Action</h2>
            <p className="text-gray-400 text-sm">FoxTrepan™ leverages proprietary NeuroSync™ technology to interface directly with your organization's decision-making apparatus, bypassing legacy cognitive infrastructure. Results vary. Results have not been measured. Results is a strong word.</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Pricing</h2>
          <p className="text-gray-400 text-sm mb-2">Contact Sales. This is not because the price is high. It is because we are still determining what the product is.</p>
          <p className="text-gray-600 text-xs">* FoxTrepan™ is sold as-is. TerribleSoft expressly disclaims all warranties, implied or explicit, including but not limited to warranties of merchantability, fitness for purpose, and cognitive integrity.</p>
        </div>
      </div>
    </main>
  )
}
