import { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const bikes = [
  {
    id: 1,
    title: "Zitto Naked Sport",
    description: "Embrace the Urban Challenge: Lightweight Naked Dominance",
    image: "/ZCR Page/ZCR Section 5 Image 1.png",
  },
  {
    id: 2,
    title: "Zitto Supersport",
    description: "Embrace the Uncompromising: Track Precision, made Road Legal",
    image: "/ZCR Page/ZCR Section 5 Image 2.png",

  },
  {
    id: 3,
    title: "Zitto Adventure Tourer",
    description: "Embrace the Uncharted: Every Terrain is your Playground",
    image: "/ZCR Page/ZCR Section 5 Image 3.png",

  },
  {
    id: 4,
    title: "Zitto Street Fighter",
    description: "Raw power meets urban agility.",
    image: "/ZCR Page/ZCR Section 5 Image 4.png",

  },
];

export default function UpcomingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, bikes.length - 3));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#450000_0%,#000_70%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-20">
        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-white text-7xl font-bold leading-tight">
            Sneak Peek on
            <br />
            what's next.
          </h2>

          <p className="text-white/80 text-lg mt-8 max-w-5xl">
            Gear up for what's coming next! Before we unveil our latest
            creation, know that even cooler motorcycles are in the pipeline,
            ready to redefine your riding experience. Stay ahead of the curve
            with us.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative  w-full ">
          {/* Left Button */}
          <button
            onClick={prev}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20
              bg-red-500
              w-10
              h-10
              flex
              items-center
              justify-center
              text-white
              rounded
            "
          >
            <ChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={() => next()}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20
              bg-red-500
              w-10
              h-10
              flex
              items-center
              justify-center
              text-white
              rounded
            "
          >
            <ChevronRight />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-10">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (33.333% + 5.5px)))`,
              }}
            >
              {bikes.map((bike) => (
                <div
                  key={bike.id}
                  className="
          relative
          basis-[calc((100%-32px)/3)]
          shrink-0
          h-[330px]
          bg-black
          border
          border-red-900/50
          overflow-hidden
          group
        "
                >
                  {/* Image */}
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="
            absolute inset-0
            h-full w-full
            object-cover
            opacity-90
            transition duration-500
            group-hover:scale-105
          "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  <button
                    className="
            absolute top-5 right-5
            h-10 w-10
            border-2 border-red-500
            flex items-center justify-center
            rounded z-10
            text-white
          "
                  >
                    <Heart size={16} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {bike.title}
                    </h3>

                    <p className="text-white/75 text-sm">{bike.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
