export default function AboutSection() {
  return (
    <section id="about" className="bg-[#ffffff]">
      <div className="  md:px-[148px] md:pt-[200px] md:pb-[120px]">
        {/* Logo */}
        <div className=" pt-[40px] px-[20px] ">
        <img
          src="https://zittomotors.com/wp-content/uploads/2024/02/Zitto-logo-2.png"
          alt="Zitto"
          className="md:w-[210px] w-[20%] mx-auto md:mx-0"
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
          <div className="grid h-full md:grid-cols-4 grid-cols-3 grid-rows-2">
            {/* Left Tall */}
            <div className="row-span-2">
              <img
                src="https://zittomotors.com/wp-content/uploads/2024/04/Rectangle103-31-Desktop-1.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Top Middle Left */}
            <div>
              <img
                src="https://zittomotors.com/wp-content/uploads/2024/03/Rectangle101-31-Desktop-114-2.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Top Middle Right */}
            <div>
              <img
                src="https://zittomotors.com/wp-content/uploads/2024/04/Rectangle-159.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Tall */}
            <div className="row-span-2 md:block hidden">
              <img
                src="https://zittomotors.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-03-09-at-10.59-1.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom Wide */}
            <div className="col-span-2">
              <img
                src="	https://zittomotors.com/wp-content/uploads/2024/03/Rectangle104-31-Desktop-1.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}