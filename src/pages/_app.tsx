import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/layout/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />

      {/* Footer */}
      <div className="container h-full flex flex-col gap-12 border-t-4 border-double border-gray-600 py-8">
        <div className="flex justify-between grow text-xs px-8">
          <div className="flex flex-col gap-1.5">
            <a href="/about" className="font-semibold">
              ABOUT
            </a>
            <a href="/about">Mission</a>
            <a href="/about">Focus</a>
          </div>
          <div className="flex flex-col gap-1.5">
            <a href="/services" className="font-semibold">
              SERVICES
            </a>
            <a href="/services">Coaching</a>
            <a href="/services">Review</a>
          </div>
          <div className="flex flex-col gap-1.5">
            <a href="/submit" className="font-semibold">
              SUBMIT
            </a>
            <a href="/submit">Requirements</a>
            <a href="/submit">How To</a>
          </div>
          <div className="box w-1/2"></div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <span className="text-center text-xs">
            © 2024 The Journal of Academic Inquiry
          </span>
          <div className="flex gap-4 justify-center text-xs">
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyApp;
