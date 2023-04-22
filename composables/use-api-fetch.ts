export const useApiFetch = () => {
  console.log('useApiFetch');

  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  console.log(apiBaseUrl);
};
