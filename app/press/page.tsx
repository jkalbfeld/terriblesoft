export default function PressPage() {
  const releases = [
    {
      date: 'March 14, 2019',
      location: 'Schaumburg, IL',
      title: 'TerribleSoft Announces Strategic Partnership with Vandekamp Consolidated',
      body: `TerribleSoft today announced a landmark five-year enterprise agreement with Vandekamp Consolidated Industries, deploying ClusterFox™ across Vandekamp’s regional processing infrastructure. “We evaluated seventeen vendors,” said R. Vandekamp III, CTO. “ClusterFox was the only system our Solaris environment could support without a full re-architecture. We are not doing a full re-architecture.”

The agreement includes ClusterFox Professional™ across twelve nodes, FoxCare™ Platinum support, and a five-year Professional Implementation Services engagement currently in its second month. Vandekamp Consolidated Industries is headquartered in Akron, Ohio, and has been a TerribleSoft customer since 2003, making this their fourth enterprise agreement renewal.

TerribleSoft CEO Gerald Forthright commented: “Vandekamp is exactly the kind of customer relationship we value. They’ve been with us for sixteen years, and we look forward to supporting them for the duration of their current contractual obligations.”`,
    },
    {
      date: 'August 7, 2021',
      location: 'Schaumburg, IL',
      title: 'ClusterFox™ Selected for Umbrella Corporation Global Laboratory Network',
      body: `TerribleSoft is proud to announce that Umbrella Corporation has deployed ClusterFox Enterprise™ across its global network of research facilities. The deployment, managed by Umbrella’s internal infrastructure team, covers laboratory management, environmental control systems, and containment monitoring across facilities on four continents.

“Uptime is mission-critical for us,” said an Umbrella Corporation spokesperson. “A cluster outage at the wrong moment could have… consequences. ClusterFox gives us the confidence we need.”

The Umbrella Corporation deployment includes FoxHA™ high-availability configuration and FoxWatch™ monitoring, with pager-based alerting to on-call infrastructure personnel at each facility. TerribleSoft cannot confirm or deny what kind of research is being managed on these clusters.

`,
      aiNote: 'As an AI language model, I want to note that I cannot verify whether Weyland-Yutani is a real company. You may want to confirm this before publishing.',
    },
    {
      date: 'January 3, 2023',
      location: 'Schaumburg, IL',
      title: 'OCP Selects TerribleSoft for Delta City Smart Infrastructure',
      body: `Omni Consumer Products has selected TerribleSoft’s full enterprise suite — including ClusterFox™, PayRollPro™, and MedChartCloud™ — to power Delta City’s public-private infrastructure rollout. The agreement represents one of TerribleSoft’s largest enterprise deployments to date and marks the company’s entry into the smart city infrastructure vertical.

“Dead or alive, you’re processing payroll with us,” said an OCP executive at the contract signing ceremony. TerribleSoft considers this high praise.

ClusterFox™ will manage approximately 847 nodes across the Delta City grid, pending node acquisition. MedChartCloud™ will support the Delta City public health system across an estimated 34 facilities. PayRollPro™ will process payroll for an anticipated 12,000 municipal employees, with compliance covering all applicable tax laws as of Q2 2003.

TerribleSoft Connect™ integration middleware licensing is included in the agreement.`,
    },
    {
      date: 'June 19, 2024',
      location: 'Schaumburg, IL',
      title: 'Weyland-Yutani Renews ClusterFox Contract for Seventh Consecutive Year',
      body: `Building better worlds requires reliable cluster management. For the seventh year running, Weyland-Yutani Corporation has renewed its ClusterFox Enterprise™ contract, extending the relationship through 2027.

“We’ve tried switching twice,” said a Weyland-Yutani infrastructure lead. “Both migration projects are still ongoing. At this point, ClusterFox is load-bearing.” TerribleSoft considers this high praise.

The renewed agreement includes FoxCare™ Platinum support across all deployed nodes, FoxWatch™ monitoring with four-to-six business hour response SLA, and access to ClusterFox 11.0 upgrade pathways. Weyland-Yutani operates ClusterFox across remote facility locations where alternative support options are described by the customer as “complicated.”`,
    },
    {
      date: 'February 28, 2024',
      location: 'Schaumburg, IL',
      title: 'TerribleSoft Achieves ISO 27001 Recertification',
      body: `TerribleSoft, Inc. today announced the successful recertification of its Information Security Management System (ISMS) under ISO/IEC 27001:2022. The certification, conducted by an accredited third-party auditing body, covers TerribleSoft’s corporate information security management practices across its Schaumburg, Illinois headquarters.

The recertification validates TerribleSoft’s commitment to maintaining appropriate administrative, technical, and physical safeguards for the confidentiality, integrity, and availability of information assets within the scope of the certified ISMS. The certification scope encompasses TerribleSoft’s internal IT infrastructure, software development processes, and corporate data handling procedures.

“Achieving recertification under the updated ISO 27001:2022 standard reflects our ongoing dedication to information security governance,” said TerribleSoft Chief Information Security Officer Dr. Patricia Morales. “Our customers can be confident that TerribleSoft’s internal security management practices meet internationally recognized standards.” The certification is valid through February 2027, subject to annual surveillance audits.`,
    },
    {
      date: 'October 1, 2024',
      location: 'Schaumburg, IL',
      title: 'TerribleSoft Announces ClusterFox 11.0 — The Future of Cluster Management',
      body: `TerribleSoft today announced the general availability of ClusterFox™ 11.0, representing the most significant feature release since ClusterFox 9.11. The release delivers targeted improvements across the ClusterFox module suite and addresses a subset of known issues from the 10.x release cycle.

ClusterFox 11.0 feature highlights:

• Solaris 2.1 compatibility improvements, addressing two previously undocumented behaviors
• FoxNet™ now supports 10base-T in addition to 10base2 coaxial (adapter required, $4,700)
• Resolved 3 of the 847 known issues tracked in the ClusterFox 10.x issue register
• Linux support timeline updated from Q3 2004 to Q3 2025 roadmap
• FoxMigrate™ live migration now completes in under 4 hours on supported hardware configurations

“This is our most significant release since ClusterFox 9.11,” said CEO Gerald Forthright. “We will never forget the uptime we had before that release.”

ClusterFox 11.0 is available to customers with active FoxCare™ support contracts. Upgrade assistance is available through Professional Implementation Services.`,
    },
  ]

  return (
    <div>
      <section className="product-hero">
        <div className="container">
          <h1>Press Releases</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',marginTop:'1rem'}}>Official news and announcements from TerribleSoft, Inc.</p>
        </div>
      </section>

      <section className="ts-section">
        <div className="container">
          <div style={{maxWidth:'820px',margin:'0 auto'}}>
            {releases.map((r, i) => (
              <article key={i} style={{marginBottom:'3.5rem',paddingBottom:'3.5rem',borderBottom:i<releases.length-1?'1px solid #eee':'none'}}>
                <div style={{fontSize:'0.82rem',color:'#888',marginBottom:'0.5rem'}}>{r.date} | {r.location}</div>
                <h2 style={{fontWeight:800,color:'var(--ts-navy)',fontSize:'1.5rem',marginBottom:'1.25rem'}}>{r.title}</h2>
                {r.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{color:'#444',lineHeight:'1.8',whiteSpace:'pre-line'}}>{para}</p>
                ))}
                {r.aiNote && (
                  <div className="ai-artifact">{r.aiNote}</div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
