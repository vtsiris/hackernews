import { IUser } from "./UserModel";
import { IStory } from "./StoryModel";

export interface IUserStory {
  story: IStory;
  user: IUser;
}
