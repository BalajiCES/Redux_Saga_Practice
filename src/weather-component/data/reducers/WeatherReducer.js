import {
  STORE_DATA_LOADING,
  STORE_DATA_SUCESS,
  STORE_DATA_ERROR,
} from "../action-types/actions";
import { intialState } from "../../../redux/intial-store";

export function reducer(state = intialState, actions) {
  const { payload } = actions;

  switch (actions.type) {
    case STORE_DATA_LOADING:
      return {
        weatherData: {
          loading: true,
          data: {
            temperature: 0,
            cityName: "",
          },
          error: false,
        },
      };

    case STORE_DATA_SUCESS:
      return {
        weatherData: {
          loading: false,
          data: payload,
          error: false,
        },
      };

    case STORE_DATA_ERROR:
      return {
        weatherData: {
          loading: false,
          data: payload,
          error: true,
        },
      };

    default:
      return state;
  }
}
