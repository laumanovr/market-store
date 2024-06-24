import axios from 'axios'
const config = useRuntimeConfig()

const baseURL = config.public.API_BASE_URL

export const API = axios.create({
  baseURL,
})

// API.interceptors.request.use(
//     function (config) {
//       const authStore = useAuthStore();
//       const token = authStore.getSessionId;
//       config.headers.Authorization = token ? `Bearer ${token}` : "";

//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );
