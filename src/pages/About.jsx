import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h1>About Me</h1>

        <p>
  Hi, I’m <strong>Jeena Thomas</strong>, a passionate and detail-oriented
  Full Stack Developer who loves turning ideas into functional and visually
  appealing web applications.
</p>

<p>
  I specialize in building modern, responsive, and user-friendly websites
  using technologies like React, Node.js, Express, and MongoDB. I enjoy
  working on both frontend and backend, which helps me understand complete
  application workflows.
</p>

<p>
  During my learning journey, I have built multiple projects that strengthened
  my problem-solving abilities and improved my understanding of real-world
  development practices such as authentication, API integration, and database
  management.
</p>

        <h3>Skills</h3>
        <ul className="skills">
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Node.js & Express</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>vite</li>
          <li>Php</li>
          <li>Codeingniter</li>
          <li>MySQL</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
