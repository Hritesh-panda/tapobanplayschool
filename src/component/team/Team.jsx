import React from "react";
import "./team.css";
import teamImg from "./../../asset/team.png";
import teamImg1 from "./../../asset/teamcardimg1.png";
import teamImg2 from "./../../asset/teamcardimg2.png";
import teamImg3 from "./../../asset/teamcardimg3.png";

const Team = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="head-sec">
              <p className="sm-head">Our teaching method</p>
              <h1 className="g-i-t mt-2">Meet our Team</h1>
            </div>
            <p className="text-muted fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <p className="text-muted mb-5">
              Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proidena.
            </p>
          </div>
          <div className="col-md-6 ps-5 pe-5 res-p-0">
            <img src={teamImg} alt="" className="w-100 team-img" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card team-card res-mt-4">
              <div className="card-img">
                <img src={teamImg1} alt="" className="team-card-img" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h2>Laura Smith</h2>
                </div>
                <div className="card-text">
                  <h5>Founder</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                  <button className="team-card-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card team-card res-mt-4">
              <div className="card-img">
                <img src={teamImg2} alt="" className="team-card-img" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h2>Mary Doe</h2>
                </div>
                <div className="card-text">
                  <h5>Teacher</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                  <button className="team-card-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card team-card res-mt-4">
              <div className="card-img">
                <img src={teamImg3} alt="" className="team-card-img" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h2>Lucas Linon</h2>
                </div>
                <div className="card-text">
                  <h5>Teacher</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                  <button className="team-card-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
