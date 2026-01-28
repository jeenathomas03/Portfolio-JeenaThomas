import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact Details</h1>
      <p className="subtitle">
        Feel free to reach out. We’d love to hear from you.
      </p>

      <div className="contact-container">
        {/* FORM */}
        <div className="contact-form">
          <h3>Connect with Me</h3>

          <form>
            <div className="row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* DETAILS */}
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p className="details-text">
            You can contact us using the information below.
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
              <p>jeenathomas53@gmail.com</p>
            </div>
          </div>

          <div className="social">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
