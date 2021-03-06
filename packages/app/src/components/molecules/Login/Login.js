import React, { useState } from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import LoginLogo from "../../../assets/login-logo.png";
import Logo from "../../../assets/logo.png";
import bgImage from "assets/login-bg.jpg";
import Button from "../../atoms/Button/";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

import "./Login.scss";
const Login = ({
  loginWithOtp,
  showOtpSuccess,
  showFacebookSuccess,
  showGoogleSuccess,
  otpSubmitSuccess,
  submitOtp,
  loginWithFacebook,
  loginWithGoogle,
}) => {
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
  const responseFacebook = (response) => {
    loginWithFacebook(response.accessToken);
  };
  const responseGoogle = (response) => {
    loginWithGoogle(response.accessToken);
  };
  return (
    <div className="login" style={{ backgroundImage: `url(` + bgImage + `)` }}>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area">
                <Anchor to="/home">
                  <img className="login__logo" src={Logo} alt="enventer" />
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
              <form
                onSubmit={handleSubmit}
                name="login_with_otp_form"
                className="d-flex justify-content-center"
              >
                <div className="col-xs-10 col-md-6 col-lg-5">
                  <div className="login_box_border">
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
                          onChange={(e) =>
                            setPhoneNumber(`+91${e.target.value}`)
                          }
                        />
                      </div>
                      <div className="login_cta d-flex">
                        <Button
                          className="btn btn-lg btn-outline-primary col"
                          type="submit"
                        >
                          Login With OTP
                        </Button>
                        <Button className="btn btn-lg btn-outline-primary col">
                          Login With Password
                        </Button>
                      </div>
                      <div className="login_wrapper_already_transacted mt-3 pt-1 text-center">
                        Already Transacted with Capdeal?
                        <span className="login_wrapper_already_transacted_link pl-2">
                          Click here to Login
                        </span>
                      </div>
                      <div className="text-center py-3 login_wrapper_ortext">
                        <span className="px-3">OR</span>
                      </div>
                      <div className="text-center">
                        <FacebookLogin
                          appId="1611262495703296"
                          autoLoad={false}
                          fields="name,email,picture"
                          callback={responseFacebook}
                          render={(renderProps) => (
                            <button
                              type="button"
                              className="facebook-button p0 m0"
                              onClick={renderProps.onClick}
                            >
                              <span className="orange px-2">
                                <i className="zmdi zmdi-facebook"></i>
                              </span>
                            </button>
                          )}
                        />
                        <GoogleLogin
                          autoLoad={false}
                          clientId="83232625599-10s40l54v6qt9bk3stsfhdhcmpvaqnni.apps.googleusercontent.com"
                          buttonText=""
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                          render={(renderProps) => (
                            <button
                              type="button"
                              className="google-button p0 m0"
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                            >
                              <span className="orange px-2">
                                <i className="zmdi zmdi-google"></i>
                              </span>
                            </button>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {showOtpSuccess && (
              <form
                onSubmit={submitOtpFunc}
                name="submit_otp_form"
                className="d-flex justify-content-center"
              >
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
                      <Button
                        className="col-6 text-center btn btn-lg btn-outline-primary"
                        type="submit"
                      >
                        Submit OTP
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {(otpSubmitSuccess || showFacebookSuccess || showGoogleSuccess) && (
              <Redirect to="/dashboard/user/" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
