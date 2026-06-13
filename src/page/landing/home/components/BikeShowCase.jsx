import { useState } from "react";
import { ArrowLeft, ArrowRight, HeartPlusIcon } from "lucide-react";
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
    <section className="bg-white py-12 md:py-16 md:min-h-[75vh] lg:py-33 lg:px-20">
      <div className="mx-auto w-full md:w-285">
        <div className="flex mt-[80px] md:mt-[120px] lg:mt-auto flex-col-reverse lg:flex-row items-center">
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              md:w-[70%]
              lg:w-[40%]
              text-left
              md:text-center
              lg:text-left
              ps-[24px]
              pe-[24px]
              md:ps-[50px]
              md:pe-[50px]
            "
          >
            <h2
              className="
                mb-3
                saira
                text-[30px]
                md:text-[40px]
                font-semibold
                leading-[32px]
                md:leading-13
                uppercase
                tracking-wide
                text-slate-800
              "
            >
              CONCEPT <br /> ZCR
            </h2>

            <h3 className="mb-4 text-[18px] md:text-[22px] font-bold text-[rgba(32,44,50,1)]">
              The Café Racer
            </h3>

            <h2
              className="
                mb-8
                text-[16px]
                md:text-[20px]
                w-full
                md:w-[80%]
                lg:w-[67%]
                leading-relaxed
                text-slate-700
              "
            >
              Zitto's vision of a cafe racer with old-school charm and new-age
              technology blending seamlessly.
            </h2>

            <div className="flex flex-col w-full gap-4 lg:m-0 mx-auto justify-center lg:justify-start">
              <button
                onClick={() => setShowInterestModal(true)}
                className="
                  rounded
                  flex
                  w-max
                  py-[10px]
                  px-[15px]
                  md:px-[23px]
                  justify-between
                  gap-2
                  bg-[#D4373D]
                  text-[20px]
                  font-bold
                  text-white
                  transition
                  hover:bg-red-600
                "
              >
                I'm Interested
                <HeartPlusIcon className="ml-[26px]" />
              </button>

              <button
                className="
                  flex
                  rounded
                  bg-[#202C32]
                  w-max
                  py-[10px]
                  px-[15px]
                  md:px-[23px]
                  text-[20px]
                  font-bold
                  text-white
                  transition
                  hover:bg-slate-800
                "
              >
                Explore
                <ArrowRight className="ml-[93px]" />
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              w-full
              md:w-[80%]
              lg:w-[60%]
              flex
              items-center
              justify-center
            "
          >
            {/* Left Arrow */}
            <button
              onClick={prevBike}
              className="
                absolute
                left-[-5px]
                md:left-[10px]
                lg:left-5
                z-10
                flex
                p-1
                items-center
                justify-center
                rounded-sm
                bg-[#D4373D]
                text-white
                shadow-lg
                transition
                hover:bg-red-600
              "
            >
              <ArrowLeft size={18} />
            </button>

            {/* Bike Image */}
            <div className="w-[260px] md:w-[550px] lg:w-[722px]">
              <img
                src={bikeImages[current]}
                alt="Bike"
                loading="lazy"
                className={`w-full md:w-[550px] lg:w-185 max-w-none h-auto object-contain transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextBike}
              className="
                absolute
                right-[-5px]
                md:right-[10px]
                lg:right-5
                z-10
                flex
                p-1
                items-center
                justify-center
                rounded-sm
                bg-[#D4373D]
                text-white
                shadow-lg
                transition
                hover:bg-red-600
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <InterestModal
        isOpen={showInterestModal}
        onClose={() => setShowInterestModal(false)}
      />
    </section>
  );
}