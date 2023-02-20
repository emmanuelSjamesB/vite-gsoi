import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "animate.css";

const SocialMediaBar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = {
    color: "#ffc105",
    padding: "5px",
    margin: "0 15px",
  };

  useEffect(() => {
    if (hoveredIcon === "facebook") {
      iconStyle.color = "blue";
    } else if (hoveredIcon === "google") {
      iconStyle.color = "red";
    }else if (hoveredIcon === "inkedin") {
      iconStyle.color = "blue";
    }else if (hoveredIcon === "instagram") {
      iconStyle.color = "turquoise";
    } else {
      iconStyle.color = "#ffc105";
    }
  }, [hoveredIcon]);

  return (
    <div
      className="container-fluid social-media-bar animate__animated animate__fadeInDown d-flex justify-content-center py-5"
    >
      <a
        href="https://www.linkedin.com/company/garcia-survey-&-inspeksjon/"
        target="_blank"
        rel="noreferrer"
        style={{ ...iconStyle, color: hoveredIcon === "inkedin" ? "blue" : "#ffc105" }}
        onMouseEnter={() => setHoveredIcon("inkedin")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/inspectionsnorway"
        target="_blank"
        rel="noreferrer"
        style={{ ...iconStyle, color: hoveredIcon === "facebook" ? "blue" : "#ffc105" }}
        onMouseEnter={() => setHoveredIcon("facebook")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/gsoias/"
        target="_blank"
        rel="noreferrer"
        style={{ ...iconStyle, color: hoveredIcon !== "instagram" ? "#ffc105" : "turquoise" }}
        onMouseEnter={() => setHoveredIcon("instagram")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://gsoi.business.site/"
        target="_blank"
        rel="noreferrer"
        style={{ ...iconStyle, color: hoveredIcon === "google" ? "red" : "#ffc105" }}
        onMouseEnter={() => setHoveredIcon("google")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaBar;


/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "animate.css";


const SocialMediaBar = () => {
  const iconStyle = {
    color: "#ffc105",  
    padding: "5px",
    margin: "0 15px",
  };
  return (
    <div className="container-fluid social-media-bar animate__animated animate__fadeInDown d-flex justify-content-center py-5" >
      <a href="https://www.linkedin.com/company/garcia-survey-&-inspeksjon/" target="_blank" rel="noreferrer" style={{ ...iconStyle }}>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://www.facebook.com/inspectionsnorway" target="_blank" rel="noreferrer" style={{ ...iconStyle }}>
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a href="https://www.instagram.com/gsoias/" target="_blank" rel="noreferrer" style={{ ...iconStyle }}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://gsoi.business.site/" target="_blank" rel="noreferrer" style={{ ...iconStyle }}>
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
    </div>
  );
};





export default SocialMediaBar;*/
