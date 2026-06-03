import { ChevronRight } from "lucide-react";

export default function HarmonySection() {
  return (
    <section className="h-screen relative overflow-hidden bg-black ">
      <div className="absolute inset-0 bg-linear-[155deg] from-black \ to-zinc-900" />

      <div className="flex relative mx-auto h-screen items-center max-w-7xl px-6">
        <div className="grid items-center my-auto items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl text-white/70">
            <h2 className="text-5xl font-bold leading-tight  lg:text-6xl">
              A Harmony of
              <br />
              Form and Function
            </h2>

            <p className="mt-8 text-lg leading-relaxed ">
              Our lineup of motorcycles epitomizes sophistication in design,
              complemented by unparalleled performance attributes and an array
              of state-of-the-art technologies. A fusion of exquisite
              aesthetics, high-performance capabilities, and cutting-edge
              innovation.
            </p>

            <button className="mt-10 flex items-center gap-4 rounded bg-red-600/60 px-8 py-4 text-white transition hover:bg-red-700">
              Show me more
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Home Page/Section 5.png"
              alt="Motorcycle details collage"
              className="w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}