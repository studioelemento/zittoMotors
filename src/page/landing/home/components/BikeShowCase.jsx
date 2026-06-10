import { useState } from "react";
import { ArrowLeft, ArrowRight, HeartPlus, HeartPlusIcon } from "lucide-react";
import InterestModal from "./InterestModal";

const bikeImages = [
  "/Home Page/Section 2 Image 1.png",
  "/Home Page/Section 2 Image 2.png",
  "/Home Page/Section 2 Image 4.png",
];

export default function BikeShowcase() {
  const [current, setCurrent] = useState(0);
  const [showInterestModal, setShowInterestModal] = useState(false);
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
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full  lg:w-[20%] text-center lg:text-left">
            <h2 className="mb-3 saira text-[clamp(1.9rem,6vw,2.5rem)] font-semibold leading-13 uppercase tracking-wide text-slate-800">
              CONCEPT ZCR™
            </h2>

            <h3 className="mb-4 text-[clamp(18px,22px, 22px)]     sm:text-xl lg:text-2xl font-semibold text-slate-900">
              The Café Racer
            </h3>

            <p className="mb-8  text-[clamp(16px,22px, 20px)] sm:text-base  leading-relaxed text-slate-700">
              Zitto's vision of a cafe racer with old-school charm and new-age
              technology blending seamlessly.
            </p>

            <div className="flex flex-col w-max gap-4 lg:m-0 mx-auto justify-center lg:justify-start">
              <button onClick={()=>setShowInterestModal(true)} className="rounded flex w-max justify-between gap-2 bg-[#D4373D] px-6 py-3 text-base font-semibold text-white transition hover:bg-red-600">
                I'm Interested <HeartPlusIcon/>
              </button>

              <button className="rounded flex  justify-between bg-[#202C32] px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800">
                Explore <ArrowRight/>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative w-full lg:w-[60%] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevBike}
              className="absolute left-0 sm:left-20 lg:left-25 z-10 flex p-1 items-center justify-center rounded-sm bg-[#D4373D] text-white shadow-lg transition hover:bg-red-600"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Bike Image */}
            <div className="w-full max-w-[900px] px-8 sm:px-12">
              <img
                src={bikeImages[current]}
                alt="Bike"
                loading="lazy"
                className={`w-full h-auto object-contain transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextBike}
              className="absolute right-0 sm:right-10 lg:right-20 z-10 flex p-1 items-center justify-center rounded-sm bg-[#D4373D] text-white shadow-lg transition hover:bg-red-600"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <InterestModal isOpen={showInterestModal} onClose={()=> setShowInterestModal(false)}/>
    </section>
  );
}