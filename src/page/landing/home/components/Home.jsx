import Navbar from "./Navbar";

const Home = () => {
  return (
    <>

      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/Home Page/Home Hero Section (2).png')",
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative flex h-full items-center">
          <div className="ml-10 md:ml-24 lg:ml-60">
            <p className="mb-4 text-lg font-semibold text-white md:text-2xl">
              For a different breed of motorcycle users.
            </p>

            <h1 className="text-6xl font-extrabold uppercase leading-none tracking-tight text-white md:text-8xl lg:text-9xl">
              FOR THE
              <br />
              ENTHUSIAST
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;