import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-yellow">
          <div className="container">
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <img
                  className="logo-footer-img"
                  src="https://playschool.ingridtemplates.com/wp-content/uploads/sites/10/elementor/thumbs/lego-blocks-oxktkzhmsrky4ynj8aul92ie1zkfsl6h3tm39scelk.png"
                  alt=""
                />
                <div className="title ms-3">Playschool</div>
              </div>
              <div className="row">
                <div className="col-3">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div className="col-9">641-754-0072</div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
