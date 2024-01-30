import React from 'react';
import phone from '../assets/icons/phone.png';
import email from '../assets/icons/email.png';
import instagram from '../assets/icons/instagram.png';
import about from '../assets/icons/about.png';

export default function About() {
  return (
    <div className="flex h-screen w-screen snap-start items-center justify-center font-fancy">
      <div className="flex w-[80%] flex-col gap-3 md:gap-4">
        <h1 className="text-6xl font-bold text-[#e45452]">Tio.</h1>
        <h3 className="md:text-xl">
          Hello! I'm Agus<span className="text-[#e45452]">Tio</span> Maitimu.
        </h3>
        <p className="text-xs md:text-lg">
          I'm a 20-year-old enthusiast currently studying Information Systems at
          Universitas Siber Asia since 2022. My focus lies in Front-End
          Development, where I'm able to use my energy into crafting interactive
          and visually appealing digital experiences. I find immense
          satisfaction in knowing that people are seeing and interacting with
          things that I've brought into existence.
        </p>
        <p className="text-xs md:text-lg">
          While I'm still on the journey of building my skills and embracing
          growth, my passion for hands-on learning has led me to actively engage
          in real-world projects. For me, the thrill of creation goes beyond
          textbooks. I revel in the joy of watching my code materialize and come
          to life.
        </p>
        <p className="text-xs md:text-lg">
          I'd love to connect and collaborate. Feel free to reach out, and let's
          bring your digital visions to life together!
        </p>
        <a
          href="Resume-Agustio Maitimu.docx"
          className="mt-1 cursor-pointer text-sm text-[#e45452] md:text-lg"
          download
        >
          Download Resume
        </a>
        <div>
          <h1 className="mb-2 text-lg font-bold text-[#e45452] md:text-3xl">
            Contacts
          </h1>
          <div className="flex w-full flex-col gap-2">
            <div className="just flex items-center gap-2">
              <img className="h-6 md:h-7" src={email} alt="" />
              <a
                href="mailto:agustiomaitimu20@gmail.com"
                className="mb-[2px] text-sm underline md:text-lg"
              >
                agustiomaitimu20@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-6 md:h-7" src={phone} alt="" />
              <p className="mb-[2px] text-sm md:text-lg">+62 813 4304 1308</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-6 md:h-7" src={instagram} alt="" />
              <p className="mb-[2px] text-sm md:text-lg">
                @vanilla_paracetamol (personal)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
