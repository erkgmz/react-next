import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import useTheme from '../hooks/useTheme';
import { COLORS } from '../constants/colors';
import { ReactNode } from 'react';

const Layout = (props: { children: ReactNode }) => {
  const [theme] = useTheme();

  return (
    <div 
      className={`layout`}
      style={{backgroundColor: `${theme === 'light' ? COLORS.WHITE : COLORS.BLACK}`}}
      >
      <Head>
        {process.env.NODE_ENV !== 'development' && (
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-90990854-1"
          ></script>
        )}
        {process.env.NODE_ENV !== 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []; 
                function gtag() {
                  window.dataLayer.push(arguments)
                }
                gtag('js', new Date()); gtag('config', 'UA-90990854-1');
              `,
            }}
          />
        )}
        <title>Erik Gomez - Front-End Engineer - Los Angeles, CA</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
        :global(.layout) {
          scroll-behavior: smooth;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          transition-property: background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
        }
        :global(a, button) {
          color: ${theme === 'light' ? COLORS.LINK_BLUE_ON_LIGHT : COLORS.LINK_BLUE_ON_DARK};
          cursor: pointer;
          font-weight: 700;
          transition-property: color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
        }
        :global(.gb__color) {
          color: ${theme === 'light' ? COLORS.BLACK : COLORS.WHITE};
        }
      `}</style>
    </div>
  );
};

export default Layout;
