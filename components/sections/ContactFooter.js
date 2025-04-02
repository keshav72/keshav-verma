import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-4">

        <h2 className="text-xl font-semibold">Let’s Connect</h2>
        <p className="text-gray-400">Open to conversations, collaborations, and consulting.</p>

        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a href="mailto:keshavverma310896@gmail.com" className="hover:text-white transition" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/keshav-verma-iitk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/keshav72" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/KeshavVerma_KV?t=jbN9J2rK-4xnOX-5JhXNNQ&s=31" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/keshav_verma_kv?igsh=MXdyamt3cjh0OGlybQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">© {new Date().getFullYear()} Keshav Verma. All rights reserved.</p>
      </div>
    </footer>
  );
}
