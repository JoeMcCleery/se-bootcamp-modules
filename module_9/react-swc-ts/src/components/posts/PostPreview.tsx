import { Link } from "react-router-dom";
import { IPost } from "../../types";
import Card from "../containers/Card";
import AuthorTag from "./AuthorTag";

interface IPostPreviewProps {
  post: IPost;
}

export default function PostPreview({ post }: IPostPreviewProps) {
  return (
    <Link
      to={`/posts/${post._id}`}
      className="rounded grid"
    >
      <Card className="auto-rows-min transition-[background-color,_box-shadow] hover:shadow-none hover:bg-sky-600">
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
    </Link>
  );
}
