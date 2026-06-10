export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f3f3f3]">
      <div className="mx-auto max-w-[1440px] px-8 pt-[140px] pb-[120px]">
        {/* Logo */}
        <img
          src="https://zittomotors.com/wp-content/uploads/2024/02/Zitto-logo-2.png"
          alt="Zitto"
          className="w-[210px]"
        />

        {/* Heading */}
        <h2 className="mt-[34px] saira text-[54px] font-semibold uppercase leading-none tracking-[0.03em] text-black">
          ESTD 2020
        </h2>

        {/* Description */}
        <p className="mt-[28px] max-w-[1320px] text-[20px] leading-[1.45] text-black">
          At Zitto, we are focused on crafting high-performance motorcycles that
          redefine the thrill of riding with unmatched speed, agility, and
          precision. Saving the planet? Well, that happens to be a delightful
          bonus.
        </p>

        {/* Gallery */}
        <div className="mt-[120px] h-[610px] overflow-hidden">
          <div className="grid h-full grid-cols-4 grid-rows-2">
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
            <div className="row-span-2">
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