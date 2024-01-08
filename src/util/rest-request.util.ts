import axios, { AxiosRequestConfig } from "axios";
import { HOSTSERVER, HOSTSERVER_ERP1 } from "../constants/hostserver.constant";
import JwtServiceUtil from "./jwt-service.util";
import { ErrorResponse } from "../models/erp-cmn-comun/error-response.models";

const instance = axios.create({
  baseURL: HOSTSERVER,
  // timeout: 15 * 1000,
});

instance.interceptors.request.use(
  (config) => {
    //nProgress.start();

    //JwtServiceUtil.saveToken('eyJhbGciOiJSUzI1NiIsImtpZCI6IjY2MDM3MzJFMzIyN0MwN0JFOEQwQUJENDcyRjM4NTBBOEYzNDRFRkQiLCJ0eXAiOiJKV1QiLCJ4NWMiOlsibXNzZWd1cmlkYWQiXX0.eyJzdWIiOiIiLCJuYmYiOjE2NjQyMjcyNTYsImV4cCI6MTY2NjgxOTAxNiwiaXNzIjoibXNzZWd1cmlkYWQiLCJhdWQiOiJkZjEzZWIxYmY5ZWM0YTBlODRlYWE2NTZmYTViODg1YiIsInNjb3BlcyI6eyJEYXRvMSI6IjIxNjMiLCJEYXRvMiI6IiIsIkRhdG8zIjoiIiwiSWRJbnZpdGFkbyI6MCwiRG9jdW1lbnRvSW52aXRhZG8iOm51bGwsIklkVXN1YXJpbyI6NDAyMTIsIlVzdWFyaW8iOiJkZW1vLXB2bGciLCJUaXBvVG9rZW4iOjAsIklkRW50aWRhZFBlcnNvbmEiOjEsIklkRW50aWRhZEVtcHJlc2EiOjYwMDE2LCJEb2N1bWVudG9FbXByZXNhIjoiMDAwMDAwMDAwMDAiLCJEb2N1bWVudG9QZXJzb25hIjoiNDMwOTQ1MzYiLCJTdWN1cnNhbGVzIjpbMjAsMjFdLCJTZXJ2aWNpb3MiOls0LDgxLDE4NCwxODUsMTg2LDE4NywxODgsMTg5LDE5MCwxOTMsMTk0LDE5NSwxOTYsMTk3LDE5OCwxOTksMjAwLDIwMSwyMDIsMjAzLDIwNCwyMDUsMjA2LDIwNywyMDgsMjEwLDIxMSwyMTIsMjEzLDIxNiwyMjEsMjg4LDI4OSwzNTksMzYwLDM2MywzNjQsMzY1LDM2Niw0NjksMSwyLDMsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDM5LDQwLDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDQ5LDUwLDUxLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDU5LDYwLDYxLDYyLDYzLDY0LDY1LDY2LDY3LDY4LDY5LDcwLDcxLDcyLDczLDc0LDc1LDc2LDc3LDc4LDc5LDgwLDgyLDgzLDg1LDg2LDg3LDg4LDg5LDkwLDkxLDkyLDkzLDk0LDk1LDk2LDk3LDk4LDk5LDEwMCwxMDEsMTAyLDEwMywxMDQsMTA1LDEwNiwxMDcsMTA4LDEwOSwxMTAsMTExLDExMiwxMTMsMTE0LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTIzLDEyNCwxMjUsMTI2LDEyNywxMjgsMTI5LDEzMCwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDEzOSwxNDAsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNTUsMTU2LDE1NywxNTgsMTYwLDE2NSwxNzcsMTc4LDE3OSwxODEsMjE3LDIxOCwyMTksMjIyLDIyMywyMzIsMjc0LDI4MSwzNzIsMzgxLDM4NywxODAsNDY3LDQ2OCw1MjYsMTc2LDM2MiwxNjEsMTkxLDE5MiwyMzMsMjM0LDE2NiwxNjcsMTY4LDE2OSwxNzAsMTcxLDE3MiwxNzMsMTc0LDE3NSwxODMsMjA5LDE1OSwxNjIsMTYzLDE2NCwyMjcsMjc1LDI3NiwzNjEsMzc1LDM3NiwyMjgsODQsMTgyLDIxNCwyMTUsMjIwLDIyNCwyMjUsMjI2LDIyOSwyMzAsMjMxLDIzNSwyMzYsMjM3LDIzOCwyMzksMjQwLDI0MSwyNDIsMjQzLDI0NCwyNDUsMjQ2LDI0NywyNDgsMjQ5LDI1MCwyNTEsMjUyLDI1MywyNTQsMjU1LDI1NiwyNTcsMjU4LDI1OSwyNjAsMjYxLDI2MiwyNjMsMzI3LDMyOCwyNjQsMjY1LDI2NiwyNjcsMjY4LDI2OSwyNzAsMjcxLDI3MiwzNTcsMzU4LDI3MywyODQsMjg1LDI4NiwzMTksMzIwLDMyMSwzMjIsMzIzLDMyNCwzMjUsMzI2LDMyOSwzMzAsNDYyLDQ2Myw0NjQsNDY1LDQ2NiwzODUsMzg2LDM5MCwzMTcsMzE4LDI3NywzOTQsMzk1LDM5NiwzOTcsMzk4LDM5OSw0NTEsNDcwLDQ1Miw0NTMsNDU0LDQ1NSw0NTYsNDU3LDQ1OCw0NTksNDYwLDQ2MSw1MDAsNTAxLDUwMiw1MDMsNTA0LDUwNSw1MDYsNTA3LDUwOCw1MDksNTEwLDUxMSw1MTIsNTEzLDUxNCw1MTUsNTE2LDUxNyw1MTgsNTE5LDUyMCw1MjddfX0.eHCxZ5A5oNUF7RXV_dGU6JbojSdHGjCpnlL7Cjshi22Uy24cvSrl7ozIuQyJcDuibHyQJd-qm3LyOhpGQosaQYn59XMaCu0F0Jpzim8oP2WRyi4QtnAOW74sNPfjxz6L1SNdFhHaRaE18JZGIxc6tVLOBsMb0TG90J0cz1FHQ7QT1DJIn0RhC4D95yA5iCV00rY-iSzpauN3ywfnSlGc8cCIpo4zxmjkOa_V9R-LUiaSgizRopIWj6FP_oZ7R_kIhFUqcjaQgvcb-n5BsSQiyudSg7_dXjQSnOxRTLjREYhHJNTd4DA3hRFVx4rtVulUJiBhQBFdqS-C3fQPJ--WdQ');

    if (JwtServiceUtil.getToken()) {
      config.headers.Authorization = `Bearer ${JwtServiceUtil.getToken()}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    //nProgress.done();
    return response.data;
  },
  (error) => {
    console.log(error.response.data)
    console.log(error.response.status)
    if (error.response.status >= 400 && error.response.status < 599) {
      if (error.response.status === 401 && error.response.data.IdError === 5001001) {
        // if(confirm(`${error.response.data.Mensaje}. Refresh token?`)) {
        //   seguridadComunService.refreshToken()
        // } else {
        //   window.location.href = '/login';
        // }
        return Promise.reject(error);
      }
      return Promise.reject(error.response.data as ErrorResponse);
    }
    return Promise.reject(error);
  }
);

type baseURLType = 'default' | 'erp-url';

function changeURLBase(base?: baseURLType) {
  switch(base) {
    case 'erp-url': {
      instance.defaults.baseURL = HOSTSERVER_ERP1;
      break;
    }
    default: {
      instance.defaults.baseURL = HOSTSERVER;
      break;
    }
  }
}

export function get<T>(
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {},
  base?: baseURLType
): Promise<T> {
  changeURLBase(base);
  return instance.get(url, { ...options, params });
}

export function post<T>(
  url: string,
  data: any = {},
  options: AxiosRequestConfig = {},
  base?: baseURLType
): Promise<T> {
  changeURLBase(base);
  return instance.post(url, data, { ...options });
}

export function put<T>(
  url: string,
  data: any = {},
  options: AxiosRequestConfig = {},
  base?: baseURLType
): Promise<T> {
  changeURLBase(base);
  return instance.put(url, data, { ...options });
}

export function deleteRest<T>(
    url: string,
    params: any = {},
    options: AxiosRequestConfig = {},
    base?: baseURLType
): Promise<T> {
  changeURLBase(base);
  return instance.delete(url, { ...options, params });
}

export function forkJoin<T>(...args: any[]):Promise<any[]>{
  return axios.all(args);
}
