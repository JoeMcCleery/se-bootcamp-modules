import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import Page from "../containers/Page";
import { IPost } from "../../types";
import ErrorPage from "./ErrorPage";
import PostPreviewList from "../posts/PostPreviewList";
import LoadingText from "../pure/LoadingText";
import CreatePostButton from "../inputs/CreatePostButton";

export default function PostsPage() {
  const { result, isFetching, error, dispatch } = useApi<IPost[]>(
    "/api/posts",
    "GET"
  );

  useEffect(() => {
    dispatch();
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <Page padding>
      <h2 className="text-xl text-center">Posts</h2>

      {isFetching ? (
        <LoadingText className="m-auto" />
      ) : (
        <PostPreviewList posts={result} />
      )}

      <CreatePostButton onPostCreated={dispatch} />
    </Page>
  );
}
