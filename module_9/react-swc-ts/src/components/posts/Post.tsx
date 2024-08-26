import { IPost, IUser } from "../../types";
import Card from "../containers/Card";

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  const postAuthor =
    typeof post.userId === "object" ? (post.userId as IUser) : null;

  console.log(postAuthor);

  return (
    <Card className="auto-rows-min">
      <div className="flex justify-between">
        <div className="p-4 max-h-80">
          {postAuthor && (
            <p className="text-sm text-white/80">By {postAuthor.username}</p>
          )}
          <h3 className="text-lg">{post.title}</h3>
        </div>

        {post.image && (
          <div className="relative h-full aspect-square">
            <img
              src={post.image}
              alt="Post image"
              className="absolute object-cover h-full"
            />
          </div>
        )}
      </div>

      <p className="p-4">{post.description}</p>
    </Card>
  );
}
