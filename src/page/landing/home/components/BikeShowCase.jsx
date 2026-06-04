import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const bikeImages = [
  "/Home Page/Section 2 Image 1.png",
  "/Home Page/Section 2 Image 2.png",
  "/Home Page/Section 2 Image 4.png",
];

export default function BikeShowcase() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const changeBike = (newIndex) => {
    setFade(false);

    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 250);
  };

  const nextBike = () => {
    changeBike((current + 1) % bikeImages.length);
  };

  const prevBike = () => {
    changeBike((current - 1 + bikeImages.length) % bikeImages.length);
  };

  return (
    <section className="bg-[#ffffff] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-md text-center lg:text-left">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-slate-800 sm:text-5xl lg:text-6xl">
              CONCEPT ZCR™
            </h2>

            <h3 className="mb-6 text-xl font-semibold text-slate-900 lg:text-2xl">
              The Café Racer
            </h3>

            <p className="mb-8 text-base leading-relaxed text-slate-700 lg:text-lg">
              Zitto's vision of a cafe racer with old-school charm and new-age
              technology blending seamlessly.
            </p>

            <div className="flex flex-col gap-4">
              <button className="w-fit rounded bg-red-500 px-8 py-3 text-lg font-semibold text-white hover:bg-red-600">
                I'm Interested
              </button>

              <button className="w-fit rounded bg-slate-900 px-8 py-3 text-lg font-semibold text-white hover:bg-slate-800">
                Explore →
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex w-full items-center justify-center">

            {/* Left Arrow */}
            <button
              onClick={prevBike}
              className="absolute left-2 md:left-4 lg:left-8 z-10 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded bg-red-500 text-white hover:bg-red-600"
            >
              <ArrowLeft size={14} />
            </button>

            {/* Bike Image */}
            <div className="w-full max-w-[900px]">
              <img
                src={bikeImages[current]}
                alt="Bike"
                className={`w-full object-contain transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextBike}
              className="absolute right-2 md:right-4 lg:right-8 z-10 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded bg-red-500 text-white hover:bg-red-600"
            >
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}