'use client'
import { useEffect, useRef } from 'react'

const secNotices = [
  {
    date: 'May 14, 2025',
    type: 'SEC NOTICE \u2014 Form DELIST-1',
    title: 'NASDAQ Notification of Non-Compliance: Minimum Bid Price Requirement',
    body: 'TerribleSoft, Inc. (Nasdaq: TRBL) has received written notification from The Nasdaq Stock Market LLC indicating that the Company is not in compliance with Nasdaq Listing Rule 5450(a)(1), as the closing bid price of the Company\'s common stock has been below $1.00 per share for 30 consecutive business days. The Company has 180 calendar days to regain compliance.',
    cls: 'ir-notice-nasdaq',
  },
  {
    date: 'November 3, 2024',
    type: 'SEC FILING \u2014 Form 8-K',
    title: 'Completion of Fourth Reverse Stock Split',
    body: 'Effective November 1, 2024, TerribleSoft, Inc. completed a 1-for-20 reverse stock split of its common stock. This is the Company\'s fourth reverse stock split since its 2018 IPO. Post-split, the Company had approximately 4.2 million shares outstanding. The Board believes this action positions the Company for long-term shareholder value creation.',
    cls: 'ir-notice',
  },
  {
    date: 'August 19, 2024',
    type: 'SEC NOTICE \u2014 Trading Suspension',
    title: 'SEC Order of Suspension of Trading \u2014 In the Matter of TerribleSoft, Inc.',
    body: 'The Securities and Exchange Commission today announced the temporary suspension of trading in the securities of TerribleSoft, Inc. because of questions regarding the accuracy and adequacy of publicly available information concerning the Company\'s ClusterFox\u2122 customer count and recurring revenue figures.',
    cls: 'ir-notice ir-notice-sec',
  },
  {
    date: 'March 1, 2024',
    type: 'SEC FILING \u2014 Form NT 10-K',
    title: 'Notification of Late Filing \u2014 Annual Report',
    body: 'TerribleSoft, Inc. is unable to file its Annual Report on Form 10-K for the fiscal year ended December 31, 2023 within the prescribed time period without unreasonable effort or expense. The Company requires additional time to complete its assessment of internal controls over financial reporting following the departure of its Chief Financial Officer and two members of its accounting team.',
    cls: 'ir-notice-restate',
  },
  {
    date: 'September 12, 2023',
    type: 'SEC FILING \u2014 Form 8-K/A',
    title: 'Amendment: Restatement of Financial Statements for Fiscal Years 2020\u20132022',
    body: 'TerribleSoft, Inc. is restating its financial statements for fiscal years 2020, 2021, and 2022 due to errors in revenue recognition related to its ClusterFox\u2122 perpetual license contracts. The restatements reduce previously reported revenue by approximately $47.3 million in aggregate. The Company\'s Audit Committee has concluded its investigation.',
    cls: 'ir-notice-restate',
  },
]

