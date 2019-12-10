import Header from './header';

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
    // <ContextProvider>
    // </ContextProvider>
  );
};

export default Layout;
