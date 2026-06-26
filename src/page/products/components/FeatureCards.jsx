import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const features = [
  {
    title: "CONNECTED RIDE",
    description:
      "A circular speedometer cluster seamlessly harmonizing old-school charm with the pinnacle of modern technology. Packed with connected features and integrated navigation",
    image: "/ZCR Page/ZCR Section 2 Image 1.png",
  },
  {
    title: "ACTIVE COOLING",
    description:
      "Transform effortlessly from solo to dual rider configuration for those journeys when you have a companion.",
    image: "/ZCR Page/ZCR Section 2 Image 2.png",
  },
  {
    title: "ADAPTIVE CHASSIS",
    description:
      "Experience the serene tranquility of a belt drive, providing whisper-quiet operation and maintenance-free ride for your motorcycle.",
    image: "/ZCR Page/ZCR Section 2 Image 3.png",
  },
];

export default function FeatureCards() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
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
      changeSlide("next");
    } else if (isRightSwipe) {
      changeSlide("prev");
    }
  };

  const changeSlide = (direction) => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % features.length
          : (prev - 1 + features.length) % features.length,
      );
      setFade(true);
    }, 250);
  };

  return (
    <section className="bg-white">
      {/* Mobile Slider */}
      <div 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative md:hidden h-[473px]  w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        <div className="group relative h-full">
          <img
            key={index}
            src={features[index].image}
            alt={features[index].title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
          />

          <div className="absolute inset-0 bg-black/30" />

          <div
            className="absolute                       --y-1/2translate
  top-[329px]
  left-10 z-10 w-min px-4 "
          >
            <h3
              className=" saira
                  text-[19px]
                  w-full
                  leading-none
                  text-nowrap
                  font-semibold
                  uppercase
                  text-white
                  transition-all
                  duration-500
"
            >
              {features[index].title}
            </h3>

            <p className="mt-3 text-[10px] dm-sans text-white">
              {features[index].description}
            </p>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => changeSlide("prev")}
          className="absolute left-4 top-[339px] -translate-y-1/2 z-30 flex p-1 items-center justify-center rounded-sm bg-[#D4373D] text-white shadow-lg transition hover:bg-red-600 cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => changeSlide("next")}
          className="absolute right-4 top-[339px] -translate-y-1/2 z-30 flex p-1 items-center justify-center rounded-sm bg-[#D4373D] text-white shadow-lg transition hover:bg-red-600 cursor-pointer"
        >
          <ArrowRight size={18} />
        </button>

        {/* Dots */}
      </div>

      {/* Desktop Grid */}
      <div className="hidden h-[612px] md:grid md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative h-full  overflow-hidden cursor-pointer"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 "
            />

            <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/80" />

            <div className="absolute h-max bottom-0 left-10  z-10 w-full p-6">
              <h3
                className="     saira
                  text-[40px]
                  leading-none
                  pt-[500px]
                  font-semibold
                  uppercase
                  text-white
                  transition-all
                  duration-500
                  group-hover:-translate-y-40
                "
              >
                {feature.title}
              </h3>
              <p
                className="
                     dm-sans
                  mt-3
                  h-[30px]
                  text-[20px]
                  text-white
                  opacity-0
                  transition-all
                  duration-500
                  pt-[80px]
                  group-hover:-translate-y-40
                  group-hover:opacity-100
                   md:pe-[100px] 
                "
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
