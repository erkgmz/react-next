export const smoothScrollTo = (scrollTo: number, scrollDuration: number) => {
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

  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ behavior: 'smooth', left: 0, top: scrollTo });
  } else {
    window.requestAnimationFrame(step);
  }
};
