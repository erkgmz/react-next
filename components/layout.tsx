import Header from './header';
import Footer from './footer';
import Head from 'next/head';

const Layout = props => {
  return (
    <>
      <Head>
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
          background-color: #f5f5f5;
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
      `}</style>
    </>
  );
};

export default Layout;
