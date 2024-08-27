import { IComment } from "../../types";
import Card from "../containers/Card";
import AuthorTag from "./AuthorTag";

interface ICommentProps {
  comment: IComment;
}

export default function Comment({ comment }: ICommentProps) {
  return (
    <Card>
      <div className="p-4">
        <AuthorTag userId={comment.userId} />
        <p className="whitespace-pre-wrap">{comment.message}</p>
      </div>
    </Card>
  );
}
