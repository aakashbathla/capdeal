import {
  SUBMIT_OTP_SUCCESS,
  SUBMIT_OTP_ERROR,
  SUBMIT_PASSWORD_SUCCESS,
  SUBMIT_PASSWORD_ERROR,
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_ERROR,
} from "./constants";
import { errorGenerator } from "../../../utils/Utils";

const initialState = {
  showOtpSuccess: false,
  otpSubmitSuccess: false,
  passwordSubmitSuccess: false,
  showError: null,
};

const LoginReducer = (state = initialState, action) => {
  const { type } = action;
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
        showError: errorGenerator(action.params),
      });
    case SUBMIT_OTP_SUCCESS:
      return Object.assign({}, state, {
        otpSubmitSuccess: true,
        showError: false,
      });
    case SUBMIT_OTP_ERROR:
      return Object.assign({}, state, {
        otpSubmitSuccess: false,
        showError: errorGenerator(action.params),
      });
    case SUBMIT_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        passwordSubmitSuccess: true,
        showError: false,
      });
    case SUBMIT_PASSWORD_ERROR:
      return Object.assign({}, state, {
        passwordSubmitSuccess: false,
        showError: errorGenerator(action.params),
      });
    default:
      return state;
  }
};

export default LoginReducer;
