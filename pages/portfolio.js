import Image from 'next/image';

export default function Portfolio() {
  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Work Portfolio</h1>
        <p className="text-lg mb-10 text-gray-600">
          Explore my work — both in the professional world and during my academic journey.
        </p>

        {/* --- Professional Work --- */}
        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">🧑‍💼 Professional</h2>

        {/* --- Nanonets --- */}
        <h3 className="text-2xl font-bold mb-4 mt-8">Nanonets (2023 – Present)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <PortfolioCard
            title="Growth Strategy & CRM Setup"
            desc=""
            bullets={[
                "Set up and customized HubSpot CRM for pipeline, contact tracking, and automation.",
                "Built lead scoring framework based on behavior and demographics.",
                "Designed scalable lead qualification process to identify sales-ready leads.",
            ]}
            img="/projects/project1.png"
            />

            <PortfolioCard
            title="Inbound + SEO Initiatives"
            desc=""
            bullets={[
                "Led organic content marketing to boost inbound leads and SEO performance.",
                "Executed outbound marketing via email and LinkedIn targeting ICP segments.",
                "Built MOFU workflows to accelerate lead conversion.",
            ]}
            img="/projects/project2.png"
            />

            <PortfolioCard
            title="Email & Paid Campaigns"
            desc=""
            bullets={[
                "Managed Google Ads for high-intent, ROI-focused keywords.",
                "Built personalized email marketing workflows by funnel stage and user intent.",
                "Supported sales enablement with decks, battle cards, and persona messaging.",
            ]}
            img="/projects/project3.jpg"
            />
        </div>

        {/* --- Indus Insights --- */}
        <h3 className="text-2xl font-bold mb-4 mt-12">Indus Insights (2020 – 2023)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <PortfolioCard
            title="Credit Policy Optimization"
            bullets={[
                "Managed 4-member team; aligned strategy with business heads.",
                "Optimized credit policy including approval criteria and risk-based pricing.",
                "Built dashboards for real-time performance tracking.",
                "Saved ~$7M in bad debt via loss forecasting and mitigation strategies.",
            ]}
            img="/projects/indus-credit.png"
            />

            <PortfolioCard
            title="Credit Line Increase Automation"
            bullets={[
                "Created Python GUI tool for CLI micro-segment eligibility.",
                "Used clustering and NPV models to set optimum CLI amounts.",
                "Collaborated to build an internal web tool using Streamlit.",
            ]}
            img="/projects/indus-cli.png"
            />

            <PortfolioCard
            title="Regulatory Risk Modeling"
            bullets={[
                "Built IRB-compliant logistic regression models (80%+ accuracy).",
                "Performed EAD, LGD forecasting, stress testing, and calibration.",
                "Documented models with MAS/EBA compliance for client CROs.",
            ]}
            img="/projects/indus-risk.jpg"
            />
        </div>

        {/* --- Mitsubishi Hitachi --- */}
        <h3 className="text-2xl font-bold mb-4 mt-12">Mitsubishi Hitachi Power Systems (2019)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioCard
            title="Control Systems Trainee"
            bullets={[
                "Worked on control logics for engineering processes and system automation.",
                "Inspected and tested turbine control panels for quality compliance.",
                "Researched cloud-based data sharing protocols for secure communication.",
            ]}
            img="/projects/mhps.jpg"
            />
        </div>
        </section>

        {/* --- Academic Projects --- */}
        <section>
        <h2 className="text-3xl font-semibold mb-6">🎓 Academic Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <PortfolioCard
            title="Boeing Internship (Teardown & Value Engineering)"
            bullets={[
                "Analyzed Boeing 787 Mode Control Panel using SWaP-C and obsolescence study.",
                "Redesigned a product that was 12% smaller, 14% narrower, and 17% lighter.",
                "Delivered a cost-optimized, performance-retaining engineering solution."
            ]}
            img="/projects/boeing.jpg"
            />

            <PortfolioCard
            title="Reconfigurable Antenna Design"
            bullets={[
                "Designed a shape-adaptive antenna for targeted coverage areas.",
                "Modeled structure in ABAQUS; computed mass/stiffness matrices.",
                "Performed vibration analysis and extracted C-matrix and fundamental frequency."
            ]}
            img="/projects/antenna.png"
            />

            <PortfolioCard
            title="Automated Lawn Mower (BTP Project)"
            bullets={[
                "Autonomous lawn mowing system with embedded sensors and motion planning.",
                "Built core logic and control flow (details to be updated by Keshav).",
                "Modular design for adaptability to multiple terrains."
            ]}
            img="/projects/lawnmower.png"
            link="https://www.youtube.com/watch?v=M7T_cmkDPt0&ab_channel=KeshavVerma"
            />

            <PortfolioCard
              title="Gyro-Stabilised Plane"
              bullets={[
                "Extracted real-time quaternion values from MPU 6050.",
                "Used Kalman and Madgwick filters for attitude estimation.",
                "Applied PID controls to stabilize flight against gust disturbances."
              ]}
              img="/projects/gyroplane.png"
              link="https://www.youtube.com/watch?v=8Soy-MP-eFM&ab_channel=KeshavVerma"
            />

            <PortfolioCard
            title="Spirograph Drawing Machine"
            bullets={[
                "Designed & fabricated mechanical spirograph using lathe and milling.",
                "Implemented gear system to produce intricate patterns with precision.",
                "Led mechanical design and final documentation/video."
            ]}
            img="/projects/spirograph.png"
            link="https://www.youtube.com/watch?v=3y74TUiC4gA&ab_channel=KeshavVerma"
            />

            <PortfolioCard
            title="Safety Lift Locking Mechanism"
            bullets={[
                "Led a team to create a spring-based fail-safe locking system.",
                "Designed safety feature to engage during elevator free-fall scenarios.",
                "Acted as CEO for project — managed planning, business pitch & demo."
            ]}
            img="/projects/lift.png"
            link="https://www.youtube.com/watch?v=-KZC4k3t39Y&ab_channel=KeshavVerma"
            />
        </div>
        </section>

      </div>
    </main>
  );
}

function PortfolioCard({ title, desc, bullets = [], img, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      {desc && <p className="text-gray-700 mb-4">{desc}</p>}
      {bullets.length > 0 && (
        <ul className="list-disc ml-5 mb-4 text-gray-700 space-y-1">
          {bullets.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}

      {img && link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="relative block group mt-4">
          <Image
            src={img}
            alt={title}
            width={600}
            height={300}
            className="rounded-lg object-cover group-hover:brightness-75 transition duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300">
              ▶
            </div>
          </div>
        </a>
      ) : (
        img && (
          <Image
            src={img}
            alt={title}
            width={600}
            height={300}
            className="rounded-lg object-cover mt-4"
          />
        )
      )}
    </div>
  );
}
  