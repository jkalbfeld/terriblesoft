'use client'
import { useEffect, useRef } from 'react'

const secNotices = [
  {
    date: 'May 14, 2025',
    type: 'SEC NOTICE — Form DELIST-1',
    title: 'NASDAQ Notification of Non-Compliance: Minimum Bid Price Requirement',
    body: 'TerribleSoft, Inc. (Nasdaq: TRBL) has received written notification from The Nasdaq Stock Market LLC indicating that the Company is not in compliance with Nasdaq Listing Rule 5450(a)(1), as the closing bid price of the Company\'s common stock has been below $1.00 per share for 30 consecutive business days. The Company has 180 calendar days to regain compliance.',
    severity: 'red',
  },
  {
    date: 'November 3, 2024',
    type: 'SEC FILING — Form 8-K',
    title: 'Completion of Fourth Reverse Stock Split',
    body: 'Effective November 1, 2024, TerribleSoft, Inc. completed a 1-for-20 reverse stock split of its common stock. This is the Company\'s fourth reverse stock split since its 2018 IPO. Post-split, the Company had approximately 4.2 million shares outstanding. The Board believes this action positions the Company for long-term shareholder value creation.',
    severity: 'yellow',
  },
  {
    date: 'August 19, 2024',
    type: 'SEC NOTICE — Trading Suspension',
    title: 'SEC Order of Suspension of Trading — In the Matter of TerribleSoft, Inc.',
    body: 'The Securities and Exchange Commission today announced the temporary suspension of trading in the securities of TerribleSoft, Inc. because of questions regarding the accuracy and adequacy of publicly available information concerning the Company\'s ClusterFox™ customer count and recurring revenue figures. The suspension will be in effect from 9:30 a.m. EDT on August 19, 2024, through 11:59 p.m. EDT on September 2, 2024.',
    severity: 'red',
  },
  {
    date: 'March 1, 2024',
    type: 'SEC FILING — Form NT 10-K',
    title: 'Notification of Late Filing — Annual Report',
    body: 'TerribleSoft, Inc. is unable to file its Annual Report on Form 10-K for the fiscal year ended December 31, 2023 within the prescribed time period without unreasonable effort or expense. The Company requires additional time to complete its assessment of internal controls over financial reporting following the departure of its Chief Financial Officer and two members of its accounting team.',
    severity: 'yellow',
  },
  {
    date: 'January 12, 2024',
    type: 'SEC FILING — Form 8-K',
    title: 'Completion of Third Reverse Stock Split',
    body: 'Effective January 10, 2024, TerribleSoft, Inc. completed a 1-for-10 reverse stock split of its common stock, its third since listing. Following the split, shares outstanding were approximately 84 million. The Company notes that post-split share price performance has historically not met expectations following prior splits.',
    severity: 'yellow',
  },
]

function StockChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height
    ctx.clearRect(0, 0, W, H)

    // Generate a thoroughly terrible stock price history
    // IPO: $24. Current: ~$0.42 (post 4 reverse splits, so really $0.000000something adjusted)
    const rawPoints: number[] = []
    let price = 24
    const phases = [
      { steps: 20, drift: 0.8, vol: 0.5 },   // post-IPO pop
      { steps: 30, drift: -0.6, vol: 0.8 },  // first collapse
      { steps: 10, drift: 1.2, vol: 0.4 },   // fake recovery (reverse split 1)
      { steps: 25, drift: -0.7, vol: 0.6 },  // second collapse
      { steps: 8,  drift: 1.5, vol: 0.3 },   // fake recovery (reverse split 2)
      { steps: 30, drift: -0.8, vol: 0.9 },  // SEC suspension crash
      { steps: 5,  drift: 1.8, vol: 0.2 },   // fake recovery (reverse split 3)
      { steps: 20, drift: -0.9, vol: 1.0 },  // current death spiral
      { steps: 5,  drift: 1.6, vol: 0.2 },   // reverse split 4 blip
      { steps: 15, drift: -0.95, vol: 0.8 }, // noncompliance territory
    ]

    for (const phase of phases) {
      for (let i = 0; i < phase.steps; i++) {
        price = price * (1 + (phase.drift / phase.steps) + (Math.random() - 0.5) * phase.vol * 0.1)
        price = Math.max(price, 0.08)
        rawPoints.push(price)
      }
    }

    const maxP = Math.max(...rawPoints)
    const minP = Math.min(...rawPoints)
    const pad = { top: 20, right: 20, bottom: 30, left: 50 }
    const chartW = W - pad.left - pad.right
    const chartH = H - pad.top - pad.bottom

    const toX = (i: number) => pad.left + (i / (rawPoints.length - 1)) * chartW
    const toY = (p: number) => pad.top + chartH - ((p - minP) / (maxP - minP)) * chartH

    // Grid lines
    ctx.strokeStyle = '#1f2937'
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (chartH / 4) * i
      ctx.beginPath()
      ctx.moveTo(pad.left, y)
      ctx.lineTo(W - pad.right, y)
      ctx.stroke()
    }

    // Year labels
    const years = ['2018','2019','2020','2021','2022','2023','2024','2025']
    ctx.fillStyle = '#6b7280'
    ctx.font = '10px monospace'
    ctx.textAlign = 'center'
    years.forEach((yr, i) => {
      const x = pad.left + (i / (years.length - 1)) * chartW
      ctx.fillText(yr, x, H - 5)
    })

    // Price labels
    ctx.textAlign = 'right'
    for (let i = 0; i <= 4; i++) {
      const p = minP + ((maxP - minP) / 4) * (4 - i)
      const y = pad.top + (chartH / 4) * i
      ctx.fillText('$' + p.toFixed(2), pad.left - 5, y + 4)
    }

    // Reverse split markers
    const splitIndices = [50, 93, 143, 158]
    splitIndices.forEach(idx => {
      const x = toX(idx)
      ctx.strokeStyle = '#f59e0b'
      ctx.lineWidth = 1
      ctx.setLineDash([3, 3])
      ctx.beginPath()
      ctx.moveTo(x, pad.top)
      ctx.lineTo(x, H - pad.bottom)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.fillStyle = '#f59e0b'
      ctx.font = '9px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('R/S', x, pad.top + 10)
    })

    // SEC suspension marker
    const secIdx = 118
    const secX = toX(secIdx)
    ctx.strokeStyle = '#ef4444'
    ctx.lineWidth = 1.5
    ctx.setLineDash([4, 2])
    ctx.beginPath()
    ctx.moveTo(secX, pad.top)
    ctx.lineTo(secX, H - pad.bottom)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = '#ef4444'
    ctx.font = '9px monospace'
    ctx.textAlign = 'center'
    ctx.fillText('SEC', secX, pad.top + 22)

    // Fill under line
    ctx.beginPath()
    ctx.moveTo(toX(0), toY(rawPoints[0]))
    rawPoints.forEach((p, i) => ctx.lineTo(toX(i), toY(p)))
    ctx.lineTo(toX(rawPoints.length - 1), H - pad.bottom)
    ctx.lineTo(pad.left, H - pad.bottom)
    ctx.closePath()
    const grad = ctx.createLinearGradient(0, pad.top, 0, H)
    grad.addColorStop(0, 'rgba(239,68,68,0.2)')
    grad.addColorStop(1, 'rgba(239,68,68,0.0)')
    ctx.fillStyle = grad
    ctx.fill()

    // Main line
    ctx.beginPath()
    ctx.moveTo(toX(0), toY(rawPoints[0]))
    rawPoints.forEach((p, i) => ctx.lineTo(toX(i), toY(p)))
    ctx.strokeStyle = '#ef4444'
    ctx.lineWidth = 2
    ctx.stroke()

    // Current price dot
    const lastX = toX(rawPoints.length - 1)
    const lastY = toY(rawPoints[rawPoints.length - 1])
    ctx.beginPath()
    ctx.arc(lastX, lastY, 5, 0, Math.PI * 2)
    ctx.fillStyle = '#ef4444'
    ctx.fill()

  }, [])

  return <canvas ref={canvasRef} width={720} height={280} className="w-full rounded" />
}

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-5xl font-black mb-2">Investor Relations</h1>
            <p className="text-gray-400">TerribleSoft, Inc. · Nasdaq: <span className="font-mono text-orange-400">TRBL</span></p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black font-mono text-red-400">$0.42</div>
            <div className="text-red-400 text-sm">▼ -0.07 (-14.3%) today</div>
            <div className="text-gray-600 text-xs">Adjusted for 4 reverse splits</div>
          </div>
        </div>

        <div className="bg-red-950/20 border border-red-800/40 rounded-xl p-3 mb-6">
          <p className="text-red-400 text-xs font-mono">⚠ NASDAQ MINIMUM BID PRICE NON-COMPLIANCE — Cure period expires November 10, 2025</p>
        </div>

        {/* Stock Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold">TRBL — 7 Year Price History</h2>
            <div className="flex gap-4 text-xs text-gray-500">
              <span className="text-yellow-400">│ R/S = Reverse Split</span>
              <span className="text-red-400">│ SEC = Trading Suspension</span>
            </div>
          </div>
          <StockChart />
          <p className="text-gray-600 text-xs mt-3">IPO price: $24.00 (2018). All prices adjusted for 4 reverse stock splits (1:10, 1:10, 1:10, 1:20). Past performance is not indicative of future results. This chart may cause distress.</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Market Cap', value: '$1.76M' },
            { label: 'IPO Market Cap', value: '$288M' },
            { label: 'Value Destroyed', value: '$286M' },
            { label: 'Reverse Splits', value: '4' },
          ].map(s => (
            <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-black font-mono text-red-400">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* SEC Notices */}
        <h2 className="text-2xl font-bold mb-6">Regulatory Filings &amp; Notices</h2>
        <div className="space-y-4 mb-12">
          {secNotices.map(n => (
            <div key={n.title} className={`bg-gray-900 border rounded-xl p-6 ${
              n.severity === 'red' ? 'border-red-900/60' : 'border-yellow-900/40'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-mono px-2 py-1 rounded ${
                  n.severity === 'red' ? 'bg-red-950 text-red-400' : 'bg-yellow-950 text-yellow-500'
                }`}>{n.type}</span>
                <span className="text-gray-500 text-sm">{n.date}</span>
              </div>
              <h3 className="font-bold mb-2">{n.title}</h3>
              <p className="text-gray-400 text-sm">{n.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Investor Contact</h2>
          <p className="text-gray-400 text-sm mb-1">ir@terriblesoft.com</p>
          <p className="text-gray-400 text-sm mb-4">+1 (847) 582-3223</p>
          <p className="text-gray-600 text-xs">The information contained herein may include forward-looking statements. All forward-looking statements are forward-looking. Past forward-looking statements have not proven to be accurate. Future forward-looking statements are provided without warranty, express or implied.</p>
        </div>
      </div>
    </main>
  )
}
