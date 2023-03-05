import { combineReducers } from "redux";

import StoryReducer from "./StoryRedux/StoryReducer";
import UserReducer from "./UserRedux/UserReducer";
import UserStoryReducer from "./UserStoryRedux/UserStoryReducer";

export interface IDefaultAction {
  type: any;
  payload: any;
}

const rootReducer = combineReducers({
  storyReducer: StoryReducer,
  userReducer: UserReducer,
  userStoryReducer: UserStoryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
