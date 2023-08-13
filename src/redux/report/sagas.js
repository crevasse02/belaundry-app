import { takeEvery, all, put } from "redux-saga/effects";
import reportActions from "./actions";

function* getReports() {
  try {
    let data = yield fetch(
      "https://belaundry-api.sebaris.link/platform/product/report",
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTE4Mzc5Mjh9.Q0yrEpoqEj2r6sNUoS9aAjDzgQw5ePv1SE5RoWPhteQ",
        },
      }
    );
    data = yield data.json();
    yield put({
      type: reportActions.SET_STATE,
      payload: { allReport: data },
    });
  } catch (error) {
    yield put({
      type: reportActions.SET_STATE,
      payload: { allReport: "Error" },
    });
  }
}

export default function* report() {
  yield all([takeEvery(reportActions.SET_REPORTS, getReports)]);
}
