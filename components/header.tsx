import { useState, useEffect } from 'react';

const Header = (): JSX.Element => {
  const [isVisibile, setIsVisible] = useState(true);

  const handleScroll = (e: Event) => {
    e.preventDefault();

    if (window.pageYOffset > 50) {
      return setIsVisible(false);
    }

    setIsVisible(true);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        opacity: isVisibile ? 1 : 0,
        transform: `translateY(${isVisibile ? '0' : '-20%'})`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: '0.2s',
      }}
    >
      <ul>
        <li>
          <a href="//www.linkedin.com/in/erkgmz/">LinkedIn</a>
        </li>
        {/* <li>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </li> */}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
          position: fixed;
          left: 0;
          right: 0;
        }

        @media (min-width: 1024px) {
          ul {
          }
        }

        nav > ul {
          padding: 4px 16px;
        }

        li {
          display: flex;
          padding: 6px 10px;
          font-weight: 700;
        }

        li a {
          font-size: 13px;
          letter-spacing: 1px;
        }
      `}</style>
    </nav>
  );
};

export default Header;
