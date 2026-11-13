import allTestimonials from '../data/testimonials';

const testimonials = allTestimonials.filter((t) => t.approved);

export default function Testimonials() {
  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">Testimonials</h1>

        <div className="space-y-10">
          {testimonials.map((t) => (
            <figure key={t.quote} className="bg-white shadow-md rounded-xl p-6">
              <blockquote className="text-lg italic text-gray-700 mb-4">“{t.quote}”</blockquote>
              <figcaption className="text-sm font-semibold text-gray-500">
                – {t.name}
                {t.role ? `, ${t.role}` : ''}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
