import { IUser } from "./User";

export interface IPost {
  _id: string;
  userId: string | Partial<IUser>;
  title: string;
  description: string;
  image: string;
}
