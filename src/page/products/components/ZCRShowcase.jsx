import { HeartPlusIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { InterestContext } from "../../../context/InterestContext";

const images = [
  "/ZCR Page/ZCR Hero Image 1.png",
  "/ZCR Page/ZCR Hero Image 2.png",
  "/ZCR Page/ZCR Hero Image 3.png",
  "/bike-4.png",
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

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="relative  h-[740px] overflow-hidden bg-black cursor-pointer">
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
          left-0
          top-1/3
          md:top-[354px]
          md:left-[155px]
          -translate-y-1/2
          h-[25px]
          w-[29px]
          md:h-[36px]
          md:w-[36px]
          p-1
          bg-red
          text-white
          flex
          items-center
          justify-center
          rounded-[3px]
          z-20
        "
      >
        <svg viewBox="0 0 29.729 25.458" fill="white">
          <path
            d="M0,12.023H0L12.02,0l2.829,2.829L7.655,10.022H28.522v4H7.656l7.193,7.194L12.02,24.044Z"
            transform="translate(0.707 0.707)"
          ></path>
        </svg>{" "}
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="
          absolute
          right-0
          top-1/3
                    md:top-[354px]
md:right-[155px]
          -translate-y-1/2
          h-[25px]
          w-[29px]
          md:h-[36px]
          md:w-[36px]
          p-1
          bg-red
          text-white
          flex
          items-center
          justify-center
          rounded-[3px]
          z-20
        "
      >
        <svg
          width="29px"
          fill="white"
          height="25px"
          viewBox="0 0 29.729 25.457"
        >
          <path
            d="M13.672,21.215l7.193-7.194H0v-4H20.866L13.673,2.829,16.5,0l12.02,12.02h0L16.5,24.043Z"
            transform="translate(0.5 0.707)"
          ></path>
        </svg>{" "}
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
