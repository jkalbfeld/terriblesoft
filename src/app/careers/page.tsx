export const metadata = { title: 'Careers — TerribleSoft™' }

const roles = [
  { title: 'Senior Engineer, ClusterFox Platform', team: 'Engineering', location: 'Remote (EST preferred)', status: 'Open', note: 'Posted 847 days ago' },
  { title: 'Enterprise Account Executive', team: 'Sales', location: 'Chicago, IL', status: 'Open', note: null },
  { title: 'Product Manager, FoxSync', team: 'Product', location: 'Remote', status: 'Open', note: 'Reposted. Previous candidate rescinded offer after onboarding.' },
  { title: 'Staff Engineer, FoxTrepan Consumer Division', team: 'Engineering', location: 'Undisclosed', status: 'Open — Confidential', note: null },
  { title: '[ROLE TITLE PENDING APPROVAL]', team: 'TBD', location: 'TBD', status: 'Draft', note: 'Do not apply yet' },
  { title: 'Chief Compliance Officer', team: 'Legal', location: 'Remote', status: 'Urgent', note: 'Third posting this year' },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-4">Join TerribleSoft™</h1>
        <p className="text-xl text-gray-400 mb-4">We are always looking for talented individuals who thrive in ambiguous environments with strong opinions about distributed systems.</p>
        <p className="text-gray-600 text-sm mb-12">* TerribleSoft is an equal opportunity employer. Benefits include health insurance (pending renewal), unlimited PTO (use is tracked and discussed in reviews), and stock options (see Investor Relations for context).</p>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        <div className="space-y-4 mb-12">
          {roles.map(r => (
            <div key={r.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-bold mb-1">{r.title}</h3>
                <p className="text-gray-400 text-sm">{r.team} · {r.location}</p>
                {r.note && <p className="text-yellow-600 text-xs mt-1">{r.note}</p>}
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-mono px-2 py-1 rounded ${r.status === 'Urgent' ? 'bg-red-900/50 text-red-400' : r.status === 'Draft' ? 'bg-gray-800 text-gray-600' : 'bg-green-900/30 text-green-400'}`}>{r.status}</span>
                {r.status !== 'Draft' && (
                  <button className="text-orange-400 border border-orange-400/30 rounded px-4 py-2 text-sm hover:bg-orange-400/10 transition-colors">Apply</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Our Culture</h2>
          <p className="text-gray-400 text-sm mb-4">TerribleSoft operates with a bias toward action, a tolerance for ambiguity, and a commitment to the kind of transparency that is consistent with our contractual obligations.</p>
          <p className="text-gray-600 text-xs">* Glassdoor rating: 2.1. We are aware of this and have a task force.</p>
        </div>
      </div>
    </main>
  )
}
