import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-md-7 pe-0">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95373531531848!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfb1d0c2f%3A0x3c5b6f58e4c0c3e0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1632477832593!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: "0",borderRadius:'10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-5 pe-0">
            <form className="ps-5 pe-5 contact-form">
                <h2 className="text-center text-head">Send us a Message</h2>
                <div className="field mt-5">
                    <label htmlFor="" className="d-block">Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control w-100"/>
                </div>
                <div className="field mt-2">
                    <label htmlFor="" className="d-block">Email <span className="text-danger">*</span></label>
                    <input type="text" className="form-control w-100"/>
                </div>
                <div className="field mt-2">
                    <label htmlFor="" className="d-block">Message<span className="text-danger">*</span></label>
                    <textarea type="text" rows={4} className="form-control w-100"/>
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
