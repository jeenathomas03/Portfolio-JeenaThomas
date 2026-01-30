import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {/* Project Card 1 */}
        <div className="project-card">
        <h3>CineStream</h3>
            <p>
               CineStream is an OTT (Over-The-Top) streaming platform that provides users
               with a seamless experience for browsing, watching, and managing movies
               online. It is built using the MERN stack (MongoDB, Express, React, and Node.js).
            </p>

        </div>

        {/* Project Card 2 */}
        <div className="project-card">
        <h3>CineConnect</h3>
             <p>
                CineConnect is a live streaming platform that enables users to stream and
                watch content in real time with a smooth and interactive experience.
                It is developed using PHP and the CodeIgniter framework.
             </p>

        </div>

        {/* Project Card 3 */}
        <div className="project-card">
        <h3>BakEasy</h3>
            <p>
               A Home Bakery Management System designed to manage orders, products, and
               customer details efficiently. The application is developed using PHP with
               the Smarty templating engine to ensure a clean and organized user interface.
            </p>

        </div>
        <div className="project-card">
        <h3>MediTrack</h3>
             <p>
                MediTrack is a Medical Store Management System designed to efficiently
                manage inventory, billing, and customer details. It helps store owners
                keep track of medicines, sales, and stock in an organized and user-friendly way.
                The system is developed using Python.
             </p>
        </div>
        {/* <div className="project-card">
        <h3>MediTrack</h3>
             <p>
                MediTrack is a Medical Store Management System designed to efficiently
                manage inventory, billing, and customer details. It helps store owners
                keep track of medicines, sales, and stock in an organized and user-friendly way.
                The system is developed using Python.
             </p>
        </div> */}
        {/* <div className="project-card">
        <h3>MediTrack</h3>
             <p>
                MediTrack is a Medical Store Management System designed to efficiently
                manage inventory, billing, and customer details. It helps store owners
                keep track of medicines, sales, and stock in an organized and user-friendly way.
                The system is developed using Python.
             </p>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
