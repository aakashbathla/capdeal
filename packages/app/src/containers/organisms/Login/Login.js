import { connect } from "react-redux";
import { loginWithOtp } from "./actions";
import { loginWithFacebook } from "./actions";
import { loginWithGoogle } from "./actions";
import { submitOtp } from "./actions";
import Login from "../../../components/molecules/Login";

export const mapStateToProps = (state) => {
  return {
    showOtpSuccess: state.login.showOtpSuccess,
    showFacebookSuccess: state.login.showFacebookSuccess,
    showGoogleSuccess: state.login.showGoogleSuccess,
    otpSubmitSuccess: state.login.otpSubmitSuccess,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loginWithOtp: (phone) => {
      dispatch(loginWithOtp(phone));
    },
    loginWithFacebook: (token) => {
      dispatch(loginWithFacebook(token));
    },
    loginWithGoogle: (token) => {
      dispatch(loginWithGoogle(token));
    },
    submitOtp: (otp, phone) => {
      dispatch(submitOtp(otp, phone));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
