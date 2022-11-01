import store from "@/store";
import router from "@/router";
import { ValidationError } from "@/utils/interceptors";

const LOGIN_PATH = "/api/auth/login/";

export const logoutOnUnauthorized = function (err) {
  if (
    err.response?.status === 401 &&
    err.config &&
    !err.config.__isRetryRequest
  ) {
    if (!err.config.url.includes(LOGIN_PATH)) {
      store.dispatch("auth/logout");
    }
  }
  return;
};

export const throwOnUnauthorized = function (err) {
  if (err.response.status === 401) {
    throw new Error(err.response.data);
  }
  return;
};

export const throwOnErrorResponse = function (err) {
  if (err.response.status >= 500) {
    throw new Error(err.response.data);
  }
  return;
};

export const throwOnBadRequest = function (err) {
  if (err.response?.status === 400) {
    throw new ValidationError(err.response.data);
  } else if (err.response?.status === 405) {
    throw new ValidationError(err.response.data);
  }
  return;
};

export const redirectOnNotFound = function (err) {
  if (
    err.response.status === 404 &&
    err.config &&
    !err.config.__isRetryRequest
  ) {
    window.sessionStorage.setItem("apiNotFound", true);
    router.push("/404");
  }
  return;
};

export const conflictSnackBar = function (err) {
  const id = "GlobalSnackbarID";
  if (err.response.status === 409) {
    const message =
      "Multiple bulk actions have been initiated and are processing. Once complete, additional bulk actions will be permitted.";
    showSnackBarError(id, message);
  } else if (err.response.status === 429) {
    const message =
      "Too many requests have been initiated. In a few seconds additional requests will be permitted.";
    showSnackBarError(id, message);
  }
  return;
};

export const showSnackBarError = () => {};

export default {
  logoutOnUnauthorized,
  throwOnUnauthorized,
  throwOnErrorResponse,
  throwOnBadRequest,
  redirectOnNotFound,
  conflictSnackBar,
};
