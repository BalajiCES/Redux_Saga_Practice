import { combineReducers } from "redux";
import { reducer } from "../weather-component/data/reducers/WeatherReducer";

export const rootReducer = combineReducers({
  storeWeather: reducer,
});
