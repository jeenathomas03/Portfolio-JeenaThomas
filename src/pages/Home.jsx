import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3>Hello, I’m</h3>
        <h1>Jeena Thomas</h1>
        <h2>Full Stack Developer <strong> (MERN)</strong></h2>

        <p>
          I build modern, responsive web applications using React, Node.js,
          Express, and MongoDB.
        </p>

        <div className="home-buttons">
          <a
            href="/Jeena_Thomas_cv_.pdf"
            download
            className="btn primary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
