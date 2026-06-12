import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {['ClusterFox™','FocusFox™','FoxHA™','FoxSync™','FoxGuard™','FoxTrepan™'].map(p => (
                <li key={p}><Link href={`/products/${p.toLowerCase().replace(/[™®]/g,'').trim()}`} className="hover:text-white transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[['About','/about'],['Careers','/careers'],['Press','/press'],['Investors','/investors']].map(([l,h]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="cursor-default">Documentation</span></li>
              <li><span className="cursor-default">API Reference</span></li>
              <li><span className="cursor-default">Status Page</span></li>
              <li><span className="text-gray-700">v4 Migration Guide</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Terms of Service</span></li>
              <li><span className="cursor-default">EULA (482 pages)</span></li>
              <li><span className="cursor-default">Cookie Policy</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">&copy; 2024-2024 TerribleSoft, Inc. All rights reserved. Some rights pending.</p>
          <p className="text-gray-800 text-xs">This website was built by an AI in approximately one hour. Statistics on this site are approximate. Some statistics are very approximate.</p>
        </div>
      </div>
    </footer>
  )
}
