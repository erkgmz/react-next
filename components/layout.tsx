import Header from './header';
import Footer from './footer';
import useTheme from '../hooks/useTheme';
import { COLORS } from '../constants/colors';
import { ReactNode } from 'react';
import Head from './head';

const Layout = (props: { children: ReactNode }) => {
  const [theme] = useTheme();

  return (
    <div
      className={`layout`}
      style={{
        backgroundColor: `${theme === 'light' ? COLORS.WHITE : COLORS.BLACK}`,
      }}
    >
      <Head />
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
        :global(html, body) {
          background-color: ${theme === 'light' ? COLORS.WHITE : COLORS.BLACK};
        }
        :global(.layout) {
          scroll-behavior: smooth;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          transition-property: background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
        }
        :global(a, button) {
          color: ${theme === 'light'
            ? COLORS.LINK_BLUE_ON_LIGHT
            : COLORS.LINK_BLUE_ON_DARK};
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
