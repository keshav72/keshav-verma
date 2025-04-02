export default function Testimonials() {
    const testimonials = [
      {
        name: 'Former Manager, Indus Insights',
        quote: 'Keshav brings a rare mix of analytical depth and product intuition. A force multiplier for any growth team.',
      },
      {
        name: 'Teammate, Nanonets',
        quote: 'One of the most dependable, insightful people I’ve worked with. Always delivers with strategic clarity and execution speed.',
      },
      {
        name: 'Mentor, IIT Kanpur',
        quote: 'Keshav’s leadership during Techkriti was top-notch — he balanced team coordination, budget, and execution like a pro.',
      },
    ];
  
    return (
      <main className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12">Testimonials</h1>
  
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white shadow-md rounded-xl p-6">
                <p className="text-lg italic text-gray-700 mb-4">“{t.quote}”</p>
                <p className="text-sm font-semibold text-gray-500">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  