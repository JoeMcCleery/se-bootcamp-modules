import { IPost } from "../../types";
import Card from "../containers/Card";
import CommentSection from "./CommentSection";
import PostComments from "./PostComments";
import PostLikes from "./PostLikes";
import AuthorTag from "./AuthorTag";

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  return (
    <div className="grid max-w-2xl m-auto w-full gap-4 p-4">
      <Card>
        <div className="grid p-4 items-center relative w-full min-h-60">
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

          <div className="relative z-10 text-center space-y-2">
            <h2 className="text-xl leading-tight">{post.title}</h2>
            <AuthorTag userId={post.userId} />
          </div>

          <div className="absolute z-10 bottom-4 right-4 flex gap-4">
            <PostComments postId={post._id} />
            <PostLikes postId={post._id} />
          </div>
        </div>

        <div className="p-4">
          <p className="whitespace-pre-wrap">{post.description}</p>
        </div>

        <div id="comments">
          <CommentSection postId={post._id} />
        </div>
      </Card>
    </div>
  );
}
