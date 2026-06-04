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
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative h-[420px] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/80" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6">
              {/* Title */}
              <h3
                className="
                  text-3xl font-bold uppercase text-white
                  transition-all duration-500
                  translate-y-0
                  group-hover:-translate-y-8
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3 max-w-xs text-sm leading-relaxed text-white
                  opacity-0 translate-y-8
                  transition-all duration-500
                  group-hover:translate-y-0
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