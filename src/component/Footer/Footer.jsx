import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-yellow">
          <div className="container text-white pt-5 pb-5">
            <div className="row">
              <div className="col-md-3 res-p-0 res-p-sm">
                <div className="d-flex align-items-center res-flex-wrap">
                  <img
                    className="logo-footer-img"
                    src="https://playschool.ingridtemplates.com/wp-content/uploads/sites/10/elementor/thumbs/lego-blocks-oxktkzhmsrky4ynj8aul92ie1zkfsl6h3tm39scelk.png"
                    alt=""
                  />
                  <div className="title ms-3">Playschool</div>
                </div>
                <div className="fs-18 row align-items-center mt-3">
                  <i class="bi bi-telephone-fill text-red col-1"></i>
                  <span className="ms-3 col">641-754-0072</span>
                </div>
                <div className="fs-18 row align-items-center mt-3">
                  <i class="bi bi-envelope-fill text-red col-1"></i>
                  <span className="ms-3 col">email@email.com</span>
                </div>
                <div className="fs-18 row align-items-center mt-3">
                  <i class="bi bi-geo-alt-fill text-red col-1"></i>
                  <span className="ms-3 col">
                    1718 Park Boulevard Marshalltown, IA 50158
                  </span>
                </div>
              </div>
              <div className="col-md-4 ps-5 mt-3 res-p-0 res-p-sm">
                <h5 className="heading-2 res-mt-4">About Us</h5>
                <p className="text-white mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div className="footer-social-icon d-flex">
                  <div>
                    <i class="bi bi-facebook bg-red"></i>
                  </div>
                  <div>
                    <i class="bi bi-twitter-x bg-red"></i>
                  </div>
                  <div>
                    <i class="bi bi-youtube bg-red"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ps-5 mt-3 res-p-0 res-p-sm">
                <h5 className="heading-2 res-mt-4">Parent Newsletter</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Your Email"
                />
                <button className="subscribe-bnt mt-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red">
          <div className="container pt-3 pb-3">
            <span className="text-white">© All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
