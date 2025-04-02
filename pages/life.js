import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const countries = [
  { name: 'Japan', folder: 'japan', count: 5 },
  { name: 'Bali', folder: 'bali', count: 4 },
  { name: 'Thailand', folder: 'thailand', count: 8 },
  { name: 'Maldives', folder: 'maldives', count: 6 },
  { name: 'Vietnam', folder: 'vietnam', count: 4 },
  { name: 'India', folder: 'india', count: 6 },
];

export default function Life() {
  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">My Travel Stories</h1>

        <div className="space-y-16">
          {countries.map((country, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{country.name}</h2>
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                {Array.from({ length: country.count }).map((_, i) => (
                  <SwiperSlide key={i}>
                  <div className="relative w-full bg-white flex justify-center items-center" style={{ height: 'auto', minHeight: '300px' }}>
                    <div className="relative" style={{ width: '100%', maxWidth: '800px', height: 'auto', aspectRatio: '4 / 3' }}>
                      <Image
                        src={`/life/${country.folder}/${i + 1}.jpg`}
                        alt={`${country.name} - ${i + 1}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>                
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
