import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/layout/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="max-w-[1280px] mx-auto space-y-8">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
