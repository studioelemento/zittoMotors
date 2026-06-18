import { useState } from "react";

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

  const changeSlide = (direction) => {
    setIndex((prev) =>
      direction === "next"
        ? (prev + 1) % features.length
        : (prev - 1 + features.length) % features.length,
    );
  };

  return (
    <section className="bg-white">
      {/* Mobile Slider */}
      <div className="relative md:hidden h-[473px]  w-full overflow-hidden">
        <div className="group relative h-full">
          <img
            key={index}
            src={features[index].image}
            alt={features[index].title}
            className="absolute inset-0 h-full w-full object-cover animate-bike-enter"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div
            className="absolute                       --y-1/2translate
  top-[329px]
 left-10 z-10 w-min "
          >
            <h3
              className=" saira
                  text-[18px]
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

            <p className="mt-3 text-[9px] leading- dm-sans text-white">
              {features[index].description}
            </p>
          </div>
        </div>

        {/* Left Arrow */}z
        <button
          onClick={() => changeSlide("prev")}
          className="
            absolute
            left-0
            top-[339px]
            -translate-y-1/2
            h-[25px]
            w-[20px]
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
            className="w-full h-full"
            viewBox="0 0 29.729 25.458"
            fill="white"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0,12.023H0L12.02,0l2.829,2.829L7.655,10.022H28.522v4H7.656l7.193,7.194L12.02,24.044Z"
              transform="translate(0.707 0.707)"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => changeSlide("next")}
          className="
            absolute
            right-0
            top-[339px]
            -translate-y-1/2
            h-[25px]
            w-[20px]
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
            className="w-full h-full"
            viewBox="0 0 29.729 25.458"
            fill="white"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M13.672,21.215l7.193-7.194H0v-4H20.866L13.673,2.829,16.5,0l12.02,12.02h0L16.5,24.043Z"
              transform="translate(0.5 0.707)"
            />
          </svg>
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
