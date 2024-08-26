import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import Page from "../containers/Page";
import { IPost } from "../../types";
import ErrorPage from "./ErrorPage";
import PostsList from "../posts/PostsList";
import LoadingText from "../pure/LoadingText";

export default function PostsPage() {
  const { result, isFetching, error, dispatch } = useApi<IPost[]>(
    "http://localhost:8080/api/posts",
    "GET"
  );

  useEffect(() => {
    dispatch();
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <Page>
      <h2 className="text-xl text-center">Posts</h2>

      {isFetching ? (
        <LoadingText className="justify-self-center" />
      ) : (
        <PostsList posts={result} />
      )}
    </Page>
  );
}
