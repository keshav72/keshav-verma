import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Keshav Verma"
              width={300}
              height={300}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-6 text-lg font-semibold">Head of Customer Success, GobbleCube</p>
          <p className="text-gray-500">Gurugram, India</p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="text-lg leading-relaxed mb-4">
            I lead <strong>Customer Success at GobbleCube</strong>, a performance-marketing platform that helps
            FMCG and D2C brands grow on quick commerce and e-commerce: Blinkit, Instamart, Zepto, Amazon and
            Flipkart. My team runs performance marketing for enterprise and D2C portfolios that together manage{' '}
            <strong>₹250 Cr+ in monthly ad budgets</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            I joined in May 2025 as Senior Growth Manager to build the performance-marketing line from zero. It
            grew to <strong>₹1 Cr ARR and 150 brands</strong>, and in May 2026 I moved up to lead Customer
            Success.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Most of what I build sits between strategy and systems: <strong>rank-based bidding</strong>,
            automation rules, multi-agent media planning, alerting, and <strong>GobsIQ</strong>, an AI advisor
            that answers the questions my CSMs used to answer by hand.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Before GobbleCube, I led growth at <strong>Nanonets</strong> (Y Combinator), where lifecycle
            automation doubled demo conversions, and built credit-risk models for lenders at{' '}
            <strong>Indus Insights</strong>. I studied Electrical and Mechanical Engineering at IIT Kanpur.
          </p>

          <p className="text-lg italic text-gray-600 mt-6">
            Off the clock, I’m a <strong>FIDE-rated chess player</strong>, a football fan, a curious cook, and I
            build small software tools for fun.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/portfolio" className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition">
              See my work
            </Link>
            <a
              href="/Keshav_Verma_Resume.pdf"
              download
              className="border border-gray-800 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Download resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
