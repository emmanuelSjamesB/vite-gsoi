import React from "react";
import slide1 from '../assets/img/slide-1.jpg'
import slide2 from '../assets/img/slide-2.jpg'
import slide3 from '../assets/img/slide-3.jpg'
import slide4 from '../assets/img/slide-4.jpg'
import slide5 from '../assets/img/slide-5.jpg'

const Carrusel = () => {
    return (
    
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100" alt="1"/>
      <div className="carousel-caption">
        <h5 className="animate__animated animate__zoomIn animate__delay-1.5s">We provide industrial <span>Inspection</span> services in Norway.</h5>
        <p className="animate__animated animate__slideInDown animate__delay-1.7s" >Providing TPI, Expediting, Production Monitoring and Audits.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={slide5} className="d-block w-100" alt="2"/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="animate__animated animate__zoomIn animate__delay-1.5s">We have <span>Local</span> inspectors.</h5>
      <p className="animate__animated animate__slideInDown animate__delay-1.7s">Our inspectors are located in Norway at Stavanger,
         Bergen, Trondheim and Drammen. Sweden at Gothenburg. 
         Covering all Norway and Nordic Countries.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="3"/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="animate__animated animate__zoomIn animate__delay-1.5s">Our inspectors have <span>Certified</span> competences.</h5>
      <p className="animate__animated animate__slideInDown animate__delay-1.7s">IECEx - NACE - DS.1 - OFFSHORE - IRCA - NDT</p>
      </div> 
    </div>

    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="4"/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="animate__animated animate__zoomIn animate__delay-1.5s">We have <span>Local</span> inspectors.</h5>
      <p className="animate__animated animate__slideInDown animate__delay-1.7s">Our inspectors are located in Nordic Countries.</p>
      </div> 
    </div>

    <div className="carousel-item">
      <img src={slide4} className="d-block w-100" alt="5"/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="animate__animated animate__zoomIn animate__delay-1.5s">We have <span>Local</span> inspectors.</h5>
      <p className="animate__animated animate__slideInDown animate__delay-1.7s">Our inspectors are located in Norway at Stavanger,
         Bergen, Trondheim and Drammen. Sweden at Gothenburg. 
         Covering all Norway and Nordic Countries.</p>
      </div> 
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    

    )}
    export default Carrusel;