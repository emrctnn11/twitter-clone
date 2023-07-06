import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    currentUser: data?.currentUser,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCurrentUser;