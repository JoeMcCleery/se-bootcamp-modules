import useSWR, { Fetcher } from "swr";
import { IUser } from "../types";

const fetcher: Fetcher<IUser, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function useUser(id: string) {
  const { data, error, isLoading } = useSWR<IUser, Error>(
    `/api/user/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
