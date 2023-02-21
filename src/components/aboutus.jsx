import React from "react";
import about from '../assets/img/offer-pic.jpg';
import { Link } from "react-scroll";
const AboutUs = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={about}
              className="d-block mx-lg-auto img-fluid w-100"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="display-5 fw-bold lh-1 mb-3">GSOI </h3>
            <p className="lead">
              provides affordable field engineering solutions for your inspection
              needs in the Oil & Gas and renewable energy industry.
            </p>
            <p className="lead">
              Located in Stavanger, the oil capital of the North Sea. We offer an
              independent solution for your business, from FAT, FI, PPM, PIM,
              Surveillance, Expediting to Offshore survey.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
        to="scrollspyHeading4"
        smooth={true}
        duration={500}
        className="btn btn-outline-warning btn-lg px-4 me-md-2"
      >
        Contact Us
      </Link>
      <Link
        to="scrollspyHeading3"
        smooth={true}
        duration={500}
        className="btn btn-outline-warning btn-lg px-4 me-md-2"
      >
        Solutions
      </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;



/*import React from "react";
import about from '../assets/img/offer-pic.jpg';
const AboutUs = () => {
    return (
      <div>
         <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={about} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div className="col-lg-6">
          <h3 className="display-5 fw-bold lh-1 mb-3">GSOI </h3>
          <p className="lead">provides affordable field engineering solutions for your inspection needs in the Oil & Gas and renewable energy industry.</p>
          <p className="lead">Located in Stavanger, the oil capital of the North Sea. We offer an independent solution for your business, from FAT, FI, PPM, PIM, Surveillance, Expediting to Offshore survey.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-outline-warning btn-lg px-4 me-md-2">Contact</button>
            <button type="button" className="btn btn-outline-warning btn-lg px-4">Solutions</button>
          </div>
        </div>
      </div>
    </div>
         


         </div>
           
         

         );
};

export default AboutUs;*/