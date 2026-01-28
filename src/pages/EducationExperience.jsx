import "./EducationExperience.css";

const EducationExperience = () => {
  return (
    <section id="education-experience" className="edu-exp">
      <h1 className="section-title">Education & Experience</h1>
      <p className="section-subtitle">
        My academic background and professional journey
      </p>

      <div className="timeline">

        {/* EDUCATION */}
        <div className="timeline-column">
          <h2>Education</h2>

          <div className="card">
            <span className="year">2022 – 2025</span>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>UIT Kottarakara, Kerala University</p>
          </div>

          <div className="card">
            <span className="year">2024 – 2025</span>
            <h3>Full Stack Development (MERN)</h3>
            <p>Mashup Stack, Kochi</p>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="timeline-column">
          <h2>Experience</h2>

          <div className="card">
            <span className="year">2025 – Present</span>
            <h3>AEM Developer Intern</h3>
            <p>
              Working with Adobe Experience Manager, component development,
              templates, and content management.
            </p>
          </div>

          <div className="card">
            <span className="year">2024</span>
            <h3>Full Stack Intern</h3>
            <p>
              Built MERN stack applications, REST APIs, authentication,
              and admin dashboards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationExperience;
