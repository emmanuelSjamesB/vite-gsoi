
import React, { useState } from "react";
import backgroundImage from '../assets/img/cta-bg.jpg'; // importar la imagen de fondo

const Contacto = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setBackgroundPosition({ x, y });
  };

  return (
<div
  className="container-fluid"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: `${50 + backgroundPosition.x / 10}% ${
      50 + backgroundPosition.y / 10
    }%`,
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 0", // Espacio en la parte superior e inferior
  }}
  onMouseMove={handleMouseMove}
>
  <div className="contact-form-container text-muted shadow-sm rounded p-4 lh-2 bg-white">
    <h3 className="container-fluid text-center text-uppercase pt-4 pb-3 contacto">
      Contact Us
    </h3>
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          minLength={3}
          maxLength={50}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Contact No.
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="options" className="form-label">
          Open this select menu
        </label>
        <select className="form-select" id="options" required>
          <option value="">--Select One--</option>
          <option value="1">Cooperation</option>
          <option value="2">More Information</option>
          <option value="3">Meeting</option>
          <option value="4">Apply for a job</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="query" className="form-label">
          Request
        </label>
        <textarea
          className="form-control"
          id="query"
          cols="30"
          rows="5"
          required
          minLength={10}
          maxLength={500}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email.
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Contacto;
