export default function Profile() {
    return (
      <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Professional Profile</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-2">Expertise</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Growth Strategy & Product-Led Growth</li>
                <li>Inbound Campaign Automation</li>
                <li>Data Analysis & Experimentation</li>
                <li>Email Marketing & Lead Nurturing</li>
                <li>Risk & Credit Modeling</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold mb-2">Industries Worked In</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>SaaS (OCR, Workflow Automation)</li>
                <li>FinTech (Credit, Lending, B2B2C)</li>
                <li>Analytics & Consulting</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Languages: Python, SQL, R, C/C++, HTML</li>
                <li>Tools: HubSpot, ChatGPT, Tableau, Excel, VBA</li>
                <li>Frameworks: Streamlit, APIs, Logistic Regression, XGBoost</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold mb-2">Certifications</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Python for Everybody (Coursera)</li>
                <li>SQL for Data Science</li>
                <li>Excel for Business (Macquarie)</li>
                <li>R (Intermediate - HackerRank)</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold mb-2">Languages Spoken</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>English (Fluent)</li>
                <li>Hindi (Native)</li>
                <li>German (Elementary)</li>
                <li>Spanish (Elementary)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
  