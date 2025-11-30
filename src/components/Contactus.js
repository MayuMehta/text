import React from "react";

function Contactus(props) {
  return (
    <>
      <div className={`container d-flex justify-content-center text-${props.textColor} min-vh-100 py-4`}>
        <div className="border p-4 h-100">
          <h2>Contact Us</h2>
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
            <input type="submit" value="Submit" className="btn btn-success" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactus;
