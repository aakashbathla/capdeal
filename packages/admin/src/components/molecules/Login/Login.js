import React, { useState, useRef, useEffect } from "react";
import LoginLogo from "assets/login-logo-2x.png";
import Logo from "assets/logo.png";
import bgImage from "assets/bg-img.jpg";
import { phoneRegExp, passwordRegExp, logout } from "utils/Utils";
import Input from "components/atoms/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router";

import "./Login.scss";

const Login = ({
  loginWithOtp,
  showOtpSuccess,
  otpSubmitSuccess,
  submitOtp,
  submitPassword,
  passwordSubmitSuccess,
}) => {
  const [showPasswordField, setShowPasswordField] = useState(false);
  const formRef = useRef();
  useEffect(() => {
    logout();
  }, []);
  if (otpSubmitSuccess || passwordSubmitSuccess) {
    return <Redirect to="/app/customer-list" />;
  }
  const onPasswordClick = () => {
    if (
      formRef &&
      formRef.current &&
      formRef.current.values &&
      formRef.current.values.mobile_number
    ) {
      setShowPasswordField(true);
      if (formRef.current.values.password) {
        console.log(formRef.current.values.password);
        console.log(formRef.current.values.mobile_number);
        submitPassword(
          formRef.current.values.password,
          formRef.current.values.mobile_number
        );
      }
    }
    console.log("phone number required");
  };
  const onOtpClick = () => {
    if (
      formRef &&
      formRef.current &&
      formRef.current.values &&
      formRef.current.values.mobile_number
    ) {
      loginWithOtp(formRef.current.values.mobile_number);
    } else {
      console.log("phone number required");
    }
  };
  return (
    <div className="login" style={{ backgroundImage: `url(` + bgImage + `)` }}>
      <div className="login_shadow">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-area">
                  <a href="/login">
                    <img src={Logo} alt="capdeal" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row align-items-center login_box">
            <div className="col-lg-12">
              {!showOtpSuccess && (
                <Formik
                  initialValues={{
                    mobile_number: "",
                    otp: "",
                    password: "",
                  }}
                  innerRef={formRef}
                  validationSchema={Yup.object({
                    mobile_number: Yup.string()
                      .matches(phoneRegExp, "Phone Number is not valid")
                      .max(15, "Must be 15 characters or less")
                      .required("Enter Phone Number"),
                    password: Yup.string()
                      .matches(passwordRegExp, "Invalid Password")
                      .required("Enter Password"),
                  })}
                >
                  <Form
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
                            <Input
                              name="mobile_number"
                              type="text"
                              placeholder="Enter Mobile Number"
                              className="form-control"
                              iconClassName="zmdi zmdi-account-circle"
                            />
                          </div>
                          {showPasswordField && (
                            <div className="input-group input-lg">
                              <Input
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                iconClassName="zmdi zmdi-lock"
                              />
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
                              <div className="text-center py-3 login_wrapper_ortext">
                                <span className="px-3">OR</span>
                              </div>
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
                  </Form>
                </Formik>
              )}
              {showOtpSuccess && (
                <Formik
                  initialValues={{
                    mobile_number:
                      formRef &&
                      formRef.current &&
                      formRef.current.values &&
                      formRef.current.values.mobile_number,
                    otp: "",
                  }}
                  validationSchema={Yup.object({
                    otp: Yup.string()
                      .max(4, "Must be 4 characters or less")
                      .required("Enter OTP"),
                  })}
                  onSubmit={(values) => {
                    submitOtp(values.otp, values.mobile_number);
                  }}
                >
                  <Form
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
                            <Input
                              name="otp"
                              type="text"
                              placeholder="Enter OTP"
                              className="form-control"
                              iconClassName="zmdi zmdi-lock"
                            />
                            {/* <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                            <span className="input-group-addon">
                              <i className="zmdi zmdi-lock"></i>
                            </span> */}
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div>
                            <button
                              className="btn-block btn btn-lg btn-primary"
                              type="submit"
                            >
                              Submit OTP
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
