import { all } from "redux-saga/effects";
import loginWithOtpSagaCap, {
  submitOtpSagaCap,
} from "./containers/organisms/Login/sagas";

export default function* rootSaga() {
  yield all([loginWithOtpSagaCap(), submitOtpSagaCap()]);
}
