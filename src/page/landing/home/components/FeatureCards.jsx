import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "RAPID CHARGING",
    description: "Fast charging technology delivers power in minutes.",
    image: "/Home Page/Section 3 Image 1.png",
  },
  {
    title: "ACTIVE COOLING",
    description: "Advanced thermal management ensures peak performance.",
    image: "/Home Page/Section 3 Image 2.png",
  },
  {
    title: "ADAPTIVE CHASSIS",
    description: "Engineered for stability, comfort and responsiveness.",
    image: "/Home Page/Section 3 Image 3.png",
  },
];

export default function FeatureCards() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };
  return (
    <section className="bg-white">
      {/* Mobile Slider */}
      {/* Mobile Slider */}
      <div className="relative md:hidden">
        {/* Left Arrow */}
        <button
          onClick={prevFeature}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-[#D4373D] p-2 text-white shadow-lg"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Card */}
        <div className="relative h-[320px] overflow-hidden">
          <img
            src={features[currentFeature].image}
            alt={features[currentFeature].title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute bottom-0 left-0 z-10 w-full p-5">
            <h3 className="saira text-[clamp(1.5rem,6vw,2rem)] font-semibold uppercase text-white">
              {features[currentFeature].title}
            </h3>

            {/* Always visible on mobile */}
            <p className="mt-3 text-base text-white">
              {features[currentFeature].description}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextFeature}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-[#D4373D] p-2 text-white shadow-lg"
        >
          <ArrowRight size={18} />
        </button>

        {/* Dots */}
        {/* <div className="mt-4 flex justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentFeature === index ? "bg-[#D4373D] w-6" : "bg-slate-300"
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative h-[350px] lg:h-[420px] overflow-hidden cursor-pointer"
          >
            <img
              src={feature.image}
              alt={feature.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/80" />

            <div className="absolute bottom-0 left-0 z-10 w-full p-6">
              <h3
                className="
                  saira
                  text-[clamp(1.8rem,2.5vw,2.8rem)]
                  leading-none
                  font-semibold
                  uppercase
                  text-white
                  transition-all
                  duration-500
                  group-hover:-translate-y-10
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  dm-sans
                  mt-3
                  max-w-xs
                  text-base lg:text-lg
                  text-white
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:-translate-y-10
                  group-hover:opacity-100
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
