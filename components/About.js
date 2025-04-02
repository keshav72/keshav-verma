import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
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

        {/* Bio Section */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed mb-4">
            I lead <strong>Growth at Nanonets</strong>, where I architect high-performing inbound systems and campaigns that convert. My work lives at the intersection of <strong>data, automation, and storytelling</strong> — turning user behavior into scalable growth outcomes.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Whether it’s setting up a <strong>fully automated HubSpot CRM</strong>, building <strong>lead scoring models</strong> in Python, or running full-funnel campaigns via GPT and APIs — I’m obsessed with systems that scale and convert.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Before this, I built <strong>credit risk engines</strong> and NPV-based product models at Indus Insights for global banks. I’ve worked on everything from <strong>regulatory modeling</strong> to CLI automation tools for lenders.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            I wear many hats — strategist, builder, operator, and analyst. But at heart, I love solving messy growth problems with clean thinking and measurable outcomes.
          </p>

          <p className="text-lg italic text-gray-600 mt-6">
            Off the clock, I’m a <strong>FIDE-rated chess player</strong>, <strong>anime lover</strong>, and a curious cook. If it’s strategic, creative, or weirdly competitive — I’m probably into it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
