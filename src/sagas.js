import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";

function usersFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

function* workGetsUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* mySaga() {
  yield takeLatest(GET_USERS_FETCH, workGetsUsersFetch);// watcher
}

export default mySaga;
