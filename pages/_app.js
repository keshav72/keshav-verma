import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Keshav Verma | Head of Customer Success, GobbleCube</title>
        <meta
          name="description"
          content="Keshav Verma leads Customer Success at GobbleCube, building performance marketing for FMCG and D2C brands on quick commerce and e-commerce."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
