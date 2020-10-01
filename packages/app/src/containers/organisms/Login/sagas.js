import { call, put, takeLatest } from "redux-saga/effects";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl } from "../../../utils/Utils";
import {
  loginWithOtpSuccess,
  loginWithOtpError,
  loginWithFacebookSuccess,
  loginWithFacebookError,
  loginWithGoogleSuccess,
  loginWithGoogleError,
  submitOtpSuccess,
  submitOtpError,
} from "./actions";
import {
  LOGIN_WITH_OTP,
  SUBMIT_OTP,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_GOOGLE,
} from "./constants";
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

export function* loadLoginWithFacebookSaga(accessToken) {
  const additionalFetchOptions = (accessToken) => ({
    method: "POST",
    data: {
      provider: "facebook",
      access_token: accessToken.params,
    },
  });
  const urlOptions = {
    pathname: apis.socialLogin,
    urlEncoded: true,
  };
  try {
    const data = yield call(
      ServiceUtils.fetch,
      buildUrl(urlOptions),
      additionalFetchOptions(accessToken),
      "http://"
    );
    if (data.auth_token) {
      yield put(loginWithFacebookSuccess({ showSuccess: true }));
    } else {
      yield put(loginWithFacebookError(data));
    }
  } catch (err) {
    yield put(loginWithFacebookError(err));
  }
}

export function* loadLoginWithGoogleSaga(accessToken) {
  const additionalFetchOptions = (accessToken) => ({
    method: "POST",
    data: {
      provider: "google-oauth2",
      access_token: accessToken.params,
    },
  });
  const urlOptions = {
    pathname: apis.socialLogin,
    urlEncoded: true,
  };
  try {
    const data = yield call(
      ServiceUtils.fetch,
      buildUrl(urlOptions),
      additionalFetchOptions(accessToken),
      "http://"
    );
    if (data.auth_token) {
      yield put(loginWithGoogleSuccess({ showSuccess: true }));
    } else {
      yield put(loginWithGoogleError(data));
    }
  } catch (err) {
    yield put(loginWithGoogleError(err));
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
export function* loginWithFacebookSagaCap() {
  yield takeLatest(LOGIN_WITH_FACEBOOK, loadLoginWithFacebookSaga);
}
export function* loginWithGoogleSagaCap() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loadLoginWithGoogleSaga);
}
