import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer class="white-section" id="footer">
      <div class="container-fluid">
        <FontAwesomeIcon icon={faTwitter} className="footer-icons" />
        <FontAwesomeIcon icon={faFacebookF} className="footer-icons" />
        <FontAwesomeIcon icon={faInstagram} className="footer-icons" />
        {/* <i class="fab fa-twitter footer-icons"></i>
        <i class="fab fa-facebook-f footer-icons"></i>
        <i class="fab fa-instagram footer-icons"></i>
        <i class="fas fa-envelope footer-icons"></i> */}
        <p>© Copyright 2020 hamsa</p>
      </div>
    </footer>
  );
}

export default Footer;
