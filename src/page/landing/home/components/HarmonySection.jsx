import { ChevronRight } from "lucide-react";

export default function HarmonySection() {
  return (
    <section className="h-screen relative overflow-hidden bg-black ">
      <div className="absolute inset-0 bg-linear-[155deg] from-black \ to-zinc-900" />

      <div className="flex max-w-[1140px] relative mx-auto h-screen items-center  px-6">
        <div className="grid items-center my-auto items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl ps-[80px] text-white/70">
            <h2 className="text-5xl font-bold leading-[53px]  text-[46px]">
              A Harmony of
              <br />
              Form and Function
            </h2>

            <p className="mt-6 text-[20px]  text-white leading-tight pe-[50px]">
              Our lineup of motorcycles epitomizes sophistication in design,
              complemented by unparalleled performance attributes and an array
              of state-of-the-art technologies. A fusion of exquisite
              aesthetics, high-performance capabilities, and cutting-edge
              innovation.
            </p>

            <button className="mt-4 dm-sans flex items-center gap-4 rounded bg-[#D4373D] px-[30px] py-[15px] text-white transition hover:bg-red-700">
              Show me more
              <span className="ml-[90px]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
              >
                <path
                  d="M11.6151 22.1257L21.1949 12.5459L11.6151 2.9661L13.744 0.83725L25.4526 12.5459L13.744 24.2545L11.6151 22.1257ZM0.970916 22.1257L10.5507 12.5459L0.970917 2.9661L3.09976 0.83725L14.8084 12.5459L3.09976 24.2545L0.970916 22.1257Z"
                  fill="white"
                ></path>
              </svg>{" "}
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Home Page/Section 5.png"
              alt="Motorcycle details collage"
              loading="lazy"
              className="w-full max-w-[520px] ps-[150px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
