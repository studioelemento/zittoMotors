export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/Final-Home-Page-Zitto-Website-Video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Optional Content */}
      {/* <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold tracking-wider lg:text-7xl">
            ZITTO
          </h1>
        </div>
      </div> */}
    </section>
  );
}