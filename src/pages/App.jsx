import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function App() {
  function handleScroll() {
    window.scrollBy({
      top: window.innerHeight / 2 + 10,
      behavior: 'smooth',
    });
  }

  return (
    <div className="flex max-w-[98vw] flex-col items-center">
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* <SmallProjects /> */}
      <div
        onClick={handleScroll}
        className="scroll-down fixed bottom-10 right-5 h-12 w-7 rounded-3xl border-2 border-[#e45452] md:bottom-14 md:right-20 md:h-14 md:w-8"
      ></div>
    </div>
  );
}
