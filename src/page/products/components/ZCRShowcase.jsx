import { HeartPlusIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { InterestContext } from "../../../context/InterestContext";

const images = [
  "/ZCR Page/ZCR Hero Image 1.png",
  "/ZCR Page/ZCR Hero Image 2.png",
  "/ZCR Page/ZCR Hero Image 3.png",
];

export default function ZCRShowcase() {
  const [index, setIndex] = useState(0);
  const {handleShowInterestModal} = useContext(InterestContext)
  const [animate, setAnimate] = useState(false);
  console.log(animate);
  const changeSlide = (direction) => {
    setAnimate(false);
    setIndex((prev) =>
      direction === "next"
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length,
    );
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  };

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

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section 
      className="relative  h-[740px] overflow-hidden bg-black cursor-pointer"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* ZCR */}
      <div
        className={`absolute inset-0 z-1 flex items-start justify-center
          transition-all 
          ${animate ? "opacity-100 translate-y-0 duration-700" : "opacity-0 duration-0 -translate-y-24"}
       `}
      >
        <h1
          className="text-[18vw] saira md:text-[12vw] font-bold text-[#202C32]/60  hover:text-white
 leading-none transition-all duration-500     hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8)]
"
        >
          ZCR
        </h1>
      </div>

      {/* White Backdrop */}

      {/* Bike */}
      <div className="absolute w-full inset-0 flex items-center justify-center">
        <img
          key={index}
          src={images[index]}
          alt=""
          fetchPriority={index === 0 ? "high" : "auto"}
          className="
            w-full
            h-[740px]
            md:w-full
            object-cover
            animate-bike-enter
          "
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => changeSlide("prev")}
        className="
          absolute
          left-4
          top-1/3
          md:top-[354px]
          md:left-[155px]
          -translate-y-1/2
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

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="
          absolute
          right-4
          top-1/3
          md:top-[354px]
          md:right-[155px]
          -translate-y-1/2
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
        <ArrowRight size={18} />
      </button>

      {/* Wishlist */}
      <div className="absolute bottom-1/5 left-1/2 -translate-x-1/2 z-100">
        <button
        onClick={handleShowInterestModal}
          className="
            border
            border-red-500
            md:border-3
            text-nowrap 
            px-2
            py-2
            bg-[#D4373D]/10
            hover:bg-[#D4373D]
          md:py-[10px]
          md:px-[29px]
            text-[15px]
            text-white
             transition-colors duration-300
          "
        >
          <span className="text-[10px] md:text-[20px] items-center  flex gap-2 font-bold">
            Add to Wishlist <HeartPlusIcon className="w-4 h-4 md:w-8 md:h-8" />
          </span>
        </button>
      </div>
    </section>
  );
}
