import Link from 'next/link';
import useTheme from '../hooks/useTheme';
import { useState, useEffect } from 'react';
import { COLORS } from '../constants/colors';

const Footer = () => {
  const [theme, setTheme] = useTheme();
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [pathName]);

  const handleThemeChange = () => {
    (setTheme as Function)(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <footer className="footer" id="footer">
      <ul className="footer-links">
        {pathName !== '/' && (
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        )}
        {pathName !== '/blog' && (
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        )}
        <li className="link">
          <a href="//www.linkedin.com/in/erkgmz/">LinkedIn</a>
        </li>
        <li className="link">
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </li>
        <li className="link">
          <button onClick={handleThemeChange}>
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </li>
      </ul>

      <p className="copyright">
        &copy; 2019 - 2020 Erik Gomez All Right Reserved
      </p>
      <style jsx>{`
        footer {
          box-sizing: border-box;
          background-color: ${COLORS.BGBLUE};
          color: white;
          padding: 10px;
          text-align: center;
        }

        footer ul {
          display: flex;
          flex-flow: column nowrap;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0 40px;
        }

        @media (min-width: 768px) {
          footer ul {
            flex-flow: row nowrap;
            justify-content: space-around;
          }
        }

        footer ul li {
          list-style: none;
          margin-bottom: 10px;
        }

        @media (min-width: 768px) {
          footer ul li {
            flex-flow: row nowrap;
            flex: 1;
          }
        }

        footer ul li a,
        footer ul li button {
          color: white;
          text-decoration: underline;
        }

        footer ul li button {
          background: none;
          border: none;
          outline: 0;
        }

        .copyright {
          font-size: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
