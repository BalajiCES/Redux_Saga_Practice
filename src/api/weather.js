import axios from "axios";
import { API_URL } from "../constants";

const weatherAPI = async (params) => {
  const response = await fetch(
    `${API_URL}?q=${params.q}&appid=${params.appid}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    console.log("erros dara", data);
    throw new Error(JSON.stringify(data));
  }
  return data;
};

export { weatherAPI };
