import { Axios } from "axios";
import { reject, resolve } from "core-js/fn/promise";

Axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});

export function post(url, config) {
  const instance = Axios.create({
    baseURL: "http://localhost:8081/api/private/v1/",
    timeout: 5000,
  });
  return instance.post(url, config);
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://127.0.0.1:8888/api/private/v1/",
//       timeout: 5000,
//     });
//     instance(config)
//       .then((res) => {
//         resolve();
//       })
//       .catch((res) => {
//         reject();
//       });
//   });
// }
