import { connect } from "react-redux";
import { loginWithOtp } from "./actions";
import { submitOtp } from "./actions";
import Login from "components/molecules/Login";

export const mapStateToProps = (state) => {
  return {
    showOtpSuccess: state.login.showOtpSuccess,
    otpSubmitSuccess: state.login.otpSubmitSuccess,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
