import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Closer from '../components/Closer';

export default function App() {
  const [endScreenVisible, setEndScreenVisible] = React.useState(false);

  function handleScroll() {
    window.scrollBy({
      top: window.innerHeight / 2 + 10,
      behavior: 'smooth',
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function isVisible(elem) {
    if (!(elem instanceof Element))
      throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }
    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };
    if (elemCenter.x < 0) return false;
    if (
      elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)
    )
      return false;
    if (elemCenter.y < 0) return false;
    if (
      elemCenter.y >
      (document.documentElement.clientHeight || window.innerHeight)
    )
      return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) return true;
    } while ((pointContainer = pointContainer.parentNode));
    return false;
  }

  window.onscroll = () => {
    if (isVisible(document.getElementById('end-screen'))) {
      setEndScreenVisible(true);
    } else {
      setEndScreenVisible(false);
    }
  };

  return (
    <div className="flex max-w-[98vw] flex-col items-center">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Closer />
      <div
        onClick={handleScroll}
        className={`${endScreenVisible && 'hidden'} scroll-down fixed bottom-10 right-5 h-12 w-7 rounded-3xl border-2 border-[#e45452] md:bottom-14 md:right-20 md:h-14 md:w-8`}
      ></div>
      <div
        onClick={scrollToTop}
        className={`${!endScreenVisible && 'hidden'} scroll-up fixed bottom-10 right-5 h-12 w-7 rounded-3xl border-2 border-[#e45452] md:bottom-14 md:right-20 md:h-14 md:w-8`}
      ></div>
    </div>
  );
}
