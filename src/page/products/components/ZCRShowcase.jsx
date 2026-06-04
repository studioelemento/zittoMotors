import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/ZCR Page/ZCR Hero Image 1.png",
  "/ZCR Page/ZCR Hero Image 2.png",
  "/ZCR Page/ZCR Hero Image 3.png",
  "/bike-4.png",
];

export default function ZCRShowcase() {
  const [index, setIndex] = useState(0);
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
    <section className="relative mt-20 h-screen overflow-hidden bg-black cursor-pointer">
      {/* ZCR */}
      <div
        className={`
          absolute inset-0 z-1 flex items-start justify-center
          transition-all 
          ${animate ? "opacity-100 translate-y-0 duration-700" : "opacity-0 duration-0 -translate-y-24"}
          `}
      >
        <h1
          className="text-[18vw] font-black text-white/10  hover:text-white
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
            w-[100%]
            object-contain
            animate-bike-enter
          "
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => changeSlide("prev")}
        className="
          absolute
          left-70
          top-1/2
          -translate-y-1/2
          h-12
          w-12
          bg-red-500
          text-white
          flex
          items-center
          justify-center
          rounded-md
          z-20
        "
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="
          absolute
          right-70
          top-1/2
          -translate-y-1/2
          h-12
          w-12
          bg-red-500
          text-white
          flex
          items-center
          justify-center
          rounded-md
          z-20
        "
      >
        <ChevronRight />
      </button>

      {/* Wishlist */}
      <div className="absolute bottom-50 left-1/2 -translate-x-1/2">
        <button
          className="
            border
            border-red-500
            px-8
            py-4
            text-white
            text-xl
            hover:bg-red-500/10
            transition
          "
        >
          Add to Wishlist ♡
        </button>
      </div>
    </section>
  );
}
