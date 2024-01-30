import React from 'react';

export default function Home() {
  const [animationPlayed, setAnimationPlayed] = React.useState(false);

  React.useEffect(() => {
    function animateCSS() {
      const animatedElements = document.querySelectorAll('.css-animation-hide');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationPlayed) {
            // Only animate if not played yet
            entry.target.classList.add('css-animation-show');
            setTimeout(() => {
              entry.target.style.transitionDuration = '200ms';
            }, 1500);
            setAnimationPlayed(true); // Mark as played after first animation
          }
        });
      });

      animatedElements.forEach((el) => observer.observe(el));
    }

    // Run animateCSS only once, after the last animation element has loaded
    const lastAnimationElement = document.getElementById('last-animation');
    if (lastAnimationElement && !animationPlayed) {
      animateCSS();
      setAnimationPlayed(true); // Mark as played immediately
    }
  }, [animationPlayed]);

  return (
    <div
      id="last-animation"
      className="home-background flex h-screen w-screen snap-start flex-col items-center justify-center gap-10"
    >
      <div className="css-animation-hide flex w-fit flex-col items-start justify-center px-5 text-[#141414]">
        <h1 className="pl-1 text-2xl font-medium italic md:text-5xl">2024</h1>
        <h1 className="text-start text-5xl font-bold sm:text-7xl md:text-9xl">
          Portfolio
        </h1>
        <div className="flex w-full flex-col-reverse md:flex-row md:items-start md:justify-between">
          <h1 className="hidden h-fit self-center pl-1 text-xl font-medium md:inline">
            Agustio Maitimu
          </h1>
          <h1 className="changing-text self-end pr-1 pt-3 text-lg font-semibold text-[#e45452] md:text-4xl">
            Front-End Developer
          </h1>
        </div>
      </div>
      {/* <div className="css-animation-hide flex flex-col items-center justify-center italic md:hidden">
        <h1 className="text-[#141414]">Agustio Maitimu</h1>
      </div> */}
    </div>
  );
}
