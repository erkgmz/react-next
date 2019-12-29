import { smoothScrollTo } from '../utilities/smoothScrollTo';
import { COLORS } from '../constants/colors';
import Link from 'next/link';

const HeroButtons = () => {
  const DURATION = 500;
  const scrollToWork = () => {
    smoothScrollTo(
      (document.querySelector('.work') as HTMLElement).offsetTop + 5,
      DURATION
    );
  };

  return (
    <div className="hero-btns">
      <Link href="/blog">
        <a className="hero-btn">BLOG</a>
      </Link>
      <button className="hero-btn" onClick={scrollToWork}>
        WORK
      </button>
      <style jsx>{`
        .hero-btns {
          margin: 40px auto 0;
          text-align: center;
          display: flex;
          flex-flow: row nowrap;
          padding-bottom: 100px;
        }

        @media (min-width: 768px) {
          .hero-btn {
            /*width: 100%;*/
            flex: 1;
            text-align: left;
          }
        }

        .hero-btn {
          display: inline-block;
          background-color: transparent;
          border: none;
          outline: 0;
          padding: 0;
          margin-right: 20px;
          color: ${COLORS.LINKBLUE};
          text-decoration: underline;
          font-size: 14px;
          font-weight: 700;
        }

        @media (min-width: 1024px) {
          .hero-btn {
            font-size: 16px;
          }
        }

        @media (min-width: 1400px) {
          .hero-btn {
            font-size: 1.5vw;
          }
        }
      `}</style>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="col col-left">
          <h1 className="section-headline">Hello.</h1>
        </div>
        <div className="col col-right copy-block">
          <p className="section-copy">
            I'm Erik Gomez, a Front-End Developer in Los Angeles, California,
            where I work at <a href="https://www.rpa.com">RPA</a> and am one of
            the lead developers on the{' '}
            <a href="https://automobiles.honda.com">Honda Automobiles</a>{' '}
            project.
          </p>
          <p className="section-copy">
            Feel free to <a href="mailto:e@erikgomez.co">email</a> me if you
            have any questions.
          </p>
          <HeroButtons />
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-flow: column;
          position: relative;
          box-sizing: border-box;
          padding: 0 10px;
        }

        @media (min-width: 1024px) {
          .hero {
            padding: 0 100px;
            height: 95vh;
          }
        }

        .hero-wrapper {
          margin: auto;
          margin-top: 120px;
          max-width: 500px;
        }

        @media (min-width: 768px) {
          .hero-wrapper {
            display: flex;
            flex-flow: row wrap;
          }
        }

        @media (min-width: 1024px) {
          .hero-wrapper {
            margin: auto 0;
            max-width: none;
          }
        }

        .hero h1 {
          font-size: 80px;
          margin-bottom: 50px;
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .hero h1 {
            font-size: 100px;
          }
        }

        @media (min-width: 1024px) {
          .hero h1 {
            font-size: 160px;
            font-size: 14vw;
            margin-left: 0;
          }
        }

        .hero .copy-block {
          padding-left: 10px;
          max-width: 500px;
        }

        .hero .copy-block a {
          font-weight: 700;
        }

        @media (min-width: 1024px) {
          .hero .col-left {
            flex: 1;
          }

          .hero .copy-block {
            width: 800px;
            max-width: 50%;
            padding-left: 20px;
            flex: 1;
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
