import { smoothScrollTo } from '../utilities/smoothScrollTo';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    smoothScrollTo(
      (document.querySelector('.work') as HTMLElement).offsetTop + 5,
      500
    );
  };

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="col col-left">
          <h1 className="section-headline">Hello.</h1>
        </div>
        <div className="col col-right copy-block">
          <p>
            I'm Erik Gomez, a Front-End Developer in Los Angeles, California,
            where I work at <a href="https://www.rpa.com">RPA</a> and am one of
            the lead developers on the{' '}
            <a href="https://automobiles.honda.com">Honda Automobiles</a>{' '}
            project.
          </p>
          <p>
            Feel free to <a href="mailto:e@erikgomez.co">email</a> me if you
            have any questions.
          </p>
        </div>
        <div className="go-to-work">
          <button onClick={scrollToWork}>
            <i className="down-angle"></i>
          </button>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-flow: column;
          padding: 0 10px 100px;
          position: relative;
          box-sizing: border-box;
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
          color: #30323d;
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
          color: #30323d;
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

        .go-to-work {
          margin: 100px auto 0;
          text-align: center;
        }

        @media (min-width: 768px) {
          .go-to-work {
            width: 100%;
          }
        }

        .go-to-work button {
          background-color: transparent;
          border: none;
          outline: 0;
          padding: 0;
        }

        .down-angle {
          border: solid #30323d;
          border-width: 0 4px 4px 0;
          display: inline-block;
          padding: 8px;
          padding: 1vw;
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default Hero;
