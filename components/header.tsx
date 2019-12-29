import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [pathName, setPathName] = useState('/');
  useEffect(() => {
    setPathName(location.pathname);
  }, []);

  return (
    <nav>
      <ul>
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
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
        }
      `}</style>
    </nav>
  );
};

export default Header;
