import Header from './header';
import Footer from './footer';

const Layout = props => {
  return (
    <>
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
