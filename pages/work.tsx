import { useState } from 'react';
import Layout from '../components/layout';
import { NextPage } from 'next';

const Work: NextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div className="work">
        <h2>Work Hello</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <style jsx>{`
          h2 {
            background-color: yellow;
          }
        `}</style>
      </div>
    </Layout>
  );
};
export default Work;
