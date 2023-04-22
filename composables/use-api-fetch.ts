export const useApiFetch = <T>(api: string | (() => string)) => {
  console.log('useApiFetch');

  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useFetch<T>(api, {
    baseURL: apiBaseUrl,
  });
};
