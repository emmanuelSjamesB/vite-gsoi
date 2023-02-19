import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "animate.css";

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar animate__animated animate__fadeInDown d-flex justify-content-center" >
      <a href="https://www.linkedin.com/company/garcia-survey-&-inspeksjon/" target="_blank" rel="noreferrer" style={{ margin: "0 50px" }}>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://www.facebook.com/inspectionsnorway" target="_blank" rel="noreferrer" style={{ margin: "0 50px" }}>
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a href="https://www.instagram.com/gsoias/" target="_blank" rel="noreferrer" style={{ margin: "0 50px" }}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://gsoi.business.site/" target="_blank" rel="noreferrer" style={{ margin: "0 50px" }}>
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
    </div>
  );
};




export default SocialMediaBar;
