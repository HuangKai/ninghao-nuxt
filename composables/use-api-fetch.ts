// type UseApiFetchOptions = {
//   method?: string;
//   body?: Record<string, any>;
// };

import { CurrentUser } from '~/types/use.type';

type HttpMethod = 'GET' | 'get' | Ref<'GET' | 'get' | undefined> | undefined;

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

  const currentUser = useState<CurrentUser>('currentUser');

  return useFetch<T>(api, {
    baseURL: apiBaseUrl,

    onRequest: (context) => {
      if (currentUser.value) {
        context.options.headers = {
          Authorization: `Bearer ${currentUser.value.token}`,
        };
      }
    },

    ...options,
  });
};
