import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useNotifications = (userId?: string) => {
  const url = userId ? `/api/notifications/${userId}` : null;
  const { data, error, mutate, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    mutate,
    isLoading
  }
};

export default useNotifications;