import React, {useState} from "react";
import LoginLogo from "assets/login-logo-2x.png";
import Logo from "assets/logo.png";
import bgImage from "assets/bg-img.jpg";
import "./Login.scss";

const Login = () => {

  const [showPasswordField, setShowPasswordField] = React.useState(false)
  const [showOtpForm, setShowOtpForm] = React.useState(false)
  const onPasswordClick = () => setShowPasswordField(true)
  const onOtpClick = () => setShowOtpForm(true)
  console.log('dfsd',showPasswordField);

  return (
    <div className="login" style={{ backgroundImage: `url(` + bgImage + `)` }}>
      <div className="login_shadow">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-area">
                  <a href="/login"><img src={Logo} alt="capdeal" /></a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row align-items-center login_box">
            <div className="col-lg-12">
              {!showOtpForm && (
                <form
                  name="login_with_otp_form"
                  className="d-flex justify-content-center"
                >
                  <div className="login_box_border col-xs-10 col-md-6 col-lg-5">
                    <div className="login_wrapper">
                      <div className="login_wrapper_img text-center">
                        <img src={LoginLogo} alt="login-logo" height="80" />
                      </div>
                      <div className="login_wrapper_content text-center">
                        <div className="login_wrapper_content_header">
                          Login
                        </div>
                      </div>
                      <div className="fom grroup mb-3">
                        <div className="input-group input-lg">
                          <input type="text" className="form-control" placeholder="Enter Mobile No." />
                          <span className="input-group-addon">
                              <i className="zmdi zmdi-account-circle"></i>
                          </span>
                        </div>
                        {showPasswordField && (
                          <div className="input-group input-lg">
                            <input type="password" className="form-control" placeholder="Enter Password" />
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="col-xs-12">
                        {!showPasswordField && (
                          <div>
                            <div>
                              <button
                                className="btn-block btn btn-lg btn-primary"
                                type="button"
                                onClick={onOtpClick}
                              >
                                Login with OTP
                              </button>
                            </div>
                            <div className="text-center py-3 login_wrapper_ortext"><span className="px-3">OR</span></div>
                          </div>
                        )}
                        <div>
                          <button
                            className="btn-block btn btn-lg btn-primary mt-0"
                            type="button"
                            onClick={onPasswordClick}
                          >
                            Login with Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                )}
                {showOtpForm && (
                  <form
                  name="login_with_otp_form"
                  className="d-flex justify-content-center"
                  >
                    <div className="login_box_border col-xs-10 col-md-6 col-lg-5">
                      <div className="login_wrapper">
                        <div className="login_wrapper_img text-center">
                          <img src={LoginLogo} alt="login-logo" height="80" />
                        </div>
                        <div className="login_wrapper_content text-center">
                          <div className="login_wrapper_content_header">
                            Please Enter OTP
                          </div>
                        </div>
                        <div className="fom grroup mb-3">
                          <div className="input-group input-lg">
                            <input type="text" className="form-control" placeholder="Enter OTP" />
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div>
                            <button
                              className="btn-block btn btn-lg btn-primary"
                              type="button"
                              onClick={onOtpClick}
                            >
                              Submit OTP
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
