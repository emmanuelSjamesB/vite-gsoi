import React from "react";

 const Contact = () => {
  return (
   
      <div className="container ">
        <h3 className="text-center text-uppercase pt-4 py-5">Contact Us</h3>
        <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
<form action="">
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Fullname</label>
    <input type="text" className="form-control" id="Name" required />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Contact No.</label>
    <input type="text" className="form-control" id="Phone" />
  </div>
  <div className="mb-3">
  <label htmlFor="options" className="form-label">Open this select menu</label>
    <select className="form-select" id="options">
      <option defaultValue="">--Select One--</option>
      <option value="1">Cooperation</option>
      <option value="2">More Information</option>
      <option value="3">Meeting</option>
      <option value="4">Apply for a job</option>
    </select>
  </div>
  <div className="mb-3">
    <label htmlFor="query" className="form-label">Request</label>
    <textarea className="form-control"  id="query" cols="30" rows="10" required></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleImputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" required/>
    <div id="emailHelp" className="form-text">we'll never share your email</div>
    <div className="d-grid">
    <button tipe="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>    
</form>
</div>
 </div>
     
  );
};
export default Contact;