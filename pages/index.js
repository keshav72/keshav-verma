import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('./about'));
const ExperienceSection = dynamic(() => import('./experience'));
const ContactFooter = dynamic(() => import('../components/sections/ContactFooter'));

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <AboutSection />
      <ExperienceSection />
      <ContactFooter />
    </main>
  );
}
