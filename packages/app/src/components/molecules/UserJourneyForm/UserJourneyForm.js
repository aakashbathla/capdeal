import React from "react";
import Step1 from "assets/step1.png";
import Button from "../../atoms/Button";
import "./UserJourneyForm.scss";

const UserJourneyForm = () => {
  return (
    <div className="row align-items-center user-journey-form">
      <div className="col-md-3 steps-wrap">
        <div className="steps">
          <div>
            <span className="steps_count active">1</span>
            <span className="steps_text" >Basic Details</span>
          </div>
          <div>
            <span className="steps_count">2</span>
            <span className="steps_text" >ReSell / Rent</span>
          </div>
          <div>
            <span className="steps_count">3</span>
            <span className="steps_text" >Documentation</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-1">
        <form
          name="user-journey-form"
          className="d-flex justify-content-center"
        >
          <div className="col-md-12">
              <div className="user-journey-form_wrapper">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Mobile"
                    aria-label="mobile"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Alternate Number"
                    aria-label="alternate"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Current City"
                    aria-label="city"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Property Location"
                    aria-label="property_location"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="">
                  <Button className="btn btn-lg btn-primary btn-block">
                    Submit
                  </Button>
                </div>
              </div>
          </div>
        </form>
      </div>
      <div className="col-md-3 text-right pr-0">
        <img src={Step1} alt="user" />
      </div>
    </div>
  );
};

export default UserJourneyForm;
