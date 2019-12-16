import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  let [isHome, setIsHome] = useState(true);
  let [isWork, setIsWork] = useState(false);
  let [bottomPadding, setBottomPadding] = useState('');
  let footerRef = useRef();

  useEffect(() => {
    setIsHome(location.pathname === '/');
    setIsWork(location.pathname === '/work');
    setBottomPadding(window.getComputedStyle(footerRef.current).height);
  }, [isHome, isWork]);

  return (
    <footer className="footer" ref={footerRef}>
      {!isHome && (
        <Link href="/">
          <a>HOME</a>
        </Link>
      )}
      {!isWork && (
        <Link href="/work">
          <a>SEE WORK</a>
        </Link>
      )}
      <p className="copyright">
        &copy; 2019 - 2020 Erik Gomez All Right Reserved
      </p>
      <style jsx>{`
        :global(body) {
          padding-bottom: ${bottomPadding};
        }

        footer {
          box-sizing: border-box;
          background-color: #4464ad;
          color: white;
          padding: 10px;
          text-align: center;
          position: fixed;
          bottom: 0;
          width: 100%;
        }

        footer a {
          color: white;
        }

        .copyright {
          font-size: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
