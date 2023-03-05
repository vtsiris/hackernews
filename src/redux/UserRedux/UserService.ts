import axios from "axios";
import { IUser } from "../../models/UserModel";

export const getUserAsync = (userID: string) => {
  return axios.get<IUser>(
    `https://hacker-news.firebaseio.com/v0/user/${userID}.json?print=pretty`
  );
};
