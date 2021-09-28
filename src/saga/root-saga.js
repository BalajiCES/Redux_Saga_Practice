import { all } from "redux-saga/effects";
import { watcherWeatherSaga } from "../weather-component/data/saga/index";
export default function* rootSaga() {
  yield all([watcherWeatherSaga()]);
}
