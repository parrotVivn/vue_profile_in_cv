import axios from "axios";

const apiRootUrl = process.env.VUE_APP_API_ROOT_URL || "";

const apiClient = axios.create({
  baseURL: apiRootUrl,
});
export default apiClient;
