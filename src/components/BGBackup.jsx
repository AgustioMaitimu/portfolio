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
  return (
    <div className="hidden min-h-screen w-screen snap-center flex-col items-center justify-center px-16 pb-[10vh] pt-[20vh] font-fancy md:flex">
      <div className="flex flex-col gap-20">
        <div className="flex items-center">
          <div className="flex flex-col items-end text-[#e45452]">
            <h1 className="text-6xl font-bold">Tech</h1>
            <h1 className="text-6xl font-bold">Stack</h1>
          </div>
          <div className="mx-12 h-1 w-20 bg-black"></div>
          <div className="flex items-center justify-center gap-2">
            <p className="flex flex-col items-center  justify-center gap-2 text-xs font-semibold">
              <img src={htmlSVG} alt="" className="h-24" />
              HTML
            </p>
            <p className="flex flex-col items-center  justify-center gap-2 text-xs font-semibold">
              <img src={cssSVG} alt="" className="h-24" />
              CSS
            </p>
            <p className="flex flex-col items-center  justify-center gap-2 text-xs font-semibold">
              <img src={jsSVG} alt="" className="h-24" />
              JavaScript
            </p>
            <p className="flex flex-col items-center justify-center  gap-2 text-xs font-semibold">
              <img src={reactSVG} alt="" className="h-24" />
              React
            </p>
            <p className="flex flex-col items-center justify-center  gap-2 text-xs font-semibold">
              <img src={tailwindSVG} alt="" className="h-24" />
              Tailwind
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="self-end pb-10 text-6xl font-bold text-[#e45452]">
            Projects
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-20">
            <div className="flex self-end rounded-lg bg-[#e45452] bg-opacity-20 p-6">
              <a
                href="https://agustiomaitimu.github.io/strekker-site/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={strekker}
                  alt=""
                  className="mr-10 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem]"
                />
              </a>
              <div className="flex flex-col items-center justify-between">
                <h1 className="pb-3 text-xl font-bold text-[#e45452]">
                  Strekker
                </h1>
                <p className="w-[20vw] pb-3 text-center text-sm">
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
                    <button className="flex items-center justify-center gap-2">
                      <img src={github} alt="" className="h-8 text-lg" />
                      Code
                    </button>
                  </a>
                  <a
                    href="https://agustiomaitimu.github.io/strekker-site/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center justify-center gap-2">
                      <img src={internet} alt="" className="h-8 text-lg" />
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex self-end rounded-lg bg-[#e45452] bg-opacity-20 p-6">
              <div className="flex flex-col items-center justify-between">
                <h1 className="pb-3 text-xl font-bold text-[#e45452]">
                  Synergix (In Progress)
                </h1>
                <p className="w-[20vw] pb-3 text-center text-sm">
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
                    <button className="flex items-center justify-center gap-2">
                      <img src={github} alt="" className="h-8 text-lg" />
                      Code
                    </button>
                  </a>
                  <a
                    href="https://agustiomaitimu.github.io/synergix-solutions/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center justify-center gap-2">
                      <img src={internet} alt="" className="h-8 text-lg" />
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
                  className="ml-10 w-96 cursor-pointer rounded-lg transition-all duration-200 hover:w-[26rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
