// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: { 'Content-Type': 'application/json' },
// })

// // attach token if present
// const token = localStorage.getItem('token')
// if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`

// export default api
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;