const sections = [
  {
    title: 'Expertise',
    items: [
      'Customer Success Leadership (Enterprise & D2C)',
      'Retail Media & Quick-Commerce Performance Marketing',
      'Growth Strategy, GTM & Product-Led Growth',
      'Media Planning, Bidding & Campaign Automation',
      'AI Agents & LLM Workflows for Operations',
      'Data Analysis & Experimentation',
      'Risk & Credit Modelling',
    ],
  },
  {
    title: 'Industries Worked In',
    items: [
      'Retail media & e-commerce (FMCG, D2C)',
      'SaaS (AI document processing, workflow automation)',
      'FinTech (credit, lending, B2B2C)',
      'Analytics & consulting',
    ],
  },
  {
    title: 'Platforms',
    items: ['Blinkit, Instamart, Zepto', 'Amazon, Flipkart, Flipkart Minutes', 'Google Ads, LinkedIn', 'HubSpot CRM'],
  },
  {
    title: 'Technical Skills',
    items: [
      'Languages: Python, SQL, R, VBA, JavaScript, HTML',
      'Data: Snowflake, ClickHouse, Postgres, Tableau, Grafana, Excel',
      'AI: Claude & Anthropic API, LLM agents, MCP integrations',
      'Modelling: logistic regression, XGBoost, NPV & response curves',
    ],
  },
  {
    title: 'Certifications',
    items: [
      'Python for Everybody (Coursera)',
      'SQL for Data Science (Coursera)',
      'Excel for Business (Coursera)',
      'SQL Intermediate & R Intermediate (HackerRank)',
    ],
  },
  {
    title: 'Languages Spoken',
    items: ['English (Fluent)', 'Hindi (Native)', 'German (Elementary)', 'Spanish (Elementary)'],
  },
];

export default function Profile() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Professional Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <ul className="list-disc ml-5 space-y-1">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
