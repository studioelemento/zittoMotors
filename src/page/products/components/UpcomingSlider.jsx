import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, HeartPlus } from "lucide-react";

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
  const [cardsPerView, setCardsPerView] = useState(3);

  const sliderRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.children[0];

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 16; // gap-4 = 16px

    setTranslateX(currentIndex * (cardWidth + gap));
  }, [currentIndex, cardsPerView]);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);
  const maxIndex = Math.max(0, bikes.length - cardsPerView);

  console.log(currentIndex, cardsPerView, bikes.length, maxIndex);
  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, bikes.length - cardsPerView));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const translatePercentage = 100 / cardsPerView;

  return (
    <section className="relative   pt-[30px] p-[10px] pt-[30px] md:pl-[100px] bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#450000_0%,#000_90%)]" />

      <div className="relative z-10  md:p-[10px]">
        {/* Heading */}
        <div className="     pb-[30px] pt-[60px] p-[10px]">
          <h2 className="text-white dm-sans text-[32px] md:text-[75px] leading-[1.3em] font-bold ">
            Sneak Peek on
            <br />
            what's next.
          </h2>

          <p className="text-white/80 dm-sans text-[12px] md:text-[20px] leading- text-semibold mt-8 mb-[19px] max-w-5xl">
            Gear up for what's coming next! Before we unveil our latest
            creation, know that even cooler motorcycles are in the pipeline,
            ready to redefine your riding experience. Stay ahead of the curve
            with us.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20
              w-9 h-9
              md:w-12 md:h-12
              bg-red
              text-white
              rounded-md
              flex items-center justify-center
              disabled:opacity-40
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={currentIndex == maxIndex}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20
              w-9 h-9
              md:w-12 md:h-12
              bg-red
              text-white
              rounded-md
              flex items-center justify-center
              disabled:opacity-40
            "
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden px-0 md:pe-16">
            <div
              ref={sliderRef}
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${translateX}px)`,
              }}
            >
              {bikes.map((bike) => (
                <div
                  key={bike.id}
                  className="
                    relative
                    shrink-0
                    basis-full
                    md:basis-[calc(50%-8px)]
                    lg:basis-[calc(33.333%-11px)]
                    h-[350px]
                    border 
                    overflow-hidden
                    group
                  "
                >
                  {/* Bike Image */}
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Heart Button */}
                  <button
                    className="
                      absolute top-4 right-4
                      py-[5px] ps-[12px] pe-[12px]
                      border-3 border-red-500
                      text-white
                      flex items-center justify-center
                      rounded
                      z-10
                    "
                  >
                    <HeartPlus size={13} />
                  </button>

                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-[#899195] text-[22px] md:text-[22px] font-bold mb-[20px]">
                      {bike.title}
                    </h3>

                    <p className="text-white/80 leading-[20px] text-[10px] md:text-[14px] ">
                      {bike.description}
                    </p>
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
