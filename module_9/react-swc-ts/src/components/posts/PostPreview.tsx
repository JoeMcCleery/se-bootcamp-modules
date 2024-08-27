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
        <div className="grid grid-cols-[auto_1fr] p-4 gap-4">
          {post.image && (
            <div className="overflow-hidden rounded-full size-11">
              <img
                src={post.image}
                alt="Post image"
                className="object-cover"
              />
            </div>
          )}

          <div>
            <AuthorTag userId={post.userId} />
            <h3 className="text-lg line-clamp-1 leading-tight">{post.title}</h3>
          </div>
        </div>

        <div className="p-4 overflow-hidden">
          <p className="line-clamp-2">{post.description}</p>
        </div>
      </Card>
    </Link>
  );
}
