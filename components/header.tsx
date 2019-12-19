import React from 'react';

const Header = () => {
  return (
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
  );
};

export default Header;
