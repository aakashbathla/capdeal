import React, { useState } from "react";
import LoginLogo from "../../../assets/login-logo.png";
import Button from "../../atoms/Button/";
import { Redirect } from "react-router-dom";
import "./Login.scss";
const Login = ({
  loginWithOtp,
  showOtpSuccess,
  otpSubmitSuccess,
  submitOtp,
}) => {
  console.log(showOtpSuccess);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const submitOtpFunc = (evt) => {
    evt.preventDefault();
    submitOtp(otp, phoneNumber);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginWithOtp(phoneNumber);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 center-box">
            {!showOtpSuccess && (
              <form onSubmit={handleSubmit} name="login_with_otp_form">
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
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        +91
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPhoneNumber(`+91${e.target.value}`)}
                    />
                  </div>
                  <div className="login_cta">
                    <Button className="col-6" type="submit">
                      Login With Otp
                    </Button>
                    <Button className="col-6">Login With Password</Button>
                  </div>
                  <div className="login_wrapper_already_transacted">
                    Already Transacted with Capdeal?
                    <span className="login_wrapper_already_transacted_link">
                      Click here to Login
                    </span>
                  </div>
                </div>
              </form>
            )}
            {showOtpSuccess && (
              <form onSubmit={submitOtpFunc} name="submit_otp_form">
                <div className="login_wrapper">
                  <div className="login_wrapper_img text-center">
                    <img src={LoginLogo} alt="login-logo" />
                  </div>
                  <div className="login_wrapper_content text-center">
                    <div className="login_wrapper_content_header">
                      Please Enter OTP
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setOtp(`${e.target.value}`)}
                    />
                  </div>
                  <div className="login_cta text-center">
                    <Button className="col-6 text-center" type="submit">
                      Submit Otp
                    </Button>
                  </div>
                </div>
              </form>
            )}
            {otpSubmitSuccess && <Redirect to="/dashboard" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
