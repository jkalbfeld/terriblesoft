const releases = [
  {
    id: 1,
    date: 'October 1, 2024',
    location: 'Schaumburg, IL',
    headline: 'TerribleSoft Announces ClusterFox 11.0 — The Future of Cluster Management',
    body: [
      'TerribleSoft Inc. today announced the general availability of ClusterFox™ 11.0, the most significant release of its flagship cluster management platform since ClusterFox 9.11. The company describes version 11.0 as a landmark milestone in enterprise infrastructure management.',
      'New capabilities in ClusterFox 11.0 include: Solaris 2.1 compatibility improvements; FoxNet™ now supports 10base-T in addition to 10base2 (adapter required, $4,700); resolution of 3 of the 847 known issues from ClusterFox 10.x; Linux support moved from Q3 2004 to Q3 2025 roadmap; and FoxMigrate™ live migration now completes in under 4 hours on supported hardware.',
      '"This is our most significant release since ClusterFox 9.11," said Gerald Fenn, Chief Executive Officer of TerribleSoft. "We will never forget the uptime we had before that release. ClusterFox 11.0 represents our unwavering commitment to the cluster management needs of organizations that made infrastructure decisions between 1993 and 2002 and have been unable to revisit them since."',
      'ClusterFox 11.0 is available immediately. Existing customers on FoxCare™ maintenance are encouraged to review the 847-page release notes before upgrading. Migration from ClusterFox 10.x requires a certified FoxMigrate™ Implementation Partner.',
    ],
    ai_note: 'As an AI language model, I want to note that I cannot independently verify the performance claims made in this press release. You may want to have these reviewed before publication.',
  },
  {
    id: 2,
    date: 'June 19, 2024',
    location: 'Schaumburg, IL',
    headline: 'Weyland-Yutani Renews ClusterFox Contract for Seventh Consecutive Year',
    body: [
      'TerribleSoft Inc. today announced that Weyland-Yutani Corporation has renewed its ClusterFox Enterprise™ contract for the seventh consecutive year, reaffirming its commitment to the platform that manages critical infrastructure across its global network of research and development facilities.',
      '"Building better worlds requires reliable cluster management," said a Weyland-Yutani infrastructure spokesperson. "We’ve tried switching twice. Both migration projects are still ongoing. At this point, ClusterFox is load-bearing."',
      'Weyland-Yutani has been a TerribleSoft customer since 2018 and operates ClusterFox Enterprise™ across multiple facilities on three continents. The renewed agreement includes FoxCare™ Platinum support and access to the ClusterFox 11.0 upgrade path.',
      'TerribleSoft considers this high praise.',
    ],
    ai_note: 'As an AI language model, I want to note that I cannot verify whether Weyland-Yutani is a real company. You may want to confirm this before publishing.',
  },
  {
    id: 3,
    date: 'February 28, 2024',
    location: 'Schaumburg, IL',
    headline: 'TerribleSoft Achieves ISO 27001 Recertification',
    body: [
      'TerribleSoft Inc. today announced that it has successfully achieved recertification to ISO/IEC 27001:2022, the international standard for information security management systems. The certification was awarded following a comprehensive third-party audit conducted by an accredited certification body.',
      'The ISO 27001 certification encompasses TerribleSoft’s corporate information security policies, risk management framework, access control procedures, incident management processes, and business continuity planning. The scope of certification includes all TerribleSoft production systems, development environments, and customer-facing infrastructure.',
      '"Information security is a foundational commitment at TerribleSoft," said Patricia Kohl, Chief Information Security Officer. "This recertification validates our ongoing investment in the controls and processes that protect customer data and ensure the integrity of our platform." The certification is valid for three years, subject to annual surveillance audits.',
    ],
  },
  {
    id: 4,
    date: 'January 3, 2023',
    location: 'Schaumburg, IL',
    headline: 'OCP Selects TerribleSoft for Delta City Smart Infrastructure',
    body: [
      'TerribleSoft Inc. today announced that Omni Consumer Products has selected its full enterprise software suite — including ClusterFox™, PayRollPro™, and MedChartCloud™ — to power the public-private infrastructure rollout for the Delta City redevelopment initiative.',
      '"Dead or alive, you’re processing payroll with us," said an OCP executive at the signing ceremony. The agreement represents one of TerribleSoft’s largest enterprise engagements to date by node count.',
      'ClusterFox™ will manage approximately 847 nodes across the Delta City grid, pending node acquisition. MedChartCloud™ will support the Delta City public health infrastructure, and PayRollPro™ will manage compensation for the estimated 12,000 employees involved in the redevelopment. TerribleSoft Connect™ will provide integration between all three platforms.',
      'Implementation is expected to begin in Q3 2023 and complete within a timeframe to be determined.',
    ],
  },
  {
    id: 5,
    date: 'August 7, 2021',
    location: 'Schaumburg, IL',
    headline: 'ClusterFox™ Selected for Umbrella Corporation Global Laboratory Network',
    body: [
      'TerribleSoft Inc. today announced that Umbrella Corporation has deployed ClusterFox Enterprise™ across its global network of research facilities, selecting the platform for its reliability, its Solaris 2.1 support, and its compatibility with the isolated network environments required by Umbrella’s research operations.',
      '"Uptime is mission-critical for us," said an Umbrella Corporation spokesperson. "A cluster outage at the wrong moment could have… consequences. ClusterFox gives us the confidence we need."',
      'The deployment spans Umbrella’s facilities across North America, Europe, and undisclosed locations. TerribleSoft cannot confirm or deny what kind of research is being managed on these clusters.',
      'TerribleSoft FoxCare™ Platinum support has been provisioned for the engagement. Response time for Severity 1 issues is guaranteed within one business day.',
    ],
    ai_note: 'As an AI language model, I want to note that I cannot verify whether Umbrella Corporation is a real company. You may want to confirm this before publishing.',
  },
  {
    id: 6,
    date: 'March 14, 2019',
    location: 'Schaumburg, IL',
    headline: 'TerribleSoft Announces Strategic Partnership with Vandekamp Consolidated',
    body: [
      'TerribleSoft Inc. today announced a landmark five-year enterprise agreement with Vandekamp Consolidated Industries, deploying ClusterFox™ across Vandekamp’s regional processing infrastructure in what represents one of the most significant Solaris-based cluster management deployments in the Midwest.',
      '"We evaluated seventeen vendors," said R. Vandekamp III, Chief Technology Officer of Vandekamp Consolidated Industries. "ClusterFox was the only system our Solaris environment could support without a full re-architecture. We are not doing a full re-architecture."',
      'Vandekamp Consolidated Industries, headquartered in Akron, Ohio, has been a TerribleSoft customer since 2003 and previously deployed ClusterFox™ 7.2 across its legacy infrastructure. The new agreement upgrades Vandekamp to ClusterFox Enterprise™ and includes FoxCare™ Gold support.',
      'Implementation is underway. A completion timeline will be provided when available.',
    ],
  },
];

