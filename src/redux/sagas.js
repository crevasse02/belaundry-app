import { all } from "redux-saga/effects";
import productSagas from "./products/sagas";
import reportSagas from "./report/sagas";

export default function* rootSaga() {
  yield all([productSagas(), reportSagas()]);
  // yield all([reportSagas()]);
}
