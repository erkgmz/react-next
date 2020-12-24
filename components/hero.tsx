import useTheme from '../hooks/useTheme';
import { COLORS } from '../constants/colors';
import { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [theme] = useTheme();
  const [, setAngleColor] = useState(COLORS.WHITE);

  useEffect(() => {
    const color = theme === 'light' ? COLORS.BLACK : COLORS.WHITE;
    setAngleColor(color);
  }, [theme]);

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1 className="gb__color">Hello, I'm Erik.</h1>
        <h2 className="gb__color">
          Front-End Engineer @ <a href="https://ring.com">Ring.com</a>.
        </h2>
        <p className="gb__color city">Los Angeles, CA.</p>
        <p className="gb__color">
          🚧 My site is currently under construction. In the meantime, you can
          hit me up on <a href="//www.linkedin.com/in/erkgmz/">LinkedIn</a>.
        </p>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-flow: column;
          padding: 0 10px;
          position: relative;
          box-sizing: border-box;
          min-height: 640px;
          height: 87vh;
        }

        @media (min-width: 1024px) {
          .hero {
            padding: 0 100px;
          }
        }

        .hero-wrapper {
          margin: auto;
        }

        @media (min-width: 1024px) {
          .hero-wrapper {
            margin: auto 0;
            max-width: none;
          }
        }

        .hero h1 {
          font-size: 50px;
          margin: 0 auto;
          font-weight: 900;
        }

        @media (min-width: 768px) {
          .hero h1 {
            font-size: 100px;
            font-size: 9vw;
          }
        }

        @media (min-width: 1024px) {
          .hero h1 {
            margin-left: 0;
          }
        }

        .hero h2 {
          font-size: 18px;
          margin: 0;
        }

        @media (min-width: 1024px) {
          .hero h2 {
            font-size: 160px;
            font-size: 2vw;
            margin-left: 0;
          }
        }

        .hero p {
          font-size: 14px;
          letter-spacing: 1px;
          line-height: 1.2;
        }

        @media (min-width: 1024px) {
          .hero p {
            font-size: 16px;
            font-size: 1.2vw;
          }
        }

        @media (min-width: 1400px) {
          .hero p {
            font-size: 1.5vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