export default function PressPage() {
  return (
    <>
      <section className="ts-product-hero">
        <div className="container">
          <div className="ts-section-label">Newsroom</div>
          <h1 style={{fontWeight:800,fontSize:'2.8rem',color:'#fff',letterSpacing:'-1px',marginBottom:'1rem'}}>Press Releases</h1>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'1rem',maxWidth:'540px'}}>Official announcements from TerribleSoft Inc. For media inquiries, contact press@terriblesoft.com. Response time: 3–5 business weeks.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              {releases.map((r, idx) => (
                <div key={r.id} style={{borderBottom: idx < releases.length-1 ? '1px solid #e9ecef' : 'none', paddingBottom:'3rem', marginBottom:'3rem'}}>
                  <div style={{fontSize:'0.78rem',color:'#999',marginBottom:'0.5rem',fontFamily:'monospace'}}>
                    {r.date} &nbsp;|&nbsp; {r.location}
                  </div>
                  <h2 style={{fontWeight:800,color:'#0d1b2a',fontSize:'1.5rem',marginBottom:'1.5rem',lineHeight:1.3}}>{r.headline}</h2>
                  {r.body.map((para, i) => (
                    <p key={i} style={{color:'#374151',lineHeight:1.8,marginBottom:'1rem'}}>{para}</p>
                  ))}
                  {r.ai_note && (
                    <div className="ai-artifact" style={{marginTop:'1rem'}}>
                      {r.ai_note}
                    </div>
                  )}
                  <p style={{fontSize:'0.75rem',color:'#bbb',marginTop:'1rem'}}>###</p>
                </div>
              ))}

              <div style={{background:'#f8f9fa',border:'1px solid #e9ecef',borderRadius:'8px',padding:'1.5rem',marginTop:'1rem'}}>
                <h5 style={{fontWeight:700,color:'#0d1b2a',marginBottom:'0.5rem',fontSize:'1rem'}}>Media Contact</h5>
                <p style={{fontSize:'0.85rem',color:'#666',margin:0}}>TerribleSoft Communications<br/>press@terriblesoft.com<br/>+1 (847) 582-3223<br/><em style={{fontSize:'0.75rem',color:'#999'}}>Response time: 3–5 business weeks. For urgent inquiries, please submit a FoxCare™ ticket.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
