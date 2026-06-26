import { useContext, useState } from "react";
import { ArrowLeft, ArrowRight, HeartPlusIcon } from "lucide-react";
import InterestModal from "./InterestModal";
import { InterestContext } from "../../../../context/InterestContext";

const bikeImages = [
  "/Home Page/Section 2 Image 1.png",
  "/Home Page/Section 2 Image 2.png",
  "/Home Page/Section 2 Image 4.png",
];

export default function BikeShowcase() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const {handleShowInterestModal} = useContext(InterestContext)

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextBike();
    } else if (isRightSwipe) {
      prevBike();
    }
  };

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
    <section className="bg-white py-12 md:py-16 lg:p-[7vw] overflow-hidden">
      <div className="mx-auto w-full max-w-[1140px]">
        <div className="flex flex-col-reverse lg:flex-row items-center mt-[80px] md:mt-[120px] lg:mt-0">
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              md:w-[80%]
              lg:w-[40%]
              md:p-[10px]
              px-6

              text-left
              md:text-center
              lg:text-left
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
                md:leading-[52px]
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

            <p
              className="
                mb-8
                text-[16px]
                md:text-[20px]
                w-full
                md:w-[80%]
                lg:w-[67%]
                mx-0
                md:mx-auto
                lg:mx-0
                font-normal
                leading-relaxed
                text-slate-700
              "
            >
              Zitto's vision of a cafe racer with old-school charm and new-age
              technology blending seamlessly.
            </p>

            <div
              className="
                flex
                flex-col
                gap-4

                items-start
                md:items-center
                lg:items-start
              "
            >
              <button
                onClick={handleShowInterestModal}
                className="
                  rounded
                  flex
                  items-center
                  justify-between
                  gap-2
                  py-[10px]
                  px-[15px]
                  md:px-[23px]
                  bg-[#D4373D]
                  text-[18px]
                  md:text-[20px]
                  font-bold
                  text-white
                  leading-0
                  transition
                  hover:bg-red-600
                "
              >
                I'm Interested
                <HeartPlusIcon className="ml-4 md:ml-6" />
              </button>

              <button
                className="
                  flex
                  items-center
                  justify-between
                  rounded
                  bg-[#202C32]
                  py-[10px]
                  px-[15px]
                  md:px-[23px]
                  text-[18px]
                  md:text-[20px]
                  leading-0
                  font-bold
                  text-white
                  transition
                  hover:bg-slate-800
                "
              >
                Explore
                <ArrowRight className="ml-8 md:ml-[93px]" />
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              w-full
              md:w-[90%]
              lg:w-[60%]
              flex
              items-center
              justify-center
              mb-8
              lg:mb-0
            "
          >
            {/* Left Arrow */}
            <button
              onClick={prevBike}
              className="
                absolute
                left-4
                md:left-2
                lg:left-5
                z-30
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
                cursor-pointer
              "
            >
              <ArrowLeft size={18} />
            </button>

            {/* Bike Image */}
            <div 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="w-[95%] md:w-[550px] lg:w-[722px] cursor-grab active:cursor-grabbing select-none"
            >
              <img
                src={bikeImages[current]}
                alt="Bike"
                loading="lazy"
                className={`transform md:scale-[1.4] scale-100 w-full h-auto object-contain transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextBike}
              className="
                absolute
                right-4
                md:right-2
                lg:right-0
                z-30
                flex
                p-1
                items-center
                justify-center
                rounded-sm
                text-white
                shadow-lg
                transition
                bg-red
                hover:bg-red-600
                cursor-pointer
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

  
    </section>
  );
}