import {
  LOGIN_WITH_OTP,
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_ERROR,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_ERROR,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_GOOGLE_SUCCESS,
  LOGIN_WITH_GOOGLE_ERROR,
  SUBMIT_OTP,
  SUBMIT_OTP_SUCCESS,
  SUBMIT_OTP_ERROR,
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
export const loginWithFacebook = (params) => ({
  type: LOGIN_WITH_FACEBOOK,
  params,
});
export const loginWithFacebookSuccess = (params) => ({
  type: LOGIN_WITH_FACEBOOK_SUCCESS,
  params,
});
export const loginWithFacebookError = (params) => ({
  type: LOGIN_WITH_FACEBOOK_ERROR,
  params,
});
export const loginWithGoogle = (params) => ({
  type: LOGIN_WITH_GOOGLE,
  params,
});
export const loginWithGoogleSuccess = (params) => ({
  type: LOGIN_WITH_GOOGLE_SUCCESS,
  params,
});
export const loginWithGoogleError = (params) => ({
  type: LOGIN_WITH_GOOGLE_ERROR,
  params,
});