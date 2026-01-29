import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact Details</h1>

      <div className="contact-container single">
        {/* DETAILS ONLY */}
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p className="details-text">
            {/* Feel free to reach out to me for collaborations, job opportunities,
            or any queries. */}
          </p>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>Punalur, Kollam, Kerala, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhone />
            <div>
              <h4>Mobile</h4>
              <p>+91 94478 50054</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:jeenathomas53@gmail.com">
                  jeenathomas53@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="social">
            <a href="https://github.com/jeenathomas03" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jeena-thomas-8893ba313"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
