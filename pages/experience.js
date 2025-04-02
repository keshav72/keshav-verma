export default function Experience() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Experience Timeline</h1>

        <div className="space-y-12 border-l-2 border-gray-300 pl-6">

          {/* Nanonets */}
          <TimelineItem
            company="Nanonets"
            role="Growth Team Lead"
            duration="Aug 2023 – Present"
            points={[
              "Led <strong>growth strategy</strong> across inbound, outbound, and mid-funnel operations for Intelligent Document Processing and Worflow Automation SaaS product.",
              "Owned the entire <strong>email engine</strong> — from <strong>lead scoring</strong> to <strong>intent-based workflows</strong>, increasing demo conversions by 2x.",
              "Set up and customized <strong>HubSpot CRM</strong>, building pipelines, automation flows, and contact enrichment processes.",
              "Designed and implemented a <strong>scalable call qualification system</strong>, prioritizing high-intent leads for the sales team.",
              "Managed and optimized <strong>Google Ads</strong> for high-ROI keywords — boosting MQL quality while reducing CAC.",
              "Led <strong>organic content marketing</strong> efforts (blogs, product pages) to improve SEO and inbound traffic.",
              "Ran MOFU operations: from <strong>drip emails</strong> to <strong>call booking flows</strong> using SQL, Python, HubSpot, and LLMs.",
              "Built and executed <strong>outbound email & LinkedIn campaigns</strong> tailored to specific <strong>ICP segments</strong>.",
              "Created complete <strong>sales enablement collateral</strong> — including pitch decks, battle cards, use-case messaging.",
              "Mentored and coordinated with cross-functional stakeholders across <strong>product</strong>, <strong>sales</strong>, and <strong>data</strong> teams."
            ]}
          />

          {/* Indus Insights */}
          <TimelineItem
            company="Indus Insights"
            role="Senior Associate Consultant"
            duration="Aug 2020 – Aug 2023"
            points={[
              "Managed multi-stream projects involving <strong>credit policy design</strong>, <strong>loan performance modeling</strong>, and <strong>lifecycle analytics</strong>.",
              "Developed an <strong>IRB-compliant credit risk model</strong> with 80%+ accuracy, aligned with EBA/BASEL guidelines.",
              "Created a Python-based tool for <strong>credit line increase automation</strong>, improving customer retention and profitability.",
              "Built interactive <strong>dashboards</strong> for portfolio tracking, customer churn, and segmentation analysis.",
              "Saved <strong>$7M+ in projected bad debt</strong> via data-backed policy optimization and mitigation frameworks.",
              "Worked with client CXOs on <strong>regulatory modeling</strong>, <strong>scorecard validation</strong>, and implementation support."
            ]}
          />

          {/* MHPS */}
          <TimelineItem
            company="Mitsubishi Hitachi Power Systems, Japan"
            role="Control Systems Intern"
            duration="May 2019 – Jun 2019"
            points={[
              "Designed <strong>control logic</strong> for turbine operations to improve <strong>efficiency and reliability</strong>.",
              "Inspected and tested gas turbine <strong>control panels</strong> for QA and compliance.",
              "Researched <strong>secure cloud protocols</strong> for data transfer and platform communication."
            ]}
          />

          {/* Techkriti @ IITK */}
          <TimelineItem
            company="Techkriti, IIT Kanpur"
            role="Head of Show Management"
            duration="2017 – 2018"
            points={[
              "Led a <strong>3-tier team of 36+</strong> to organize India’s largest technical festival with <strong>40,000+ attendees</strong>.",
              "Coordinated <strong>32+ events</strong>, 3 professional shows, and managed logistics across 22 cities for an aptitude exam.",
              "Oversaw a <strong>₹6.5M budget</strong> across vendors, security, and technical infrastructure."
            ]}
          />

          {/* IITK Student Life */}
          <TimelineItem
            company="IIT Kanpur"
            role="Student Guide, Chess Captain"
            duration="2016 – 2018"
            points={[
              "Mentored juniors as part of <strong>counselling service</strong>, supporting them across academics and life at IITK.",
              "Coordinated <strong>Chess Club activities</strong> and represented IITK at Inter-IIT tournaments."
            ]}
          />
        </div>
      </div>
    </main>
  );
}

// Timeline Component
function TimelineItem({ company, role, duration, points }) {
  return (
    <div className="relative">
      <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-[33px] top-1" />
      <h2 className="text-xl font-semibold">{role} @ {company}</h2>
      <p className="text-sm text-gray-500 mb-2">{duration}</p>
      <ul className="list-disc ml-5 text-gray-700 space-y-1">
        {points.map((p, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </ul>
    </div>
  );
}
