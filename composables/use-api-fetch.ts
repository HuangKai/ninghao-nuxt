// type UseApiFetchOptions = {
//   method?: string;
//   body?: Record<string, any>;
// };

type HttpMethod =
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'get'
  | 'head'
  | 'patch'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace';

type UseApiFetchOptions = {
  method?: HttpMethod;
  body?: Record<string, any>;
};

export const useApiFetch = <T>(
  api: string | (() => string),
  options: UseApiFetchOptions,
) => {
  console.log('useApiFetch');

  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useFetch<T>(api, { baseURL: apiBaseUrl, ...options });
};
