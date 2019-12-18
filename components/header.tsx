import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const Header = () => {
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    setPathName(window.location.pathname);
  });

  return (
    <>
      <Head>
        <title>Hola Mundo</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <nav>
        <ul>
          <li>
            <a href="//www.linkedin.com/in/erkgmz/">LinkedIn</a>
          </li>
          <li>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </li>
        </ul>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          :global(a, button) {
            cursor: pointer;
          }
          ul {
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 10px;
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
