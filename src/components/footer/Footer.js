import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer= () => {

    return(
    <footer className="text-center treca-boja">
    <div className="icons">
      <a href="/">
      <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="/">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="/">
      <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="/">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
    <p>Copyright ©2020 All rights reserved</p>

  </footer>
    );
};

export default Footer;