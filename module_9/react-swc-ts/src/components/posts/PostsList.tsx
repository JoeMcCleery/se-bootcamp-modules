import { IPost } from "../../types";
import Post from "./Post";

interface IPostsListProps {
  posts?: IPost[];
}

export default function PostsList({ posts }: IPostsListProps) {
  return (
    <div className="grid gap-2 grid-cols-1">
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
