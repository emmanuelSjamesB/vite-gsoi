import React from "react";
import uno from '../assets/img/img-1.jpg'
import dos from '../assets/img/img-2.jpg'
import tres from '../assets/img/img-3.jpg'
const Recent = () => {
return (
    <>
<div className="container py-5">
<h3 className="text-center text-uppercase pt-4 py-5 titulo-h3">Recent Inspections</h3>
</div>

<div className="album py-5 bg-transparent">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col animate__animated animation-fill-mode: forwards; animate__fadeInTopLeft animate__delay-1.5s">
          <div className="card shadow-sm  ">
          <img src={uno} className="d-block w-100" alt="1"/>
            <div className="card-body">
              <h2 className="text-uppercase">gsoi</h2>
              <p className="card-text">Control de Pintura , España </p>
              <div className="d-flex justify-content-between align-items-center">              
                
              </div>
            </div>
          </div>
        </div>

        <div className="col animate__animated animate__fadeInTopLeft animate__delay-2s">
          <div className="card shadow-sm">
          <img src={dos} className="d-block w-100" alt="2"/>
            <div className="card-body">
            <h2 className="text-uppercase">gsoi</h2>
              <p className="card-text">FAT de Subsea Tool Basket, Noruega </p>
              <div className="d-flex justify-content-between align-items-center">              
                
              </div>
            </div>
          </div>
        </div>

        <div className="col animate__animated animate__fadeInTopLeft animate__delay-2.5s">
          <div className="card shadow-sm">
          <img src={tres} className="d-block w-100" alt="3"/>
            <div className="card-body">
            <h2 className="text-uppercase">gsoi</h2>
              <p className="card-text">FAT de Fire & Gas System, Noruega</p>
              <div className="d-flex justify-content-between align-items-center">              
                
              </div>
            </div>
          </div>
        </div>
        
        </div>
    </div>
</div>
</>

);
};

export default Recent;