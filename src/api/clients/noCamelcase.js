import axios from "axios";
import {
  logoutOnUnauthorized,
  throwOnBadRequest,
  redirectOnNotFound,
  conflictSnackBar,
} from "./responseHandlers";

const apiRootUrl = process.env.VUE_APP_API_ROOT_URL || "";

const apiClient = axios.create({
  baseURL: apiRootUrl,
});

apiClient.interceptors.response.use(undefined, function (err) {
  logoutOnUnauthorized(err);
  throwOnBadRequest(err);
  redirectOnNotFound(err);
  conflictSnackBar(err);
});

export default apiClient;
