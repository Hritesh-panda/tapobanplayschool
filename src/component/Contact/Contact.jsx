import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="head-sec">
          <p className="sm-head">CONTACT</p>
          <h1 className="g-i-t">Get in Touch</h1>
        </div>
        <p className="text-muted mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="row">
          <div className="col-md-6">
            <img
              className="contact-img"
              src="https://playschool.ingridtemplates.com/wp-content/uploads/sites/10/2020/10/child-preparing-for-school-1024x707.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="row contact">
              <div className="col-md-6">
                <h2 className="text-white">Our Hours</h2>
                <p className="mt-3">MON-FRI 09:00 – 19:00</p>
                <p>SAT-SUN 10:00 – 14:00</p>
              </div>
              <div className="col-md-6">
                <h2 className="text-white">Contact Us</h2>
                <p className="mt-3">Phone: + 1 800 755 60</p>
                <p>Email:email@email.com</p>
              </div>
              <div className="col-md-6">
                <h2 className="text-white mt-5">Location</h2>
                <p className="mt-3">887 Myrtle Dr.</p>
                <p>Bronx, NY 16544</p>
              </div>
              <div className="col-md-6">
                <h2 className="text-white mt-5">Follow Us</h2>
                <p className="mt-3">MON-FRI 09:00 – 19:00</p>
                <p>SAT-SUN 10:00 – 14:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7 pe-0">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95373531531848!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfb1d0c2f%3A0x3c5b6f58e4c0c3e0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1632477832593!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-5 pe-0">
            <form className="ps-5 pe-5 contact-form">
              <h2 className="text-center text-head">Send us a Message</h2>
              <div className="field mt-5">
                <label htmlFor="" className="d-block">
                  Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100" />
              </div>
              <div className="field mt-2">
                <label htmlFor="" className="d-block">
                  Email <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100" />
              </div>
              <div className="field mt-2">
                <label htmlFor="" className="d-block">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea type="text" rows={4} className="form-control w-100" />
              </div>
              <button className="send-btn mt-3">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
