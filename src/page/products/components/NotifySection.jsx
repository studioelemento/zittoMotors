import { ChevronRight } from "lucide-react";

export default function NotifySection() {
  return (
    <section className="relative  text-white bg-linear-[137deg] from-black from-80% to-white/20 to-100% overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
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
      </nav>

      {/* Content */}
      <div className="py-28">
        <div className="relative mx-auto w-[95%]">
          {/* Border Frame */}
          <div className="relative h-[220px] border border-red-600 rounded-bl-xl rounded-br-xl">
            {/* Glow */}
            <div className="absolute inset-0 " />

            {/* Center Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center">
              <h1
                className="
                  text-center
                  text-6xl
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-red-600
                "
              >
                Be The First To Know
              </h1>

              <p className="mt-6 max-w-2xl text-center text-white/80">
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
                  bg-red-600
                  px-10
                  py-4
                  text-xl
                  font-semibold
                  transition
                  hover:bg-red-500
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
          bg-red-600
          text-white
        "
      >
        ^
      </button>
    </section>
  );
}