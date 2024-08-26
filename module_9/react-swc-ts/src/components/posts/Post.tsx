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
    <Card>
      <div className="p-4">
        {postAuthor && <p className="text-sm">By {postAuthor.username}</p>}
        <h3 className="text-lg">{post.title}</h3>
      </div>

      <p className="p-4">{post.description}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post image"
        />
      )}
    </Card>
  );
}
