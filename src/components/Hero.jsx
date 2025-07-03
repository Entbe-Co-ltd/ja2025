import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[40vh] flex flex-col justify-center items-center py-12 overflow-hidden">
      <div className="w-full px-12 md:px-16 justify-center items-start relative flex flex-col">
        <img
                src="/images/hero-bg.png"
                alt="Junction Asia 2025"
                className="absolute bottom-0 right-0 md:w-1/3 sm:w-full grayscale -mb-32"
            />
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-6">
          WHAT IS<br />
          JUNCTION ASIA 2025
        </h1>
        
        <div className="w-full relative flex justify-end mt-10">
            <img
                src="/images/hero.png"
                alt="Junction Asia 2025"
                className="w-64 md:w-80 lg:w-[40%]"
            />
        </div>
      </div>
      {/* Scrolling event info */}
        <div className="overflow-hidden mt-16 w-full">
            <div className="flex whitespace-nowrap animate-marquee w-full">
                <img
                src="/images/info-bar.png"
                alt="Junction Asia 2025"
                className="inline-block w-[300%] md:min-w-full max-w-none"
                />
                <img
                src="/images/info-bar.png"
                alt="Junction Asia 2025"
                className="inline-block w-[300%] md:min-w-full max-w-none"
                />
            </div>
        </div>
    </section>
  );
};

export default Hero;
