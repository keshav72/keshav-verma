import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Profile', href: '/profile' },
    { name: 'Experience', href: '/experience' },
    { name: 'Resume', href: '/resume' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl font-semibold text-gray-800">
          <Link href="/">Keshav Verma</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-600 text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-gray-900">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle navigation">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 text-gray-700 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