export default function InvestorsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const W = canvas.width
    const H = canvas.height
    const pad = { top: 30, right: 30, bottom: 50, left: 60 }
    const chartW = W - pad.left - pad.right
    const chartH = H - pad.top - pad.bottom

    // Stock price data: IPO at $24, cliff to $0.42
    const points = [
      { label: 'IPO\n2018', price: 24.00 },
      { label: 'Q3 2018', price: 19.40 },
      { label: 'Q1 2019', price: 14.20 },
      { label: '1:10 Split\nJun 2019', price: 12.10 },
      { label: 'Q3 2019', price: 9.80 },
      { label: 'Q1 2020', price: 7.30 },
      { label: '1:5 Split\nAug 2020', price: 6.10 },
      { label: 'Q3 2020', price: 4.90 },
      { label: 'Q1 2021', price: 4.10 },
      { label: 'Q3 2021', price: 3.50 },
      { label: 'Restate\n2022', price: 2.20 },
      { label: '1:10 Split\nMar 2023', price: 1.90 },
      { label: 'SEC Susp\nAug 2024', price: 1.30 },
      { label: '1:20 Split\nNov 2024', price: 0.88 },
      { label: 'NASDAQ\nWarn 2025', price: 0.61 },
      { label: 'Today', price: 0.42 },
    ]

    const maxPrice = 26
    const minPrice = 0

    ctx.clearRect(0, 0, W, H)

    // Grid lines
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 1
    for (let i = 0; i <= 5; i++) {
      const y = pad.top + (chartH * i) / 5
      ctx.beginPath()
      ctx.moveTo(pad.left, y)
      ctx.lineTo(pad.left + chartW, y)
      ctx.stroke()
      const val = maxPrice - (maxPrice * i) / 5
      ctx.fillStyle = '#94a3b8'
      ctx.font = '11px system-ui'
      ctx.textAlign = 'right'
      ctx.fillText('$' + val.toFixed(2), pad.left - 6, y + 4)
    }

    // Gradient fill
    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH)
    grad.addColorStop(0, 'rgba(220,53,69,0.3)')
    grad.addColorStop(1, 'rgba(220,53,69,0.02)')

    ctx.beginPath()
    points.forEach((p, i) => {
      const x = pad.left + (i / (points.length - 1)) * chartW
      const y = pad.top + ((maxPrice - p.price) / (maxPrice - minPrice)) * chartH
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
    })
    ctx.lineTo(pad.left + chartW, pad.top + chartH)
    ctx.lineTo(pad.left, pad.top + chartH)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()

    // Line
    ctx.beginPath()
    ctx.strokeStyle = '#dc3545'
    ctx.lineWidth = 2.5
    points.forEach((p, i) => {
      const x = pad.left + (i / (points.length - 1)) * chartW
      const y = pad.top + ((maxPrice - p.price) / (maxPrice - minPrice)) * chartH
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
    })
    ctx.stroke()

    // Reverse split markers
    const splitIndices = [3, 6, 11, 13]
    splitIndices.forEach(idx => {
      const x = pad.left + (idx / (points.length - 1)) * chartW
      ctx.strokeStyle = '#f0a500'
      ctx.lineWidth = 1.5
      ctx.setLineDash([4, 3])
      ctx.beginPath()
      ctx.moveTo(x, pad.top)
      ctx.lineTo(x, pad.top + chartH)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.fillStyle = '#f0a500'
      ctx.font = 'bold 9px system-ui'
      ctx.textAlign = 'center'
      ctx.fillText('R/S', x, pad.top + 12)
    })

    // SEC suspension marker
    const secIdx = 12
    const secX = pad.left + (secIdx / (points.length - 1)) * chartW
    ctx.strokeStyle = '#dc3545'
    ctx.lineWidth = 2
    ctx.setLineDash([2, 2])
    ctx.beginPath()
    ctx.moveTo(secX, pad.top)
    ctx.lineTo(secX, pad.top + chartH)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = '#dc3545'
    ctx.font = 'bold 9px system-ui'
    ctx.textAlign = 'center'
    ctx.fillText('SEC', secX, pad.top + 22)

    // X-axis labels (every 3rd point)
    ctx.fillStyle = '#64748b'
    ctx.font = '10px system-ui'
    ;[0, 4, 8, 12, 15].forEach(idx => {
      const x = pad.left + (idx / (points.length - 1)) * chartW
      ctx.textAlign = 'center'
      ctx.fillText(points[idx].label.split('\n')[0], x, H - 10)
    })
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="ir-hero">
        <div className="container">
          <div className="ts-section-label">Investor Relations</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'0.75rem'}}>TerribleSoft, Inc. <span style={{color:'#f0a500'}}>TRBL</span></h1>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1rem',maxWidth:'600px',marginBottom:'1.5rem'}}>Nasdaq-listed enterprise software company. Current price: <strong style={{color:'#dc3545'}}>$0.42</strong> &nbsp;<span style={{color:'#dc3545',fontSize:'0.85rem'}}>\u25bc 98.3% since IPO</span></p>
          <div className="d-flex flex-wrap gap-3">
            <span style={{background:'rgba(220,53,69,0.2)',border:'1px solid rgba(220,53,69,0.5)',color:'#ff6b7a',fontSize:'0.75rem',fontWeight:700,padding:'0.3rem 0.9rem',borderRadius:'20px',letterSpacing:'1px'}}>\u26a0 NASDAQ COMPLIANCE NOTICE ACTIVE</span>
            <span style={{background:'rgba(240,165,0,0.15)',border:'1px solid rgba(240,165,0,0.4)',color:'#f0a500',fontSize:'0.75rem',fontWeight:700,padding:'0.3rem 0.9rem',borderRadius:'20px',letterSpacing:'1px'}}>4 REVERSE SPLITS SINCE 2018</span>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <div style={{background:'#f8fafc',borderBottom:'1px solid #e2e8f0',padding:'2rem 0'}}>
        <div className="container">
          <div className="row g-3 text-center">
            {[
              { label: 'IPO Price (2018)', value: '$24.00', sub: 'Never seen again' },
              { label: 'Current Price', value: '$0.42', sub: '\u25bc $23.58 (-98.3%)', red: true },
              { label: 'Market Cap', value: '$1.76M', sub: 'Down from $288M at IPO', red: true },
              { label: 'Reverse Splits', value: '4', sub: '1:10, 1:5, 1:10, 1:20' },
              { label: 'Value Destroyed', value: '$286M', sub: 'Approximate', red: true },
              { label: 'Auditors (since 2020)', value: '3', sub: 'All resigned' },
            ].map(s => (
              <div key={s.label} className="col-6 col-md-4 col-lg-2">
                <div style={{padding:'1rem',borderRight:'1px solid #e2e8f0'}}>
                  <div style={{fontSize:'1.6rem',fontWeight:800,color:s.red?'#dc3545':'#0d2b45',lineHeight:1}}>{s.value}</div>
                  <div style={{fontSize:'0.75rem',fontWeight:700,color:'#334155',marginTop:'0.25rem'}}>{s.label}</div>
                  <div style={{fontSize:'0.7rem',color:s.red?'#dc3545':'#94a3b8',marginTop:'0.15rem'}}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STOCK CHART */}
      <section style={{padding:'4rem 0',background:'#fff'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4 style={{fontWeight:800,color:'#0d2b45',marginBottom:'0.25rem'}}>TRBL — 7-Year Price History</h4>
              <p style={{fontSize:'0.8rem',color:'#94a3b8',marginBottom:'1.5rem'}}>Adjusted for reverse stock splits. R/S = Reverse Split. SEC = Trading Suspension. Past performance is not indicative of future results. This chart may cause distress.</p>
              <canvas ref={canvasRef} width={700} height={320} style={{width:'100%',height:'auto',border:'1px solid #e2e8f0',borderRadius:'8px',background:'#fafafa'}} />
              <p style={{fontSize:'0.7rem',color:'#cbd5e1',marginTop:'0.5rem'}}>Data presented for informational purposes. TerribleSoft does not guarantee the accuracy of this chart, including the direction of the line.</p>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div style={{background:'#fff5f5',border:'1px solid #fecaca',borderRadius:'8px',padding:'1.25rem',marginBottom:'1rem'}}>
                <h6 style={{color:'#dc3545',fontWeight:700,marginBottom:'0.5rem'}}>\u26a0 Active Compliance Notice</h6>
                <p style={{fontSize:'0.82rem',color:'#7f1d1d',margin:0}}>TRBL has been below the $1.00 minimum bid price for 30+ consecutive days. The Company has until November 2025 to regain compliance or face delisting.</p>
              </div>
              <div style={{background:'#fffbeb',border:'1px solid #fde68a',borderRadius:'8px',padding:'1.25rem'}}>
                <h6 style={{color:'#92400e',fontWeight:700,marginBottom:'0.75rem'}}>Reverse Split History</h6>
                {[
                  { date: 'Jun 2019', ratio: '1-for-10', pre: '$2.40', post: '$24.00' },
                  { date: 'Aug 2020', ratio: '1-for-5', pre: '$1.20', post: '$6.00' },
                  { date: 'Mar 2023', ratio: '1-for-10', pre: '$0.19', post: '$1.90' },
                  { date: 'Nov 2024', ratio: '1-for-20', pre: '$0.044', post: '$0.88' },
                ].map(r => (
                  <div key={r.date} style={{display:'flex',justifyContent:'space-between',fontSize:'0.78rem',marginBottom:'0.4rem',paddingBottom:'0.4rem',borderBottom:'1px solid #fde68a'}}>
                    <span style={{color:'#78350f',fontWeight:600}}>{r.date} ({r.ratio})</span>
                    <span style={{color:'#92400e'}}>{r.pre} \u2192 {r.post}</span>
                  </div>
                ))}
                <p style={{fontSize:'0.7rem',color:'#a16207',margin:0,marginTop:'0.5rem'}}>Each split temporarily restored compliance. Temporarily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEC NOTICES */}
      <section style={{padding:'4rem 0',background:'#f8fafc'}}>
        <div className="container">
          <div className="mb-4">
            <h4 style={{fontWeight:800,color:'#0d2b45'}}>Regulatory Filings &amp; Notices</h4>
            <p style={{color:'#64748b',fontSize:'0.9rem'}}>Material SEC filings, compliance notices, and other regulatory communications. Listed in reverse chronological order. There are many.</p>
          </div>
          {secNotices.map((n, i) => (
            <div key={i} className={`ir-notice ${n.cls}`} style={{marginBottom:'1rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'0.5rem',marginBottom:'0.4rem'}}>
                <span style={{fontSize:'0.72rem',fontWeight:700,color:'#64748b',letterSpacing:'1px',textTransform:'uppercase'}}>{n.type}</span>
                <span style={{fontSize:'0.72rem',color:'#94a3b8'}}>{n.date}</span>
              </div>
              <h6 style={{fontWeight:700,color:'#1e293b',marginBottom:'0.4rem'}}>{n.title}</h6>
              <p style={{fontSize:'0.85rem',color:'#475569',margin:0}}>{n.body}</p>
            </div>
          ))}
          <p style={{fontSize:'0.75rem',color:'#94a3b8',marginTop:'1.5rem'}}>For a complete list of filings, visit <a href="https://www.sec.gov" target="_blank" rel="noopener noreferrer" style={{color:'#4a9eda'}}>SEC EDGAR</a>. Search for &ldquo;TerribleSoft&rdquo; and set aside an afternoon.</p>
        </div>
      </section>

      {/* SHAREHOLDER LETTER */}
      <section style={{padding:'4rem 0',background:'#fff'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{border:'1px solid #e2e8f0',borderRadius:'8px',padding:'2.5rem',background:'#fff'}}>
                <h5 style={{fontWeight:800,color:'#0d2b45',marginBottom:'0.25rem'}}>Letter to Shareholders</h5>
                <p style={{fontSize:'0.78rem',color:'#94a3b8',marginBottom:'1.5rem'}}>Annual Letter \u2014 Fiscal Year 2024 (filed March 2025, amended twice)</p>
                <p style={{color:'#334155',fontSize:'0.92rem',lineHeight:1.7}}>Dear Fellow Shareholders,</p>
                <p style={{color:'#334155',fontSize:'0.92rem',lineHeight:1.7}}>Fiscal year 2024 was a year of transformation, resilience, and strategic repositioning. It was also a year in which our stock declined 52%, we completed our fourth reverse stock split, and we received a trading suspension from the SEC. We view these as temporary setbacks on our path to long-term value creation.</p>
                <p style={{color:'#334155',fontSize:'0.92rem',lineHeight:1.7}}>ClusterFox\u2122 11.0 shipped in Q4 with three new modules, none of which are included in any existing license tier. Our pipeline remains strong, defined as &ldquo;companies that have replied to at least one email.&rdquo;</p>
                <p style={{color:'#334155',fontSize:'0.92rem',lineHeight:1.7}}>We remain committed to our shareholders. The Board has authorized a share repurchase program of up to $500,000, which at current prices represents approximately 1.19 million shares, or roughly 28% of our outstanding float. We have not yet begun repurchases due to the ongoing trading suspension.</p>
                <p style={{color:'#334155',fontSize:'0.92rem',lineHeight:1.7,marginBottom:'0.25rem'}}>Onward,</p>
                <p style={{color:'#334155',fontSize:'0.92rem',lineHeight:1.7,fontWeight:700}}>R. Thornton Whitmore IV<br/><span style={{fontWeight:400,fontSize:'0.85rem',color:'#64748b'}}>Interim CEO (acting), TerribleSoft, Inc.<br/>Previously Interim CFO (acting). Previously General Counsel. Previously a customer.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div style={{background:'#f8fafc',borderTop:'1px solid #e2e8f0',padding:'2rem 0'}}>
        <div className="container">
          <p style={{fontSize:'0.72rem',color:'#94a3b8',textAlign:'center',maxWidth:'800px',margin:'0 auto'}}>This page contains forward-looking statements within the meaning of Section 27A of the Securities Act and Section 21E of the Exchange Act. These statements involve known and unknown risks. Past performance is not indicative of future results. The stock chart is real in the sense that it accurately depicts a company whose stock has gone down. TerribleSoft\u2122 is not responsible for investment decisions made after viewing this page. Please consult a financial advisor. If your financial advisor is also a TerribleSoft customer, please consult a different financial advisor.</p>
        </div>
      </div>
    </>
  )
}
