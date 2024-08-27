import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import Page from "../containers/Page";
import { IPost } from "../../types";
import ErrorPage from "./ErrorPage";
import LoadingText from "../pure/LoadingText";
import { useParams } from "react-router-dom";
import Post from "../posts/Post";

export default function PostPage() {
  const { id } = useParams();

  const {
    result: post,
    isFetching,
    error,
    dispatch,
  } = useApi<IPost>(`/api/posts/${id}`, "GET");

  useEffect(() => {
    dispatch();
  }, [id]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <Page>
      {isFetching ? (
        <LoadingText className="m-auto p-4" />
      ) : !post ? (
        <p className="text-center">No post found...</p>
      ) : (
        <Post post={post} />
      )}
    </Page>
  );
}
