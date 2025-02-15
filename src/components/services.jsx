import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,        // Icono para inspecciones
  faClock,         // Icono para expediting
  faChartLine,     // Icono para evaluaciones de riesgo
  faIndustry,      // Icono para monitoreo de producción
} from '@fortawesome/free-solid-svg-icons';
/*import React from "react";
import { faGlobe, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
*/
const Solutions = () => {
    return (
        <>
      <div className="container titulo-h3">
        <h3 className="text-center text-uppercase pt-4 py-5">Services</h3>
      </div>
      <div className="container marketing">
        <div className="row">
          {/* Third Party Inspections */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="icon-container mb-3">
                <FontAwesomeIcon icon={faSearch} size="3x" className="text-warning" />
              </div>
              <h2 className="h4">Third Party Inspections</h2>
              <p className="text-muted">
                Our inspectors are ready for your assignment, short and long term, representing your interest and ensuring your instructions are followed, reporting in detail and on time.
              </p>
            </div>
          </div>

          {/* Expediting */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="icon-container mb-3">
                <FontAwesomeIcon icon={faClock} size="3x" className="text-warning" />
              </div>
              <h2 className="h4">Expediting</h2>
              <p className="text-muted">
                The GSOI expeditors create good relationships with vendors, obtaining detailed information regarding the status of your project at different stages.
              </p>
            </div>
          </div>

          {/* Risk/Reliability Assessments */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="icon-container mb-3">
                <FontAwesomeIcon icon={faChartLine} size="3x" className="text-warning" />
              </div>
              <h2 className="h4">Risk/Reliability Assessments</h2>
              <p className="text-muted">
                GSOI provides custom-made risk assessments, including reliability assessments for electromechanical equipment, components, and machinery, supported by on-site monitoring and follow-up.
              </p>
            </div>
          </div>

          {/* Production Monitoring */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="icon-container mb-3">
                <FontAwesomeIcon icon={faIndustry} size="3x" className="text-warning" />
              </div>
              <h2 className="h4">Production Monitoring</h2>
              <p className="text-muted">
                The GSOI inspectors witness and document the manufacturing process. You will receive periodic reports on demand regarding quality and completion status, giving you an overview of the entire process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
       
    );
};

export default Solutions;

 /*<>
            <div className="container titulo-h3">
                <h3 className="text-center text-uppercase pt-4 py-5">Services</h3>
            </div>
            <div className="container marketing">
                <div className="row">
                   
                <div className="col-lg-3 col-md-6">
        <svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="#ffc30f"/>
             <FontAwesomeIcon icon={faClipboardList} size="2x" color="#000"  />
        </svg>
        <h2>Third Party Inspections</h2>
        <p>Our inspectors are ready for your assignment, short and long term, representing your interest making sure that your instructions are followed, reporting in detail and on time.</p>
      </div>
                    
                    <div className="col-lg-3 col-md-6">
                    <svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#ffc30f"/>
             <FontAwesomeIcon icon={faClipboardList} size="2x" color="#000"  />
        </svg>
        <h2>Expediting</h2>
        <p>The GSOI expeditors create a good relation with vendors, obtaining detailed information regarding the status of your project at different stages.</p>
      </div>

      <div className="col-lg-3 col-md-6">
      <svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="#ffc30f"/>
             <FontAwesomeIcon icon={faClipboardList} size="2x" color="#000"  />
        </svg>
        <h2>Risk/Reliability Assessments</h2>
        <p>GSOI provides custom made risk assessments including reliability assessments for electromechanical equipment, components and machinery. Supported by monitoring and follow up on site. .</p>
      </div>

      <div className="col-lg-3 col-md-6">
      <svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third Party Inspections" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#ffc30f"/>
             <FontAwesomeIcon icon={faClipboardList} size="2x" color="#000"  />
        </svg>
        <h2>Production Monitoring</h2>
        <p>The GSOI inspectors witness and document the manufacturing process. You will receive a periodical reports on demand, regarding quality and completion status or your material, giving you the overview of the entire process..</p>
      </div>
      
                </div>
            </div>
        </>*/
