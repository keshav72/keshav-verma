import AboutSection from '../components/sections/AboutSection';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import ContactFooter from '../components/sections/ContactFooter';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <AboutSection />
      <ExperienceTimeline />
      <ContactFooter />
    </main>
  );
}
