import Header from './header';

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <style jsx>{`
        :global(body) {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
};

export default Layout;
