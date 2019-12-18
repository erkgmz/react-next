import { useRef, useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const scrollDuration = 500;

  function smoothScrollTo(scrollTo: number, scrollDuration: number) {
    const cosParameter = (window.pageYOffset - scrollTo) / 2;
    let scrollCount = 0;
    let oldTimestamp = window.performance.now();

    function step(newTimestamp: DOMHighResTimeStamp) {
      let tsDiff = newTimestamp - oldTimestamp;
      if (tsDiff > 100) tsDiff = 30;
      scrollCount += Math.PI / (scrollDuration / tsDiff);
      // As soon as we cross over Pi, we're about where we need to be
      if (scrollCount >= Math.PI) return;
      window.scrollTo(
        0,
        scrollTo + cosParameter + cosParameter * Math.cos(scrollCount)
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  const handleClick = () => {
    const scrollY: number = (document.querySelector('.work') as HTMLElement)
      .offsetTop;
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ behavior: 'smooth', left: 0, top: scrollY });
    } else {
      smoothScrollTo(scrollY, scrollDuration);
    }
  };

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="col col-left">
          <h1 className="section-headline">Hola!</h1>
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
          <button onClick={handleClick}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <style jsx>{`
        :global(body) {
          scroll-behavior: smooth;
        }

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
          width: 50px;
        }

        @media (min-width: 768px) {
          .go-to-work {
            width: 100%;
            text-align: center;
          }
        }

        .go-to-work button {
          font-size: 40px;
          background-color: transparent;
          border: none;
          color: #30323d;
          outline: 0;
        }

        @media (min-width: 1024px) {
          .go-to-work button {
            font-size: 50px;
          }
        }

        @media (min-width: 1400px) {
          .go-to-work button {
            font-size: 4vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
