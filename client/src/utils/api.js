import axios from "axios";

const baseURL = "http://localhost:3001";

const api = axios.create({ baseURL });

export { baseURL };
export default api;
