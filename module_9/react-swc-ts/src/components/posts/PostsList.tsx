import { IPost } from "../../types";
import Post from "./Post";

interface IPostsListProps {
  posts?: IPost[];
}

export default function PostsList({ posts }: IPostsListProps) {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl w-full m-auto">
      {!posts || posts.length === 0 ? (
        <p className="text-center">No posts...</p>
      ) : (
        posts.map((post) => (
          <Post
            key={post._id}
            post={post}
          />
        ))
      )}
    </div>
  );
}
