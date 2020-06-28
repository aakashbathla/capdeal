import React from "react";
import LoginLogo from "../../../assets/login-logo.png";
import Button from "../../atoms/Button/";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 center-box">
            <div className="login_wrapper">
              <div className="login_wrapper_img text-center">
                <img src={LoginLogo} alt="login-logo" />
              </div>
              <div className="login_wrapper_content text-center">
                <div className="login_wrapper_content_header">
                  Login with your Mobile Number
                </div>
                <div className="login_wrapper_content_subheader">
                  Your information is safe with us
                </div>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    +91
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="login_cta">
                <Button className="col-6">Login With Otp</Button>
                <Button className="col-6">Login With Password</Button>
              </div>
              <div className="login_wrapper_already_transacted">
                Already Transacted with Capdeal?
                <span className="login_wrapper_already_transacted_link">
                  Click here to Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
