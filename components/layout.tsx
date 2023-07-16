import Header from './header';
import Footer from './footer';
import useTheme from '../hooks/useTheme';
import { COLORS } from '../constants/colors';
import { ReactNode } from 'react';
import Head from './head';

const Layout = (props: { children: ReactNode }) => {
  const [theme] = useTheme();

  return (
    <div className={`layout`}>
      <Head />
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
        :global(html, body, .layout) {
          background-color: ${COLORS.BG_BLUE};
        }
        :global(.layout) {
          scroll-behavior: smooth;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Avenir Next,
            Avenir,
            Helvetica,
            sans-serif;
          transition-property: background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
        }
        :global(a, button) {
          cursor: pointer;
          font-weight: 700;
          transition-property: color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
        }
      `}</style>
    </div>
  );
};

export default Layout;
