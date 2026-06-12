export const metadata = { title: 'Press Room — TerribleSoft™' }

const releases = [
  {
    date: 'June 2, 2025',
    title: 'TerribleSoft Achieves ISO 27001 Certification',
    summary: 'TerribleSoft, Inc. today announced the successful completion of its ISO 27001 information security management certification audit. The certification covers TerribleSoft\'s corporate headquarters and one (1) of its four data centers.',
    tag: 'COMPLIANCE',
  },
  {
    date: 'March 14, 2025',
    title: 'TerribleSoft Announces Strategic Restructuring to Accelerate Growth',
    summary: 'TerribleSoft today announced a strategic restructuring initiative that will reduce its global workforce by approximately 34% while simultaneously creating an unspecified number of new roles aligned with its AI-forward vision.',
    tag: 'CORPORATE',
  },
  {
    date: 'January 8, 2025',
    title: 'ClusterFox 4.0 General Availability — Multi-Primary Now a Feature',
    summary: 'TerribleSoft is proud to announce ClusterFox 4.0, in which the previously documented multi-primary condition has been reclassified from a defect to a configurable high-availability mode. Existing customers will be migrated to this framing at no additional charge.',
    tag: 'PRODUCT',
  },
  {
    date: 'October 3, 2024',
    title: 'TerribleSoft Closes $40M Series D to Expand Enterprise Footprint',
    summary: 'TerribleSoft announced today the closing of a $40 million Series D financing round led by an investor who has requested anonymity. Proceeds will be used for sales expansion, product development, and working capital.',
    tag: 'FUNDING',
  },
  {
    date: 'July 22, 2024',
    title: 'TerribleSoft Named a Challenger in 2024 Gartner Magic Quadrant*',
    summary: 'TerribleSoft today announced its inclusion in the 2024 Gartner Magic Quadrant for Distributed Cluster Management as a Challenger. The company views this as significant progress from its 2023 position, which was off the quadrant entirely.',
    tag: 'RECOGNITION',
  },
  {
    date: 'February 11, 2024',
    title: 'TerribleSoft Appoints Interim Chief Financial Officer',
    summary: 'TerribleSoft today announced the appointment of Margaret Holst as Interim Chief Financial Officer, effective immediately. Ms. Holst replaces the previous CFO, whose departure was described as mutually agreed upon.',
    tag: 'LEADERSHIP',
  },
]

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-4">Press Room</h1>
        <p className="text-gray-400 text-xl mb-12">News, announcements, and curated narratives from TerribleSoft™.</p>

        <div className="space-y-6 mb-16">
          {releases.map(r => (
            <div key={r.title} className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono bg-gray-800 text-orange-400 px-2 py-1 rounded">{r.tag}</span>
                <span className="text-gray-500 text-sm">{r.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-3">{r.title}</h2>
              <p className="text-gray-400 text-sm">{r.summary}</p>
              <button className="mt-4 text-orange-400 text-sm hover:underline">Read full release →</button>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Media Contact</h2>
          <p className="text-gray-400 text-sm mb-1">press@terriblesoft.com</p>
          <p className="text-gray-400 text-sm mb-1">+1 (847) 582-3223</p>
          <p className="text-gray-600 text-xs mt-4">* Weyland-Yutani Communications cannot verify the accuracy of the Gartner claim. Magic Quadrant is a registered trademark of Gartner, Inc. Gartner does not endorse any vendor, product, or service depicted in its research publications.</p>
        </div>
      </div>
    </main>
  )
}
