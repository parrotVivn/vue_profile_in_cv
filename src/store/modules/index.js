import auth from "./auth";
import app from "./app";
const modules = {
  auth: {
    namespaced: true,
    ...auth,
  },
  app: {
    namespaced: true,
    ...app,
  },
};
export default modules;
