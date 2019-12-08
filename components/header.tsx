import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Header = props => {
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    setPathName(window.location.pathname);
  });

  return (
    <>
      <Head>
        <title>Hola Mundo</title>
      </Head>
      <nav>
        <ul>
          {pathName !== '/' && (
            <li>
              <Link href="/">
                <a>Go Home</a>
              </Link>
            </li>
          )}
          {pathName !== '/work' && (
            <li>
              <Link href="/work">
                <a>View Work</a>
              </Link>
            </li>
          )}
        </ul>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          ul {
            display: flex;
            justify-content: flex-end;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Header;
