import { takeEvery, all, put } from "redux-saga/effects";
import productActions from "./actions";

function* getProducts() {
  try {
    let data = yield fetch(
      "https://belaundry-api.sebaris.link/platform/product",
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTE4Mzc5Mjh9.Q0yrEpoqEj2r6sNUoS9aAjDzgQw5ePv1SE5RoWPhteQ",
        },
      }
    );
    data = yield data.json();
    yield put({
      type: productActions.SET_STATE,
      payload: { allProducts: data.response },
    });
  } catch (error) {
    yield put({
      type: productActions.SET_STATE,
      payload: { allProducts: "Error" },
    });
  }
}

function* getDetailProducts(payload) {
  // console.log(id);
  try {
    let data = yield fetch(
      "https://belaundry-api.sebaris.link/platform/product/" + payload.id,
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTE4Mzc5Mjh9.Q0yrEpoqEj2r6sNUoS9aAjDzgQw5ePv1SE5RoWPhteQ",
        },
      }
    );
    data = yield data.json();
    yield put({
      type: productActions.SET_STATE,
      payload: { detailProducts: data.response },
    });
  } catch (error) {
    yield put({
      type: productActions.SET_STATE,
      payload: { detailProducts: "Error" },
    });
  }
}

export default function* products() {
  yield all([takeEvery(productActions.SET_PRODUCTS, getProducts)]);
  yield all([takeEvery(productActions.SET_DETAIL_PRODUCTS, getDetailProducts)]);
}
