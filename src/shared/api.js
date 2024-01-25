import axios from "axios";
import { getToken } from "../pages/auth/utils";

export const api = axios.create({
  //baseURL: "http://ec2-52-91-5-122.compute-1.amazonaws.com:8000",
  baseURL: "http://localhost:8000",
});

api.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "bearer " + getToken();
    return config;
  },
  error => {
    Promise.reject(error);
  }
);