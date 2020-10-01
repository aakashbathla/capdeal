import { connect } from "react-redux";
import { loginWithOtp } from "./actions";
import { submitOtp } from "./actions";
import { submitPassword } from "./actions";
import Login from "components/molecules/Login";

export const mapStateToProps = (state) => {
  return {
    showOtpSuccess: state.login.showOtpSuccess,
    otpSubmitSuccess: state.login.otpSubmitSuccess,
    passwordSubmitSuccess: state.login.passwordSubmitSuccess,
    showError: state.login.showError,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loginWithOtp: (phone) => {
      dispatch(loginWithOtp(phone));
    },
    submitOtp: (otp, phone) => {
      dispatch(submitOtp(otp, phone));
    },
    submitPassword: (password, phone) => {
      dispatch(submitPassword(password, phone));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
