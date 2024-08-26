import { IPost } from "../../types";
import Card from "../containers/Card";

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  return (
    <Card>
      <p className="p-2">By {post.userId}</p>
      <h3 className="p-2 text-lg">{post.title}</h3>
      <p className="p-2">{post.description}</p>
    </Card>
  );
}
