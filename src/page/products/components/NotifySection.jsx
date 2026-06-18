import { ChevronRight } from "lucide-react";

export default function NotifySection() {
  return (
    <section className="relative  text-white bg-linear-[137deg] from-black from-60% to-white/10 to-160% overflow-hidden">
      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="mx-auto flex h-20 items-center justify-between px-16">
          <img
            src="/logo.svg"
            alt="Z"
            className="h-12 w-auto"
          />

          <div className="flex gap-12 text-lg">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </nav> */}

      {/* Content */}
      <div className="md:py-[40px] p-[15px]">
        <div className="relative mx-0 md:mx-auto w-full md:w-[95%]">
          {/* Border Frame */}
          <div className="relative p-12 py-[50px] px-[20px] h] border-[2px] border-[#D4373D] rounded-lg ">
            {/* Glow */}
            <div className="absolute inset-0 " />

            {/* Center Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center">
              <h1
                className="
                saira
                  text-center
                  text-[28px]
                  lg:text-[60px]
                  font-semibold
                  uppercase
                  text-[#D4373D]
                "
              >
                Be The First To Know
              </h1>

              <p className="mt-6 dm-sans max-w-2xl text-center text-[14px] text-white/80">
                Register below to stay in the loop and be the first to know
                about all the electrifying updates!
              </p>

              <button
                className="
                  mt-8
                  flex
                  items-center
                  gap-4
                  rounded
                  bg-[#D4373D]
                  md:px-[40px]
                  px-[30px]
                  py-[12px]
                  text-[14px]
md:text-[20px]                  font-semibold
                  transition
                  hover:bg-[#b82e34]
                "
              >
                Keep me updated
                <ChevronRight size={28} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Motorcycle Background */}
      <img
        src="/bike.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          w-[75%]
          -translate-x-1/2
          opacity-20
        "
      />

      {/* Back To Top */}
      <button
        className="
          fixed
          bottom-6
          right-6
          flex
          h-10
          w-10
          items-center
          justify-center
          bg-[#D4373D]
          text-white
        "
      >
        ^
      </button>
    </section>
  );
}
