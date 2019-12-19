import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const Header = () => {
  return (
    <>
      <Head>
        <title>Erik Gomez - Front-End Developer - Los Angeles, CA</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
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
