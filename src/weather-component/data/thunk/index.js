import {
  STORE_DATA_LOADING,
  STORE_DATA_SUCESS,
  STORE_DATA_ERROR,
} from "../action-types/actions";
import axios from "axios";
import { API_URL } from "../../../constants";

// redux thunk allows us to dispatch not only an actions also an function which make action creators
export function AsyncAPICall(data) {
  return (dispatch) => {
    dispatch({
      type: STORE_DATA_LOADING,
      payload: "",
    });
    axios
      .get(API_URL, {
        params: data,
      })
      .then((res) => {
        dispatch({
          type: STORE_DATA_SUCESS,
          payload: {
            temperature: res.data.main.temp,
            cityName: res.data.name,
          },
        });
      })
      .catch((err) => {
        const { data } = err.response;
        //   console.log(data.message);
        dispatch({
          type: STORE_DATA_ERROR,
          payload: {
            temperature: 0,
            cityName: data.message,
          },
        });
      });

    // console.log("Data ended");
  };
}
