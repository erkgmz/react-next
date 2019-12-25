import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import useTheme from '../hooks/useTheme';

const Layout = props => {
  const [theme] = useTheme();

  return (
    <div className={`layout ${theme}`}>
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
              __html: `window.dataLayer = window.dataLayer || []; 
              function gtag() {
                window.dataLayer.push(arguments)
              }
              gtag('js', new Date()); gtag('config', 'UA-90990854-1');`
            }}
          />
        )}
        <title>Erik Gomez - Front-End Developer - Los Angeles, CA</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
        :global(body) {
          background-color: ${theme === 'light' ? '#f5f5f5' : '#30323d'};
          scroll-behavior: smooth;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        :global(a) {
          color: #067df7;
          cursor: pointer;
        }
        :global(button) {
          cursor: pointer;
        }
        :global(.section-headline) {
          color: ${theme === 'light' ? '#30323d' : '#f5f5f5'};
        }
        :global(.section-copy) {
          color: ${theme === 'light' ? '#30323d' : '#f5f5f5'};
        }
      `}</style>
    </div>
  );
};

export default Layout;
