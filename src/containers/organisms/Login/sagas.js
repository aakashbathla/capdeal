import { call, put, takeLatest } from "redux-saga/effects";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl } from "../../../utils/Utils";
import {
  loginWithOtpSuccess,
  loginWithOtpError,
  submitOtpSuccess,
  submitOtpError,
} from "./actions";
import { LOGIN_WITH_OTP, SUBMIT_OTP } from "./constants";
import apis from "../../../constants/apis/services";

export function* loadLoginWithOtpSaga(phoneNumber) {
  const additionalFetchOptions = (phoneNumber) => ({
    method: "POST",
    data: {
      phone_number: phoneNumber.params,
    },
  });
  const urlOptions = {
    pathname: apis.loginwithotp,
    urlEncoded: true,
  };
  try {
    const data = yield call(
      ServiceUtils.fetch,
      buildUrl(urlOptions),
      additionalFetchOptions(phoneNumber),
      "http://"
    );
    if (data.otp) {
      yield put(loginWithOtpSuccess({ showSuccess: true }));
    } else {
      yield put(loginWithOtpError(data));
    }
  } catch (err) {
    yield put(loginWithOtpError(err));
  }
}

export function* loadSubmitOtpSaga(otp) {
  const additionalFetchOptions = (otp) => ({
    method: "POST",
    data: {
      otp: otp.params.otp,
      phone_number: otp.params.phone,
    },
  });
  const urlOptions = {
    pathname: apis.submitotp,
    urlEncoded: true,
  };
  try {
    const data = yield call(
      ServiceUtils.fetch,
      buildUrl(urlOptions),
      additionalFetchOptions(otp),
      "http://"
    );
    if (data.auth_token) {
      yield put(submitOtpSuccess({ showSuccess: true }));
    } else {
      yield put(submitOtpError(data));
    }
  } catch (err) {
    yield put(submitOtpError(err));
  }
}

export default function* loginWithOtpSagaCap() {
  yield takeLatest(LOGIN_WITH_OTP, loadLoginWithOtpSaga);
}
export function* submitOtpSagaCap() {
  yield takeLatest(SUBMIT_OTP, loadSubmitOtpSaga);
}
