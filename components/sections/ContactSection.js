export default function Contact() {
    return (
      <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
          <p className="text-lg mb-6 text-gray-600">
            Whether you want to collaborate, connect, or just say hi — I’d love to hear from you.
          </p>
  
          <div className="space-y-4 text-lg text-gray-700 mb-12">
            <p>
              📧 Email: <a href="mailto:keshavverma310896@gmail.com" className="underline">keshavverma310896@gmail.com</a>
            </p>
            <p>
              🔗 LinkedIn: <a href="https://www.linkedin.com/in/keshav-verma-iitk" className="underline" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/keshav-verma-iitk
              </a>
            </p>
            {/* Optional: Calendly Link */}
            {/* <p>
              🗓️ Schedule a Call: <a href="https://calendly.com/your-link" className="underline">Calendly</a>
            </p> */}
          </div>
  
          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-xl shadow-md text-left space-y-4 max-w-xl mx-auto">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea placeholder="Your message" rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    );
  }
  