import React, { useState } from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import LoginLogo from "../../../assets/login-logo.png";
import Logo from "../../../assets/logo.png";
import bgImage from "assets/login-bg.png";
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
    <div className="login" style={{backgroundImage: `url(`+bgImage+`)`}}>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area">
                <Anchor to="/home">
                  <img src={Logo} alt="enventer" />
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row align-items-center login_box">
          <div className="col-lg-12">
            {!showOtpSuccess && (
              <form onSubmit={handleSubmit} name="login_with_otp_form" className="d-flex justify-content-center">
                <div className="login_box_border col-xs-10 col-md-6 col-lg-5">
                  <div className="login_wrapper">
                    <div className="login_wrapper_img text-center">
                      <img src={LoginLogo} alt="login-logo" />
                    </div>
                    <div className="login_wrapper_content text-center">
                      <div className="login_wrapper_content_header">
                        Login with your Mobile Number
                      </div>
                      <div className="login_wrapper_content_subheader mt-1 mb-3">
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
                    <div className="login_cta col-xs-12 d-flex justify-content-between">
                      <Button className="login_btn btn btn-lg btn-outline-primary" type="submit">
                        Login With Otp
                      </Button>
                      <Button className="btn btn-lg btn-outline-primary">Login With Password</Button>
                    </div>
                    <div className="login_wrapper_already_transacted mt-3">
                      Already Transacted with Capdeal?
                      <span className="login_wrapper_already_transacted_link">
                        Click here to Login
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {showOtpSuccess && (
              <form onSubmit={submitOtpFunc} name="submit_otp_form" className="d-flex justify-content-center">
                <div className="login_box_border col-xs-10 col-md-6 col-lg-5">
                  <div className="login_wrapper">
                    <div className="login_wrapper_img text-center">
                      <img src={LoginLogo} alt="login-logo" />
                    </div>
                    <div className="login_wrapper_content text-center">
                      <div className="login_wrapper_content_header mb-4">
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
                      <Button className="col-6 text-center btn btn-lg btn-outline-primary" type="submit">
                        Submit Otp
                      </Button>
                    </div>
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
