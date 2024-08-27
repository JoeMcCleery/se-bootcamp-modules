import { IPost } from "../../types";
import PostPreview from "./PostPreview";

interface IPostPreviewListProps {
  posts?: IPost[];
}

export default function PostPreviewList({ posts }: IPostPreviewListProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl w-full m-auto">
      {!posts || posts.length === 0 ? (
        <p className="text-center">No posts...</p>
      ) : (
        posts.map((post) => (
          <PostPreview
            key={post._id}
            post={post}
          />
        ))
      )}
    </div>
  );
}
