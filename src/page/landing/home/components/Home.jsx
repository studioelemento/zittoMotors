const Home = () => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        /* Start BELOW the fixed navbar (80px tall) */
        height: "100vh",
        marginTop: "120px",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Background Image */}
      <img
        src="/Home Page/Home Hero Section (2).png"
        alt="Zitto Motorcycle"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "110%",
          objectFit: "cover",
          objectPosition: "center 25%",
        }}
      />

      {/* Subtle left-side veil */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 55%)",
        }}
      />

      {/* Text block — roughly 50% down inside the image area */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "10%",
          paddingLeft: "clamp(2rem, 14vw, 14rem)",
        }}
      >
        {/* Caption */}
        <p
          style={{
              color: "rgba(255, 255, 255, 0.73)",
            fontSize: "22px",
            fontFamily : "Saira, sans-serif",
            fontWeight: 700,
            letterSpacing: "0.01em",
            margin: "0 0 2px 5px",
          }}
        >
          For a different breed of motorcycle users.
        </p>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "Saira, sans-serif",
            color: "rgba(255, 255, 255, 0.73)",
            fontSize: "118px",
            fontWeight: 700,
            lineHeight: "91px",
            letterSpacing: "",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          FOR THE <br />
          ENTHUSIAST
        </h1>
      </div>
    </section>
  );
};

export default Home;