import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Keshav Verma"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Keshav Verma — a dual-degree graduate from IIT Kanpur in Mechanical and Electrical Engineering,
            now leading growth at Nanonets. My work sits at the intersection of data, strategy, and storytelling.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            From setting up CRM systems and scoring models, to writing high-converting campaigns and SEO content,
            I build scalable growth engines that work. Whether it’s Python, SQL, HubSpot, or ChatGPT — I’m always chasing clarity and impact.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I’ve also worked on credit policy models for global banks, interned in control systems in Japan, and led a national tech fest with 40K+ attendees.
          </p>
          <p className="text-lg italic text-gray-600 mt-4">
            Outside work? Chess, anime, cooking — and the occasional FIDE tournament.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
