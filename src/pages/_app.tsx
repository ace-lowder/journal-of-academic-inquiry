import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/layout/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
