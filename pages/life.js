import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// To add a trip: create a folder in public/life (e.g. public/life/japan) and drop photos in it.
// Folder name becomes the heading; photos show in file-name order.
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const ORDER = ['maldives', 'thailand']; // listed first, in this order; any other folders follow alphabetically

export async function getStaticProps() {
  const root = path.join(process.cwd(), 'public', 'life');
  const folders = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort((a, b) => {
      const ia = ORDER.indexOf(a);
      const ib = ORDER.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
      return a.localeCompare(b);
    });

  const trips = folders
    .map((folder) => ({
      name: folder.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      photos: fs
        .readdirSync(path.join(root, folder))
        .filter((f) => IMAGE_EXT.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((f) => `/life/${folder}/${f}`),
    }))
    .filter((t) => t.photos.length > 0);

  return { props: { trips } };
}

export default function Life({ trips }) {
  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">My Travel Stories</h1>

        <div className="space-y-16">
          {trips.map((trip) => (
            <section key={trip.name}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{trip.name}</h2>
              <Swiper
                modules={[Autoplay, Pagination, A11y]}
                autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                loop={trip.photos.length > 1}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-lg overflow-hidden shadow-lg bg-white"
              >
                {trip.photos.map((src, i) => (
                  <SwiperSlide key={src}>
                    <div className="relative w-full h-[60vh] min-h-[320px] max-h-[640px]">
                      <Image
                        src={src}
                        alt={`${trip.name}, photo ${i + 1}`}
                        fill
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        className="object-contain"
                        priority={i === 0 && trip === trips[0]}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
