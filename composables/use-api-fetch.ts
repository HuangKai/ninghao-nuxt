export const useApiFetch = (api: string | (() => string)) => {
  console.log('useApiFetch');

  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useFetch(api, {
    baseURL: apiBaseUrl,
  });
};
