import { ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      style={{backgroundImage : "url('/Home Page/hero-bg.webp')"}}
      className="relative w-full min-h-[calc(100vh-80px)] md:min-h-[85vh]  flex items-end md:items-center bg-no-repeat bg-cover bg-top overflow-hidden bg-black"
    >
      {/* Background Image */}
      {/* <img
        src="/Home Page/hero-bg.webp"
        alt="Zitto Motorcycle"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_25%]"
      /> */}

      {/* Overlay */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 60%)",
        }}
      /> */}

      {/* Content */}
      <div className="w-full px-[20px] md:ps-[80px]">
      <div className=" max-w-[1140px]  z-10 mx-auto *:block">
        {/* Caption */}
        <p
          className="text-[#FFFFFFBA] font-bold tracking-nprmal block mb-[20px] md:mb-2  ps-2 text-[clamp(16px,2vw,22px)]"
        >
          For a different breed of motorcycle users.
        </p>

        {/* Heading */}
        <p
          className="text-[#FFFFFFBA] saira font-bold uppercase mb-[40px] leading-none md:leading-[91px] text-[clamp(3rem,10vw,7.5rem)]"
          // style={{ fontFamily: "Saira, sans-serif" }}
        >
          FOR THE <br />
          ENTHUSIAST
        </p>
      </div>
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