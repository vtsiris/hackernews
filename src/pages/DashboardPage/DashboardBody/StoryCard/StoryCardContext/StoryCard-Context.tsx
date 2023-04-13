import React from "react";
import { IUserStory } from "../../../../../models/UserStoryModel";

interface IContext {
  userStory?: IUserStory;
  setUserStory: (arg?: IUserStory) => void;
}

const context: IContext = {
  userStory: undefined,
  setUserStory: (arg?: IUserStory) => {},
};

const StoryCardContext = React.createContext(context);

export default StoryCardContext;
