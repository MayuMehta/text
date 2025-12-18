import React from "react";
import "./style.css";

function Contactus(props) {
  return (
    <>
      <div className={`container min-vh-100 d-flex justify-content-center align-items-center text-${props.textColor} py-4`}>
        <div className="bor-div border p-4 h-100">
          <h2 className="text-center">Contact Us</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="p-3">
              <h4>Meet Us</h4>
              <h6>Our Address</h6>
              <p>123, TextWorld Street, Code City, 45678</p>
              <p><b>Email</b>: mail@gmail.com</p>
              <p><b>Phone</b>: +123 456 7890</p>
            </div>
            <div className="p-3">
              <h4>Send Message</h4>
              <p>if you have any query, fill this form. We'll get back to you.</p>
              <form action="" className="py-3">
                <div>
                  <label htmlFor="name" className="fw-bold">Name:</label>
                  <br />
                  <input type="text" className="w-100"/>
                </div>
                <div>
                  <label htmlFor="email" className="fw-bold">Email:</label>
                  <br />
                  <input type="email" className="w-100" />
                </div>
                <div>
                  <label htmlFor="message" className="fw-bold">Message:</label>
                  <br />
                  <textarea name="message" id="message" className="w-100" rows={5}></textarea>
                </div>
                <input type="submit" value="Submit" className="bor-div btn btn-success" />
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
