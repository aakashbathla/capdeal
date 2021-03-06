import {
  LOGIN_WITH_OTP,
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_ERROR,
  SUBMIT_OTP,
  SUBMIT_OTP_SUCCESS,
  SUBMIT_OTP_ERROR,
  SUBMIT_PASSWORD,
  SUBMIT_PASSWORD_SUCCESS,
  SUBMIT_PASSWORD_ERROR,
} from "./constants";
export const loginWithOtp = (params) => ({
  type: LOGIN_WITH_OTP,
  params,
});
export const loginWithOtpSuccess = (params) => ({
  type: LOGIN_WITH_OTP_SUCCESS,
  params,
});
export const loginWithOtpError = (params) => ({
  type: LOGIN_WITH_OTP_ERROR,
  params,
});
export const submitOtp = (otp, phone) => ({
  type: SUBMIT_OTP,
  params: { otp: otp, phone: phone },
});
export const submitOtpSuccess = (params) => ({
  type: SUBMIT_OTP_SUCCESS,
  params,
});
export const submitOtpError = (params) => ({
  type: SUBMIT_OTP_ERROR,
  params,
});
export const submitPassword = (password, phone) => ({
  type: SUBMIT_PASSWORD,
  params: { password: password, phone: phone },
});
export const submitPasswordSuccess = (params) => ({
  type: SUBMIT_PASSWORD_SUCCESS,
  params,
});
export const submitPasswordError = (params) => ({
  type: SUBMIT_PASSWORD_ERROR,
  params,
});
