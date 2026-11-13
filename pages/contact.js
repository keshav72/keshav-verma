import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const EMAIL = 'keshavverma310896@gmail.com';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello Keshav')}`;

export default function Contact() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
        <p className="text-lg mb-10 text-gray-600">
          Whether you want to collaborate, talk quick-commerce growth, or just say hi, I’d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href={MAILTO}
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md text-lg transition focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/keshav-verma-iitk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-gray-800 text-gray-800 hover:bg-gray-100 py-3 px-6 rounded-md text-lg transition focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400"
          >
            <FaLinkedin className="w-5 h-5" aria-hidden="true" />
            Connect on LinkedIn
          </a>
        </div>

        <p className="text-gray-500">
          Or write to <a href={MAILTO} className="underline">{EMAIL}</a>
        </p>
      </div>
    </main>
  );
}
