import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Keshav Verma – Resume</title>
      </Head>
      <div className="bg-white p-6 max-w-4xl mx-auto">
        {/* Download Button */}
        <div className="flex justify-end mb-4">
          <a
            href="/Keshav_Verma_Resume.pdf"
            download
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Embed HTML Resume */}
        <iframe
          src="/resume.html"
          title="Keshav Verma Resume"
          className="w-full h-[1080px] border border-gray-300"
        ></iframe>
      </div>
    </>
  );
}
