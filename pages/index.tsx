import Layout from '../components/layout';
import Hero from '../components/hero';
import Work from '../components/work';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Work />
    </Layout>
  );
};

// const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
//   <div className="home">
//     <h1>Hello world! - user agent: {userAgent}</h1>
//   </div>
// );
// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

export default Home;
