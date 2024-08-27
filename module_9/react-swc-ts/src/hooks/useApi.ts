import { useState } from "react";

export default function useApi<T>(
  urlPath: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  onSuccess?: (data: T) => void
) {
  const [result, setResult] = useState<T>();
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  async function dispatch(requestBody?: object) {
    setResult(undefined);
    setError("");
    setIsFetching(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${urlPath}`,
        {
          method,
          mode: "cors",
          ...(requestBody && {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
          }),
        }
      );

      if (!response.ok) {
        setError(response.statusText);
        setIsFetching(false);
        return;
      }

      const body = await response.json();

      if (body.result !== 200) {
        setError(body.error);
        setIsFetching(false);
        return;
      }

      setResult(body.data as T);
      setIsFetching(false);
      if (onSuccess) onSuccess(body.data as T);
    } catch (e) {
      setError((e as Error).message);
      setIsFetching(false);
    }
  }

  return { result, isFetching, error, dispatch } as const;
}
