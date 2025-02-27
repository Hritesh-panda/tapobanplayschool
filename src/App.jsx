import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Modal, Button } from "react-bootstrap";

const App = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("popupShown");
    if (!isPopupShown) {
      setTimeout(() => {
        setShow(true);
      }, 2000);
    }
  }, []);

  const handleClose = (e) => {
    e.preventDefault()
    if (formData.firstName && formData.lastName && formData.email && formData.phone) {
      sessionStorage.setItem("popupShown", "true");
      setShow(false);
      setError('')
    } else {
      setError("All fields required...");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Home />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Welcome To Tapovan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="" className="d-block fw-bold">
                    First Name :
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your FirstName"
                    className="form-control w-100"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="d-block fw-bold">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your LastName"
                    className="form-control w-100"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label htmlFor="" className="d-block fw-bold">
                    Email :
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your FirstName"
                    className="form-control w-100"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="d-block fw-bold">
                    Phone :
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your LastName"
                    className="form-control w-100"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-danger mt-2 pb-0">{error}</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-end">
                    <button className="send-btn pt-2 pb-2 mt-2 mb-3" onClick={(e)=>handleClose(e)}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;
