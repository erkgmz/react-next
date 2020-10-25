import Layout from '../components/layout';
import Hero from '../components/hero';
import { ThemeContextProvider } from '../context/ThemeProvider';
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = () => (
  <ThemeContextProvider>
    <Layout>
      <Hero />
    </Layout>
  </ThemeContextProvider>
);

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

export default Home;
