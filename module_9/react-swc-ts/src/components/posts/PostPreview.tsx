import { useNavigate } from "react-router-dom";
import { IPost } from "../../types";
import Card from "../containers/Card";
import AuthorTag from "./AuthorTag";

interface IPostPreviewProps {
  post: IPost;
}

export default function PostPreview({ post }: IPostPreviewProps) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      title="View post"
      className="text-left rounded grid opacity-100 transition-opacity hover:opacity-50 focus-visible:opacity-50"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <Card className="auto-rows-min h-full transition-[background-color,_box-shadow] hover:shadow-none">
        <div className="grid p-4 relative w-full">
          {post.image && (
            <>
              <div className="absolute size-full">
                <img
                  src={post.image}
                  alt="Post image"
                  className="object-cover size-full"
                />
              </div>
              <div className="size-full absolute bg-slate-900/50"></div>
            </>
          )}

          <div className="relative z-10">
            <AuthorTag userId={post.userId} />
            <h2 className="text-xl leading-tight line-clamp-1">{post.title}</h2>
          </div>
        </div>

        <div className="p-4 overflow-hidden">
          <p className="line-clamp-2">{post.description}</p>
        </div>
      </Card>
    </button>
  );
}
