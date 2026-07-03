export default function AboutSection() {
  return (
    <section id="about" className="bg-[#ffffff]">
      <div className="  md:px-[148px] md:pt-[200px] md:pb-[120px]">
        {/* Logo */}
        <div className=" pt-[40px] px-[20px] ">
        <img
          src="/Logo/logoWithText.png"
          alt="Zitto"
          className="md:w-[210px] w-[20%] mx-auto md:mx-0 invert"
        />

        {/* Heading */}
        <h2 className="mt-[34px] saira text-[24px] text-center md:text-left  md:text-[46px] font-semibold uppercase leading-none tracking-[0.03em] text-black">
          ESTD 2020
        </h2>

        {/* Description */}
        <p className="mt-[28px]  text-[12px] md:text-[20px] leading-[1.45] text-black">
          At Zitto, we are focused on crafting high-performance motorcycles that
          redefine the thrill of riding with unmatched speed, agility, and
          precision. Saving the planet? Well, that happens to be a delightful
          bonus.
        </p>
        </div>

        {/* Gallery */}
        <div className="md:mt-[120px] md:h-[770px] mt-[60px] mb-[30px] overflow-hidden">
          <div className="grid h-full grid-cols-3 grid-rows-2">
            {/* Left Tall */}
            <div className="row-span-2">
              <img
                src="/About/about_tank.png"
                alt="Motorcycle Tank"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Top Middle */}
            <div>
              <img
                src="/About/Rectangle101-31-Desktop-114.png"
                alt="Sketches"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Top Right */}
            <div>
              <img
                src="/About/Rectangle 159.png"
                alt="Team working"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom Wide */}
            <div className="col-span-2">
              <img
                src="/About/about_.png"
                alt="Designing on iPad"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}