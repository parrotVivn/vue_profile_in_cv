import axios from "axios";
import {
  logoutOnUnauthorized,
  throwOnBadRequest,
  throwOnErrorResponse,
  redirectOnNotFound,
  conflictSnackBar,
} from "./responseHandlers";

const apiRootUrl = process.env.VUE_APP_API_ROOT_URL;

const apiClient = axios.create({
  baseURL: apiRootUrl,
  headers: { "x-camelcase": 1 },
});

apiClient.interceptors.response.use(undefined, function (err) {
  if (axios.isCancel(err)) throw err;

  logoutOnUnauthorized(err);
  throwOnBadRequest(err);
  redirectOnNotFound(err);
  conflictSnackBar(err);
  throwOnErrorResponse(err);
});

export default apiClient;
