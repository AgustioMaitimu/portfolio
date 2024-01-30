import React from 'react';
import github from '../assets/icons/github.svg';
import internet from '../assets/icons/internet.png';
import pixeler from '../assets/sites/pixeler.png';
import kalculator from '../assets/sites/kalculator.png';
import yomonote from '../assets/sites/yomo-note.png';
import weathering from '../assets/sites/weathering.png';
import performit from '../assets/sites/perform.it.png';

export default function SmallProjects() {
  return (
    <div className="mt-20 flex min-h-screen w-full snap-start flex-col items-center justify-center p-6">
      <h1 className=" flex flex-col pb-10 pt-10 text-center text-4xl font-bold text-[#e45452] md:pb-20 md:pt-20 md:text-6xl lg:mr-[12vw] lg:self-end lg:text-end">
        Learning Projects
        <span className="pt-3 text-base md:text-2xl">
          Showcasing My Journey Through The Small Projects I Made Along The Way.
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap md:gap-10 ">
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
  );
}
