import {
  SUBMIT_OTP_SUCCESS,
  SUBMIT_OTP_ERROR,
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_ERROR,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_ERROR,
  LOGIN_WITH_GOOGLE_SUCCESS,
  LOGIN_WITH_GOOGLE_ERROR,
} from "./constants";

const initialState = {
  showOtpSuccess: false,
  otpSubmitSuccess: false,
};

const LoginReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN_WITH_OTP_SUCCESS:
      return Object.assign({}, state, {
        showOtpSuccess: true,
        showError: false,
      });
    case LOGIN_WITH_OTP_ERROR:
      return Object.assign({}, state, {
        showOtpSuccess: false,
        showError: true,
      });
    case SUBMIT_OTP_SUCCESS:
      return Object.assign({}, state, {
        otpSubmitSuccess: true,
        showError: false,
      });
    case SUBMIT_OTP_ERROR:
      return Object.assign({}, state, {
        otpSubmitSuccess: false,
        showError: true,
      });
    case LOGIN_WITH_FACEBOOK_SUCCESS:
      return Object.assign({}, state, {
        showFacebookSuccess: true,
        showError: false,
      });
    case LOGIN_WITH_FACEBOOK_ERROR:
      return Object.assign({}, state, {
        showFacebookSuccess: false,
        showError: true,
      });
    case LOGIN_WITH_GOOGLE_SUCCESS:
      return Object.assign({}, state, {
        showGoogleSuccess: true,
        showError: false,
      });
    case LOGIN_WITH_GOOGLE_ERROR:
      return Object.assign({}, state, {
        showGoogleSuccess: false,
        showError: true,
      });
    default:
      return state;
  }
};

export default LoginReducer;
