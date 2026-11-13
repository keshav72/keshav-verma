import Image from 'next/image';

export default function PortfolioCard({ title, desc, bullets = [], img, link, tags = [] }) {
  const isSvg = img?.endsWith('.svg');

  const picture = img && (
    <Image
      src={img}
      alt={title}
      width={1200}
      height={600}
      unoptimized={isSvg}
      sizes="(min-width: 768px) 560px, 100vw"
      className={`rounded-lg w-full h-auto ${link ? 'group-hover:brightness-75 transition duration-300' : ''}`}
    />
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h4 className="text-2xl font-semibold mb-2">{title}</h4>
      {desc && <p className="text-gray-700 mb-4">{desc}</p>}
      {bullets.length > 0 && (
        <ul className="list-disc ml-5 mb-4 text-gray-700 space-y-1">
          {bullets.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4">
        {img && link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block group"
            aria-label={`Watch video: ${title}`}
          >
            {picture}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300">▶</div>
            </div>
          </a>
        ) : (
          picture
        )}
      </div>
    </div>
  );
}
