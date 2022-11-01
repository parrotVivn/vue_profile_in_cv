import axios from "axios";
import { logoutOnUnauthorized, throwOnBadRequest } from "./responseHandlers";

const apiRootUrl = process.env.VUE_APP_API_ROOT_URL || "";

const apiClient = axios.create({
  baseURL: apiRootUrl,
  headers: { "x-camelcase": 1 },
});

apiClient.interceptors.response.use(undefined, function (err) {
  logoutOnUnauthorized(err);
  throwOnBadRequest(err);
});

export default apiClient;
