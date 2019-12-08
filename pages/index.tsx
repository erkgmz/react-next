import { NextPage } from 'next';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="home">
        <div className="copy-wrapper">
          <h1>
            I’m Erik. <br />A Front-End Engineer at{' '}
            <a href="https://www.rpa.com">RPA</a> where I work on the{' '}
            <a href="https://automobiles.honda.com">Honda Automobiles</a>{' '}
            project.
          </h1>
        </div>
      </div>
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
