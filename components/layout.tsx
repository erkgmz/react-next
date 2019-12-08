import Header from './header';
import { ThemeContextProvider } from '../providers/theme-provider';

const Layout = props => {
  return (
    <ThemeContextProvider>
      <div className="wrapper">
        <Header />
        <div className="container">{props.children}</div>
      </div>
    </ThemeContextProvider>
  );
};

export default Layout;
