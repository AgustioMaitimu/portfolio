import React from 'react';
import htmlSVG from '../assets/icons/html.svg';
import cssSVG from '../assets/icons/css.svg';
import jsSVG from '../assets/icons/js.svg';
import reactSVG from '../assets/icons/react.svg';
import tailwindSVG from '../assets/icons/tailwind.svg';
import strekker from '../assets/sites/strekker.png';
import synergix from '../assets/sites/synergix.png';
import github from '../assets/icons/github.svg';
import internet from '../assets/icons/internet.png';

export default function BigSkills() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('css-animation-show');
      } else {
        entry.target.classList.add('css-animation-hide');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.css-animation-hide');
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="flex min-h-screen w-screen snap-start flex-col items-center justify-center px-16 pb-[10vh] pt-20 font-fancy md:pt-[20vh]">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center md:flex-row ">
          <div className="flex items-end text-[#e45452] md:flex-col">
            <h1 className="text-5xl font-bold md:text-6xl">Tech</h1>
            <h1 className="text-5xl font-bold md:text-6xl">Stack</h1>
          </div>
          <div className="mx-12 hidden h-1 w-20 bg-black md:block"></div>
          <div className="logos flex items-center justify-center gap-5 md:gap-2">
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center  text-xs font-semibold md:gap-2">
              <img
                src={htmlSVG}
                alt=""
                className=" -mb-2 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              HTML
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center  text-xs font-semibold md:gap-2">
              <img
                src={cssSVG}
                alt=""
                className=" -mb-2 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              CSS
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center  text-xs font-semibold md:gap-2">
              <img
                src={jsSVG}
                alt=""
                className=" -mb-2 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              JavaScript
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center text-xs font-semibold md:gap-2">
              <img
                src={reactSVG}
                alt=""
                className=" -mb-2 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              React
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center text-xs font-semibold md:gap-2">
              <img
                src={tailwindSVG}
                alt=""
                className=" -mb-2 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              Tailwind
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" flex flex-col pb-10 pt-10 text-center text-5xl font-bold text-[#e45452] md:self-end md:text-end md:text-6xl">
            Projects
            <span className="pt-3 text-lg md:text-2xl">
              Diverse Projects Showcasing My Programming Knowledge
            </span>
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-14 md:gap-20 ">
            <div className="css-animation-hide flex flex-col items-center justify-center self-start rounded-lg bg-[#e45452] bg-opacity-20 p-6 md:flex-row">
              <a
                href="https://agustiomaitimu.github.io/strekker-site/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={strekker}
                  alt=""
                  className="w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:mr-10"
                />
              </a>
              <div className="flex flex-col items-center justify-between">
                <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                  Strekker
                </h1>
                <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                  A sleek and innovative kitchen appliance website inspired by
                  Tesla, offering a curated selection of four advanced blenders,
                  a versatile rice cooker, and a cutting-edge microwave for a
                  modern and efficient cooking experience.
                </p>
                <div className="flex w-full justify-between md:justify-evenly">
                  <a
                    href="https://github.com/agustiomaitimu/strekker-site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center justify-center gap-2 rounded-3xl bg-[#F3EFEB] px-2 py-1">
                      <img
                        src={github}
                        alt=""
                        className="h-6 text-sm md:h-8 md:text-lg"
                      />
                      Code
                    </button>
                  </a>
                  <a
                    href="https://agustiomaitimu.github.io/strekker-site/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center justify-center gap-2 rounded-3xl bg-[#F3EFEB] px-2 py-1">
                      <img
                        src={internet}
                        alt=""
                        className="h-6 text-sm md:h-8 md:text-lg"
                      />
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="css-animation-hide flex flex-col-reverse items-center justify-center self-end rounded-lg bg-[#e45452] bg-opacity-20 p-6  md:flex-row">
              <div className="flex flex-col items-center justify-between">
                <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                  Synergix (In Progress)
                </h1>
                <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                  A website inspired by Atlassian, offering a suite of software
                  solutions tailored for companies, spanning organizational
                  productivity, IT solutions and support, and collaboration
                  services.
                </p>
                <div className="flex w-full justify-between md:justify-evenly">
                  <a
                    href="https://github.com/agustiomaitimu/synergix-solutions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center justify-center gap-2 rounded-3xl bg-[#F3EFEB] px-2 py-1">
                      <img
                        src={github}
                        alt=""
                        className="h-6 text-sm md:h-8 md:text-lg"
                      />
                      Code
                    </button>
                  </a>
                  <a
                    href="https://agustiomaitimu.github.io/synergix-solutions/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center justify-center gap-2 rounded-3xl bg-[#F3EFEB] px-2 py-1">
                      <img
                        src={internet}
                        alt=""
                        className="h-6 text-sm md:h-8 md:text-lg"
                      />
                      Demo
                    </button>
                  </a>
                </div>
              </div>
              <a
                href="https://agustiomaitimu.github.io/synergix-solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={synergix}
                  alt=""
                  className="w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:ml-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
