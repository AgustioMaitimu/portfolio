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
import githubProfile from '../assets/sites/github-profile.png';
import pixeler from '../assets/sites/pixeler.png';
import kalculator from '../assets/sites/kalculator.png';
import yomonote from '../assets/sites/yomo-note.png';
import weathering from '../assets/sites/weathering.png';
import performit from '../assets/sites/perform.it.png';

export default function Projects() {
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
      <div className="flex flex-col items-center justify-center">
        <div className="mb-28 flex flex-col items-center justify-center">
          <h1 className="mb-10 text-center text-5xl font-bold text-[#e45452] md:text-6xl">
            My GitHub
          </h1>
          <a
            className="css-animation-hide flex items-center justify-center"
            href="https://github.com/AgustioMaitimu"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubProfile}
              alt=""
              className="w-[90%] rounded-lg border-2 border-[#e45452] transition-all duration-200 hover:w-full md:w-[60vw] md:hover:w-[63vw] lg:w-[50vw] lg:hover:w-[53vw]"
            />
          </a>
        </div>
        <div className="mb-28 flex flex-col items-center md:flex-row">
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
                className=" -mb-1 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              HTML
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center  text-xs font-semibold md:gap-2">
              <img
                src={cssSVG}
                alt=""
                className=" -mb-1 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              CSS
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center  text-xs font-semibold md:gap-2">
              <img
                src={jsSVG}
                alt=""
                className=" -mb-1 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              JavaScript
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center text-xs font-semibold md:gap-2">
              <img
                src={reactSVG}
                alt=""
                className=" -mb-1 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              React
            </p>
            <p className="css-animation-hide tools-logo flex flex-col items-center justify-center text-xs font-semibold md:gap-2">
              <img
                src={tailwindSVG}
                alt=""
                className=" -mb-1 h-24 w-[13vw] md:-mb-0 md:w-auto"
              />
              Tailwind
            </p>
          </div>
        </div>
        <div className="mb-28 flex flex-col items-center justify-center gap-4">
          <h1 className=" flex flex-col text-center text-5xl font-bold text-[#e45452] md:self-end md:text-end md:text-6xl">
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
                <div className="flex w-full justify-evenly">
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
                <div className="flex w-full justify-evenly">
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
        <h1 className="mb-8 flex flex-col items-center justify-center text-center text-4xl font-bold text-[#e45452] md:text-6xl">
          Learning Projects
          <span className="pt-3 text-center text-base md:text-xl">
            Showcasing My Journey Through The Small Projects I Made Along The
            Way.
          </span>
        </h1>
        <div className="mb-28 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:gap-10 ">
          <div className="css-animation-hide mb-10 flex w-[80vw] flex-col items-center justify-center rounded-lg bg-[#e45452] bg-opacity-20 p-6 md:h-[32rem] md:w-fit">
            <a
              href="https://agustiomaitimu.github.io/pixeler/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={pixeler}
                alt=""
                className="mb-2 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:mb-6"
              />
            </a>
            <div className="flex w-full flex-col items-center justify-between">
              <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                Pixeler
              </h1>
              <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                A Web Application for creating pixel art created using Plain
                JavaScript, Not optimized for mobile
              </p>
              <div className="flex w-full justify-evenly">
                <a
                  href="https://github.com/agustiomaitimu/pixeler"
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
                  href="https://agustiomaitimu.github.io/pixeler/"
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
          <div className="css-animation-hide mb-10 flex w-[80vw] flex-col items-center justify-center rounded-lg bg-[#e45452] bg-opacity-20 p-6 md:h-[32rem] md:w-fit">
            <a
              href="https://agustiomaitimu.github.io/kalculator/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={kalculator}
                alt=""
                className="mb-2 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:mb-6"
              />
            </a>
            <div className="flex w-full flex-col items-center justify-between">
              <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                Kalculator
              </h1>
              <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                A Calculator Web App created using Plain JavaScript as an
                experiment in responsive web design. Optimized for most mobile
                devices
              </p>
              <div className="flex w-full justify-between md:justify-evenly">
                <a
                  href="https://github.com/agustiomaitimu/kalculator"
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
                  href="https://agustiomaitimu.github.io/kalculator/"
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
          <div className="css-animation-hide mb-10 flex w-[80vw] flex-col items-center justify-center rounded-lg bg-[#e45452] bg-opacity-20 p-6 md:h-[32rem] md:w-fit">
            <a
              href="https://agustiomaitimu.github.io/yomo-note/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={yomonote}
                alt=""
                className="mb-2 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:mb-6"
              />
            </a>
            <div className="flex w-full flex-col items-center justify-between">
              <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                Yomo Note
              </h1>
              <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                A Note-taking web application created using ReactJS, emphasizing
                on responsive web design. Optimized for mobile devices
              </p>
              <div className="flex w-full justify-between md:justify-evenly">
                <a
                  href="https://github.com/agustiomaitimu/yomo-note"
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
                  href="https://agustiomaitimu.github.io/yomo-note/"
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
          <div className="css-animation-hide mb-10 flex w-[80vw] flex-col items-center justify-center rounded-lg bg-[#e45452] bg-opacity-20 p-6 md:h-[32rem] md:w-fit">
            <a
              href="https://agustiomaitimu.github.io/weathering/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={weathering}
                alt=""
                className="mb-2 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:mb-6"
              />
            </a>
            <div className="flex w-full flex-col items-center justify-between">
              <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                Weathering
              </h1>
              <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                A Weather Forecast web app created using ReactJS while
                experimenting with APIs and cleaner UI. Optimized for mobile
                devices
              </p>
              <div className="flex w-full justify-between md:justify-evenly">
                <a
                  href="https://github.com/agustiomaitimu/weathering"
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
                  href="https://agustiomaitimu.github.io/weathering/"
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
          <div className="css-animation-hide mb-10 flex w-[80vw] flex-col items-center justify-center rounded-lg bg-[#e45452] bg-opacity-20 p-6 md:h-[32rem] md:w-fit">
            <a
              href="https://agustiomaitimu.github.io/perform.it/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={performit}
                alt=""
                className="mb-2 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem] md:mb-6"
              />
            </a>
            <div className="flex w-full flex-col items-center justify-between">
              <h1 className="pb-3 pt-5 font-bold text-[#e45452] md:pt-0">
                Perform.it
              </h1>
              <p className="w-full pb-3 text-center text-sm md:w-[20vw]">
                A To-Do web app created using ReactJS to practice Tailwind CSS,
                Optimized for mobile devices
              </p>
              <div className="flex w-full justify-between md:justify-evenly">
                <a
                  href="https://github.com/agustiomaitimu/perform.it"
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
                  href="https://agustiomaitimu.github.io/perform.it/"
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
        </div>
      </div>
    </div>
  );
}
