import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Experience', href: '/experience' },
  { name: 'Profile', href: '/profile' },
  { name: 'Resume', href: '/resume' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Life', href: '/life' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  const linkClass = (href) =>
    pathname === href ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900';

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">
          <Link href="/">Keshav Verma</Link>
        </div>

        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 ${linkClass(link.href)}`}
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
