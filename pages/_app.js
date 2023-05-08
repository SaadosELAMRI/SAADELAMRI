import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { GoogleFonts } from 'next-google-fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <GoogleFonts href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" />

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
