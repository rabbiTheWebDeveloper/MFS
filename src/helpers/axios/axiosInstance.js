

import axios from "axios";
import { getFromLocalStorage } from "../../utils/local-storage";
import { authKey } from "../../constants/storageKey";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.token = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject = {
      data: response?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const errorResponse = error?.response.data;
    console.log(errorResponse);
    if (error?.response?.status === 403) {} else {
      const responseObject = {
        statusCode: error?.response?.data.success || 500,
        message: error?.response.data.message || "Something went wrong",
        errorMessages: error?.response.data.message ,
      };
      return responseObject;
    }
    // return  errorResponse

    // return Promise.reject(error);
  }
);

export { instance };