import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Footer Title */}
        <h4 className="footer-title">Follow Me</h4>

        {/* Social Media Links */}
        <div className="footer-social">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer-copy">
          &copy; 2026 Jeena Thomas. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
