import React from "react";
import Carrusel from './Carrusel';
import AboutUs from "./aboutus";
import Solutions from "./solutions";
import  Contact  from "./contact";
import  Recent from "./recent";
const Headerx = () => {
return (
<div >
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-transparent p-0 rounded-2" tabindex="0">
  
  <div id="scrollspyHeading1"><Carrusel /></div>
  
  <div id="scrollspyHeading2"><AboutUs /></div>
  
  
  <div id="scrollspyHeading3"><Solutions /></div>
  
  <div id="scrollspyHeading4"><Contact /></div>
  
  <div id="scrollspyHeading5"><Recent /></div>
  
  </div>
</div>
);
};

export default Headerx;