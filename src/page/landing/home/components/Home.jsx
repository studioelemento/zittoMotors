import { ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)] mt-[80px] md:mt-[120px] overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        src="/Home Page/hero-bg.webp"
        alt="Zitto Motorcycle"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_25%]"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="absolute left-4 sm:left-6 md:left-[15%] bottom-20 md:top-1/2 md:-translate-y-1/2 z-10 max-w-[90%]">
        {/* Caption */}
        <p
          className="text-white/90 font-bold tracking-wide mb-2 text-[clamp(14px,2vw,22px)]"
        >
          For a different breed of motorcycle users.
        </p>

        {/* Heading */}
        <h1
          className="text-white/80 saira font-bold uppercase leading-none md:leading-[91px] text-[clamp(3rem,10vw,7.5rem)]"
          // style={{ fontFamily: "Saira, sans-serif" }}
        >
          FOR THE <br />
          ENTHUSIAST
        </h1>
      </div>

      {/* Mobile Scroll Arrow */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center md:hidden z-10">
        <ChevronDown
          size={36}
          strokeWidth={3}
          className="text-red-500 animate-bounce"
        />
      </div>
    </section>
  );
};

export default Home;