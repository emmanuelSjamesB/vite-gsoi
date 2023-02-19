import React from "react";

import logo from '../assets/img/logo-3.png'

const Navbarx = () => {
  const nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow',);
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

    
return (
<div >
<nav id="navbar-example2" className="container-fluid bg-light1 navbar navbar-expand-lg fixed-top px-4 mb-0">

  <a className="navbar-brand" href="#"><img src={logo} className="d-block w-100" alt="Logo"/></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <ul className="navbar-nav md-auto mb-2 mb-lg-0"> 

      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#scrollspyHeading1"></a>
      </li >

      <li className="nav-item">    
        <a className="nav-link" href="#scrollspyHeading2">AboutUs</a>
      </li>
      <li className="nav-item">   
        <a className="nav-link" href="#scrollspyHeading3">Solutions</a>
      </li>
      <li className="nav-item"> 
        <a className="nav-link" href="#scrollspyHeading4">Contact</a>
      </li>
      <li className="nav-item"> 
        <a className="nav-link" href="#scrollspyHeading5">Recent News</a>
      </li>
      
  </ul>
  </div>
  
</nav>
</div>
);
};

export default Navbarx;