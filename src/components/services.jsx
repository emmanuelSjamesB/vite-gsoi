import React from "react";
import { faGlobe, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Solutions = () => {
    return (
        <>
            <div className="container">
                <h3 className="text-center text-uppercase pt-4 py-5">Services</h3>
            </div>
            <div className="container marketing">
                <div className="row">
                   
                <div className="col-lg-3 col-md-6">
        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Third Party Inspections</title>
          <rect width="100%" height="100%" fill="#ffc30f"/>
          
  <FontAwesomeIcon icon={faClipboardList} size="1x" color="#000" border="true" fixedWidth="10px" />

        </svg>
        <h2>Third Party Inspections</h2>
        <p>Our inspectors are ready for your assignment, short and long term, representing your interest making sure that your instructions are followed, reporting in detail and on time.</p>
      </div>
                    
                    <div className="col-lg-3 col-md-6">
        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Expediting</title>
          <rect width="100%" height="100%" fill="#777"/>
          <FontAwesomeIcon icon={faGlobe} size="3x" color="#fff" />
        </svg>
        <h2>Expediting</h2>
        <p>The GSOI expeditors create a good relation with vendors, obtaining detailed information regarding the status of your project at different stages.</p>
      </div>

      <div className="col-lg-3 col-md-6">
        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Risk/Reliability Assessments</title>
          <rect width="100%" height="100%" fill="#777"/>
          <FontAwesomeIcon icon={faGlobe} size="3x" color="#fff" />
        </svg>
        <h2>Risk/Reliability Assessments</h2>
        <p>GSOI provides custom made risk assessments including reliability assessments for electromechanical equipment, components and machinery. Supported by monitoring and follow up on site. .</p>
      </div>

      <div className="col-lg-3 col-md-6">
        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Production Monitoring</title>
          <rect width="100%" height="100%" fill="#777"/>
          <FontAwesomeIcon icon={faGlobe} size="3x" color="#fff" />
        </svg>
        <h2>Production Monitoring</h2>
        <p>The GSOI inspectors witness and document the manufacturing process. You will receive a periodical reports on demand, regarding quality and completion status or your material, giving you the overview of the entire process..</p>
      </div>
      
                </div>
            </div>
        </>
    );
};

export default Solutions;
