import axios from "axios";

import {
  API_NOTIFICATIONS_MESSAGES,
  SERVICE_URLS,
} from "../constants/config.js";

import { getAccessToken, getType } from "../utils/common-utils";

// const API_URL = "https://mern-blog-backend-4f0i.onrender.com";
// const API_URL = "http://localhost:8000";
const API_URL = "https://postblog-backend-v2.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    Accept: "application/json, form-data",
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  function (config) {
    if (config.TYPE.params) {
      config.params = config.TYPE.params;
    } else if (config.TYPE.query) {
      config.url = config.url + "/" + config.TYPE.query;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);
const processResponse = (response) => {
  if (response?.status === 200) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    console.log("error in response", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    console.log("error in request", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    console.log("error in network", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MESSAGES.networkError,
      code: "",
    };
  }
};
const API = {};
for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method === "DELETE" ? null : body,

      responseType: value.responseType,
      headers: {
        authorization: getAccessToken(),
      },
      TYPE: getType(value, body),
      // onUploadProgress:function(progressEvent){
      //    if(showUploadProgress){
      //     let percentageCompleted=Math.round((ProgressEvent.loaded*100)/progressEvent.total)
      // showUploadProgress(percentageCompleted);
      // }
      // },
      // onDownloadProgress:function(progressEvent){
      //     if(showDownloadProgress){
      //      let percentageCompleted=Math.round((ProgressEvent.loaded*100)/progressEvent.total)
      //  showDownloadProgress(percentageCompleted);
      //  }
      //  }
    });
}
export { API };
