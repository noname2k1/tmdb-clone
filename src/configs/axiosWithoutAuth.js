import axios from "axios";

const axiosWithoutAuth = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const get = (url, config) => {
  config = {
    ...config,
    params: {
      ...config?.params,
      api_key: import.meta.env.VITE_API_KEY,
    },
  };
  return axiosWithoutAuth.get(url, config);
};

const post = (url, data, config) => {
  return axiosWithoutAuth.post(url, data, config);
};

const put = (url, data, config) => {
  return axiosWithoutAuth.put(url, data, config);
};

const patch = (url, data, config) => {
  return axiosWithoutAuth.patch(url, data, config);
};

const del = (url, config) => {
  return axiosWithoutAuth.delete(url, config);
};

export default {
  get,
  post,
  put,
  patch,
  del,
  axiosWithoutAuth,
};
