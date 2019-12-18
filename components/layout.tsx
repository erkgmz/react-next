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
        }
      `}</style>
    </>
  );
};

export default Layout;
