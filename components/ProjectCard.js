import Image from 'next/image';

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

export default PortfolioCard;
