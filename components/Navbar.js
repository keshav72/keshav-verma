import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">
          <Link href="/">Keshav Verma</Link>
        </div>
        <div className="space-x-6 text-gray-600 text-sm md:text-base font-medium">
          <Link href="/portfolio" className="hover:text-gray-900">Portfolio</Link>
          <Link href="/profile" className="hover:text-gray-900">Profile</Link>
          <Link href="/experience" className="hover:text-gray-900">Experience</Link>
          <Link href="/resume" className="hover:text-gray-900">Resume</Link>
          <Link href="/testimonials" className="hover:text-gray-900">Testimonials</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
