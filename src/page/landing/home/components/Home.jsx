import { ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] mt-[80px] md:mt-[120px] overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        src="/Home Page/hero-bg.webp"
        alt="Zitto Motorcycle"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full md:h-[110%] object-cover object-[center_25%]"
      />

      {/* Subtle left-side veil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 55%)",
        }}
      />

      {/* Text block */}
      <div
        className="absolute bottom-20 md:top-[35%] md:bottom-auto left-[2%] md:left-[10%] px-4 md:pl-[clamp(2rem,14vw,14rem)] w-full"
      >
        {/* Caption */}
        <p
          className="text-white/90 text-[16px] md:text-[22px] font-bold tracking-wide mb-1 md:mb-2 ml-1"
          style={{ fontFamily: "Saira, sans-serif" }}
        >
          For a different breed of motorcycle users.
        </p>

        {/* Heading */}
        <h1
          className="text-white/80 text-[54px] md:text-[118px] font-bold leading-[1] md:leading-[91px] uppercase m-0"
          style={{ fontFamily: "Saira, sans-serif" }}
        >
          FOR THE <br />
          ENTHUSIAST
        </h1>
      </div>
      
      {/* Scroll Down Arrow for Mobile (visible only on mobile) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center md:hidden">
        <ChevronDown size={40} strokeWidth={3} className="text-red-500 animate-bounce" />
      </div>
    </section>
  );
};

export default Home;