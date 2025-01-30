// src/app/saga.js

import { all } from "redux-saga/effects";

// import { watchAlertSaga } from "../features/alert/alertSaga";

export default function* rootSaga() {
  yield all([
    // watchUserSaga(),
    //  watchAlertSaga()
  ]);
}
