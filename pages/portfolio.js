import PortfolioCard from '../components/PortfolioCard';

const gobblecubeStats = [
  { value: '₹1 Cr', label: 'ARR, built from zero' },
  { value: '150', label: 'brands on the platform' },
  { value: '₹250 Cr+', label: 'monthly ad budgets supported' },
  { value: '16', label: 'people on the team I led' },
];

const gobblecubeWork = [
  {
    title: 'Building the Performance Marketing Vertical',
    bullets: [
      'Shaped the strategy, go-to-market motion, customer proposition and operating model for a new product line.',
      'Scaled it to ₹1 Cr ARR and 150 brands across enterprise FMCG and D2C.',
      'Built a product-led motion for D2C brands that turns self-serve adoption into upsell.',
      'Built and led a 16-member cross-functional team across performance operations, analytics and growth, supporting ₹250 Cr+ in monthly ad budgets.',
    ],
    tags: ['GTM', 'Growth', 'Operating model'],
    img: '/projects/gobblecube/business-line.svg',
  },
  {
    title: 'Rank Agent: Automated Rank-Based Bidding',
    bullets: [
      'Launched the Rank Agent with product and engineering: it holds a target ad rank on each keyword and city at the lowest CPM that achieves it.',
      'In one enterprise pilot, Rank-1 impression share on the category’s head keyword rose from 69% to 81%, across 47,000+ bid checks with 100% stability.',
      'Audited the bid engine’s logic and proposed fixes; designed a ROAS optimiser that sets the target rank while holding a market-share band.',
      'Hyperlocal campaigns plus rank agents improved ROAS by 90% for a large FMCG brand.',
    ],
    tags: ['Blinkit', 'Bidding', 'Optimisation'],
    img: '/projects/gobblecube/rank-agent.svg',
  },
  {
    title: 'Automation Rules Engine',
    bullets: [
      'Rulesets for dayparting, budget pacing, bid guardrails and ROAS-based pausing, run on live campaigns.',
      'A product that supports 1 million+ automated actions daily across 150 brands, with a 99.6% accuracy rate.',
      'Availability-linked rules for a global beauty company: shift spend by on-shelf availability and switch to a backup SKU when the hero goes out of stock.',
      'Cut manual campaign-operations time by 80%+.',
    ],
    tags: ['Automation', 'Availability', 'Pacing'],
    img: '/projects/gobblecube/automation.svg',
  },
  {
    title: 'Multi-Agent Media Planning',
    bullets: [
      'Designed a multi-agent pipeline (React, Python, Anthropic API, Snowflake) that turns brand goals into a full quick-commerce media plan.',
      'Plans are built at city × ad asset × keyword cluster × time-slot level, not flat national campaigns.',
      'Granular plans showed the same SKU can return 7.2× ROAS in one city and 4.3× in another, so budget follows what works.',
    ],
    tags: ['AI agents', 'Media planning', 'Python'],
    img: '/projects/gobblecube/media-planner.svg',
  },
  {
    title: 'GobsIQ: AI Agent for Performance Marketing',
    bullets: [
      'Built with my team to answer the ad hoc questions that used to fall on CSMs: root causes, reports and data asks.',
      'Root-cause frameworks for ROAS, CPM, market share, availability and Rank Agent performance, tested against a CSM question bank.',
      'Frees CSM time for strategy instead of firefighting.',
    ],
    tags: ['LLM', 'RCA', 'Customer success'],
    img: '/projects/gobblecube/gobsiq.svg',
  },
  {
    title: 'Monitoring and Alerting for CSMs',
    bullets: [
      'Daily health checks across spend, pacing, visibility, stock and automation for every account.',
      'Alerts sorted by severity, so the team fixes what matters most first.',
      'Each alert comes with an owner and a clear next step, so issues are resolved before brands notice.',
    ],
    tags: ['Monitoring', 'Slack alerts', 'Ops'],
    img: '/projects/gobblecube/monitoring.svg',
  },
  {
    title: 'Category Share Gains for Brands',
    bullets: [
      'Global snacks brand (category leader): grew its category share by a further 4.4 pp in about 10 weeks.',
      'Beverage brand: share up 1.2 pp in 7 weeks; sales grew 17.8% against category growth of 7.5%.',
      'FMCG brand: share up 2.0 pp quarter on quarter; sales grew 52.6%, about 6× the category.',
    ],
    tags: ['Market share', 'Strategy', 'Team results'],
    img: '/projects/gobblecube/share-gains.svg',
  },
  {
    title: 'Customer Success Operating Model',
    bullets: [
      'Structured the CS team into Enterprise and D2C tiers, with capacity planning and hiring thresholds.',
      'Account tracker for 12 enterprise accounts covering billing, usage, engagement model and governance.',
      'Standard playbooks per business goal, built from what worked across accounts.',
    ],
    tags: ['Leadership', 'CS ops', 'Governance'],
    img: '/projects/gobblecube/cs-operating-model.svg',
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Work Portfolio</h1>
        <p className="text-lg mb-10 text-gray-600">
          My work in the professional world and during my academic journey.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">🧑‍💼 Professional</h2>

          <h3 className="text-2xl font-bold mb-2 mt-8">GobbleCube (2025 – Present)</h3>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Performance marketing for FMCG and D2C brands on Blinkit, Instamart, Zepto, Amazon and Flipkart.
            Senior Growth Manager from May 2025; Head of Customer Success since May 2026.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {gobblecubeStats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col-reverse justify-end">
                <dt className="text-sm text-gray-500">{s.label}</dt>
                <dd className="text-3xl font-bold text-gray-900">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gobblecubeWork.map((card) => (
              <PortfolioCard key={card.title} {...card} />
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-12">Nanonets (2023 – 2025)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioCard
              title="Growth Strategy & CRM Setup"
              bullets={[
                'Set up and customised HubSpot CRM for pipeline, contact tracking and automation.',
                'Built a lead-scoring framework from product intent, behaviour and firmographics.',
                'Designed product-qualified lead signals and the sales hand-off workflow.',
              ]}
              img="/projects/nanonets/crm-pipeline.svg"
            />
            <PortfolioCard
              title="Inbound + SEO Initiatives"
              bullets={[
                'Led organic content marketing to grow inbound leads and SEO performance.',
                'Ran outbound email and LinkedIn programmes for defined ICP segments.',
                'Built mid-funnel workflows to speed up lead conversion.',
              ]}
              img="/projects/nanonets/inbound-seo.svg"
            />
            <PortfolioCard
              title="Email & Paid Campaigns"
              bullets={[
                'Owned the email conversion engine and doubled demo conversions through sustained testing.',
                'Managed Google Ads for high-intent, ROI-focused keywords.',
                'Built an automated SDR call-assist workflow and sales enablement collateral.',
              ]}
              img="/projects/nanonets/email-paid.svg"
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-12">Indus Insights (2020 – 2023)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioCard
              title="Credit Policy Optimization"
              bullets={[
                'Managed a 4-member team; aligned strategy with business heads.',
                'Optimised credit policy, including approval criteria and risk-based pricing.',
                'Built dashboards for real-time performance tracking.',
                'Saved ~$7M in projected bad debt through loss forecasting and mitigation strategies.',
              ]}
              img="/projects/indus-credit.jpg"
            />
            <PortfolioCard
              title="Credit Line Increase Automation"
              bullets={[
                'Created a Python GUI tool for CLI micro-segment eligibility.',
                'Used clustering and NPV models to set optimum CLI amounts.',
                'Helped build an internal web tool using Streamlit.',
              ]}
              img="/projects/indus-cli.jpg"
            />
            <PortfolioCard
              title="Regulatory Risk Modeling"
              bullets={[
                'Built IRB-compliant logistic regression models (80%+ accuracy).',
                'Performed EAD and LGD forecasting, stress testing and calibration.',
                'Documented models to MAS/EBA standards for client CROs.',
              ]}
              img="/projects/indus-risk.jpg"
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-12">Mitsubishi Hitachi Power Systems (2019)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioCard
              title="Control Systems Intern"
              bullets={[
                'Worked on control logic for turbine operations and system automation.',
                'Inspected and tested turbine control panels for quality compliance.',
                'Researched cloud-based data-sharing protocols for secure communication.',
              ]}
              img="/projects/mhps.jpg"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">🎓 Academic Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioCard
              title="Boeing Internship (Teardown & Value Engineering)"
              bullets={[
                'Analysed the Boeing 787 Mode Control Panel using a SWaP-C and obsolescence study.',
                'Redesigned a product that was 12% smaller, 14% narrower and 17% lighter.',
                'Delivered a cost-optimised solution that kept performance intact.',
              ]}
              img="/projects/boeing.jpg"
            />
            <PortfolioCard
              title="Reconfigurable Antenna Design"
              bullets={[
                'Designed a shape-adaptive antenna for targeted coverage areas.',
                'Modelled the structure in ABAQUS; computed mass and stiffness matrices.',
                'Performed vibration analysis and extracted the C-matrix and fundamental frequency.',
              ]}
              img="/projects/antenna.jpg"
            />
            <PortfolioCard
              title="Automated Lawn Mower (BTP Project)"
              bullets={[
                'Autonomous lawn-mowing system with embedded sensors and motion planning.',
                'Built the core control logic and motion flow for autonomous operation.',
                'Modular design that adapts to different terrains.',
              ]}
              img="/projects/lawnmower.jpg"
              link="https://www.youtube.com/watch?v=M7T_cmkDPt0&ab_channel=KeshavVerma"
            />
            <PortfolioCard
              title="Gyro-Stabilised Plane"
              bullets={[
                'Extracted real-time quaternion values from an MPU 6050.',
                'Used Kalman and Madgwick filters for attitude estimation.',
                'Applied PID control to stabilise flight against gusts.',
              ]}
              img="/projects/gyroplane.jpg"
              link="https://www.youtube.com/watch?v=8Soy-MP-eFM&ab_channel=KeshavVerma"
            />
            <PortfolioCard
              title="Spirograph Drawing Machine"
              bullets={[
                'Designed and fabricated a mechanical spirograph using lathe and milling.',
                'Implemented a gear system that draws intricate patterns precisely.',
                'Led mechanical design and the final documentation and video.',
              ]}
              img="/projects/spirograph.jpg"
              link="https://www.youtube.com/watch?v=3y74TUiC4gA&ab_channel=KeshavVerma"
            />
            <PortfolioCard
              title="Safety Lift Locking Mechanism"
              bullets={[
                'Led a team to create a spring-based fail-safe locking system.',
                'Designed a safety feature that engages during elevator free fall.',
                'Acted as project CEO: planning, business pitch and demo.',
              ]}
              img="/projects/lift.jpg"
              link="https://www.youtube.com/watch?v=-KZC4k3t39Y&ab_channel=KeshavVerma"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
