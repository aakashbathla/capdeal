import {
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_ERROR,
  SUBMIT_OTP_SUCCESS,
  SUBMIT_OTP_ERROR,
} from "./constants";

const initialState = {
  showOtpSuccess: false,
  otpSubmitSuccess: false,
};

const LoginReducer = (state = initialState, action) => {
  const { type, data, error } = action;
  console.log(action);
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
    default:
      return state;
  }
};

export default LoginReducer;
