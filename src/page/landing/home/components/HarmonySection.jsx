import { ChevronRight } from "lucide-react";

export default function HarmonySection() {
  return (
    <section className="flex w-full md:h-screen relative overflow-hidden bg-black ">
      <div className="absolute inset-0 bg-[linear-gradient(159deg,_rgb(0,0,0)_39%,_rgb(255,255,255)_300%)] from-black \ to-zinc-900" />

      <div className="flex max-w-[1140px] relative mx-auto my-auto  items-center  md:px-6">
        <div className="flex items-center my-auto items-center gap-16  flex-col-reverse md:flex-row ">
          {/* Left Content */}

          <div className="md:max-w-xl px-[20px] py-[40px] md:ps-[80px] text-white/70">
            <h2 className=" font-bold leading-none md:leading-[53px]  text-[24px] md:text-[46px]">
              A Harmony of
              <br />
              Form and Function
            </h2>

            <p className="mt-6 text-[12px] md:text-[20px]  text-[#D1D1D1] leading-tight pe-[20px] md:pe-[50px]">
              Our lineup of motorcycles epitomizes sophistication in design,
              complemented by unparalleled performance attributes and an array
              of state-of-the-art technologies. A fusion of exquisite
              aesthetics, high-performance capabilities, and cutting-edge
              innovation.
            </p>

            <button className="mt-4  dm-sans flex items-center text-[16px] gap-4 rounded bg-[#D4373D] py-[10px] ps-[15px] pe-[20px] md:px-[30px] md:py-[15px] text-white transition hover:bg-red-700">
              Show me more
              <span className="ml-[90px] ">
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
          <div className="flex justify-center h-full ">
            <img
              src="/Home Page/Group-103.png"
              alt="Motorcycle details collage"
              loading="lazy"
              className=" h-auto md:hidden  object-contain"
            />
            <div className="hidden md:grid md:w-[420px] md:h-[385px] grid-cols-3 grid-rows-2 ">
              <img
                src="/Home Page/Harmony_1.png"
                alt="Motorcycle details collage"
                loading="lazy"
                className="hidden w-full h-full md:block  object-cover"
              />
              <img
                src="/Home Page/Harmony_2.png"
                alt="Motorcycle details collage"
                loading="lazy"
                className="hidden w-full h-full md:block  object-cover"
              />
              <img
                src="/Home Page/Harmony_3.png"
                alt="Motorcycle details collage"
                loading="lazy"
                className="hidden w-full h-full md:block  object-cover"
              />
              <img
                src="/Home Page/Harmony_4.png"
                alt="Motorcycle details collage"
                loading="lazy"
                className="hidden w-full h-full md:block  object-cover"
              />
              <img
                src="/Home Page/Harmony_5.png"
                alt="Motorcycle details collage"
                loading="lazy"
                className="hidden w-full h-full md:block  object-cover"
              />
              <img
                src="/Home Page/Harmony_6.png"
                alt="Motorcycle details collage"
                loading="lazy"
                className="hidden w-full h-full md:block  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
