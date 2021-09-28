import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { weatherAPI } from "../../../api/weather";
import {
  STORE_DATA_LOADING,
  STORE_DATA_SUCESS,
  STORE_DATA_ERROR,
  STORE_DATA_REQUESTED,
} from "../action-types/actions";

// worker saga will be fired on
function* AsyncAPICall(action) {
  try {
    yield put({ type: STORE_DATA_LOADING, payload: "" });
    const res = yield call(weatherAPI, action.payload);

    yield put({
      type: STORE_DATA_SUCESS,
      payload: {
        temperature: res.main.temp,
        cityName: res.name,
      },
    });
  } catch (error) {
    const data = JSON.parse(error.message);

    yield put({
      type: STORE_DATA_ERROR,
      payload: {
        temperature: 0,
        cityName: data.message,
      },
    });
  }
}

export function* watcherWeatherSaga() {
  yield takeEvery(STORE_DATA_REQUESTED, AsyncAPICall);
}
