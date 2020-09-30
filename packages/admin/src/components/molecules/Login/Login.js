/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import LoginLogo from "assets/login-logo-2x.png";
import Logo from "assets/logo.png";
import bgImage from "assets/bg-img.jpg";
import { logout } from "utils/Utils";
import Input from "components/atoms/Input";
import { Formik, Form } from "formik";
import { Redirect } from "react-router";

import "./Login.scss";

const Login = ({
  loginWithOtp,
  showOtpSuccess,
  otpSubmitSuccess,
  submitOtp,
  submitPassword,
  passwordSubmitSuccess,
  showError,
}) => {
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();
  const form2Ref = useRef();
  let count;
  useEffect(() => {
    count = 0;
    logout();
  }, []);
  if (showError && !error) {
    setError(showError);
  }
  if (otpSubmitSuccess || passwordSubmitSuccess) {
    return <Redirect to="/app/customer-list" />;
  }
  const onPasswordClick = () => {
    setError(null);
    if (
      formRef &&
      formRef.current &&
      formRef.current.values &&
      formRef.current.values.mobile_number
    ) {
      count = count + 1;
      setShowPasswordField(true);
      if (formRef.current.values.password) {
        console.log(formRef.current.values.password);
        console.log(formRef.current.values.mobile_number);
        submitPassword(
          formRef.current.values.password,
          formRef.current.values.mobile_number
        );
      } else {
        if (count !== 1) {
          setError("password required");
        }
      }
    } else {
      setError("Phone number required");
    }
  };
  const onOtpClick = () => {
    setError(null);
    if (
      formRef &&
      formRef.current &&
      formRef.current.values &&
      formRef.current.values.mobile_number
    ) {
      loginWithOtp(formRef.current.values.mobile_number);
    } else {
      setError("Phone number required");
    }
  };
  const submitOtpClick = () => {
    setError(null);
    console.log(formRef.current);
    if (
      form2Ref &&
      form2Ref.current &&
      form2Ref.current.values &&
      form2Ref.current.values.otp
    ) {
      submitOtp(
        form2Ref.current.values.otp,
        form2Ref.current.values.mobile_number
      );
    } else {
      setError("please enter otp");
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
                  // validationSchema={Yup.object({
                  //   mobile_number: Yup.string()
                  //     .matches(phoneRegExp, "Phone Number is not valid")
                  //     .max(15, "Must be 15 characters or less")
                  //     .required("Enter Phone Number"),
                  //   password: Yup.string()
                  //     .matches(passwordRegExp, "Invalid Password")
                  //     .required("Enter Password"),
                  // })}
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
                        {error && <div className="error">{error}</div>}
                        <div className="fom grroup mb-3">
                          <div className="input-group input-lg">
                            <Input
                              name="mobile_number"
                              type="text"
                              placeholder="Enter Mobile Number"
                              className="form-control"
                              iconClassName="zmdi zmdi-account-circle"
                              // onChange={() => {
                              //   console.log("mani");
                              //   error && setError(null);
                              //   console.log("bathla");
                              // }}
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
                                // onChange={() => {
                                //   // setError(null);
                                // }}
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
                  innerRef={form2Ref}
                  // validationSchema={Yup.object({
                  //   otp: Yup.string()
                  //     .max(4, "Must be 4 characters or less")
                  //     .required("Enter OTP"),
                  // })}
                  // onSubmit={(values) => {
                  //   submitOtp(values.otp, values.mobile_number);
                  // }}
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
                        {error && <div className="error">{error}</div>}
                        <div className="fom grroup mb-3">
                          <div className="input-group input-lg">
                            <Input
                              name="otp"
                              type="text"
                              placeholder="Enter OTP"
                              className="form-control"
                              iconClassName="zmdi zmdi-lock"
                              // onChange={() => {
                              //   // setError(null);
                              // }}
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
                              type="button"
                              onClick={submitOtpClick}
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
