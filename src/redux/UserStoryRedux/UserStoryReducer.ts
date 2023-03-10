import { LoadingStateEnum } from "../../models/SharedModel";
import { IUserStory } from "../../models/UserStoryModel";
import { IDefaultAction } from "../RootReducer";
import { UserStoryActions } from "./UserStoryActions";

interface IUserStoryReducer {
  userStoryList: IUserStory[];

  userStoryLoadingState: LoadingStateEnum;
  userStoryListLoadingState: LoadingStateEnum;
}

const initialUserStoryReducerState: IUserStoryReducer = {
  userStoryList: [],

  userStoryLoadingState: LoadingStateEnum.InitialState,
  userStoryListLoadingState: LoadingStateEnum.InitialState,
};

const userStoryReducer = (
  state = initialUserStoryReducerState,
  action: IDefaultAction
): IUserStoryReducer => {
  switch (action.type) {
    case UserStoryActions.GET_USER_STORY:
      return {
        ...state,
        userStoryLoadingState: LoadingStateEnum.LoadingState,
        userStoryListLoadingState: LoadingStateEnum.LoadingState,
      };
    case UserStoryActions.GET_USER_STORY_SUCCESS:
      return {
        ...state,
        userStoryList: state.userStoryList.concat(action.payload),
        userStoryLoadingState: LoadingStateEnum.InitialState,
      };
    case UserStoryActions.GET_USER_STORY_FAIL:
      return {
        ...state,
        userStoryLoadingState: LoadingStateEnum.ErrorState,
      };
    case UserStoryActions.GET_USER_STORY_LIST_SUCCESS:
      return {
        ...state,
        userStoryListLoadingState: LoadingStateEnum.CompletedState,
      };
    case UserStoryActions.GET_USER_STORY_LIST_FAIL:
      return {
        ...state,
        userStoryListLoadingState: LoadingStateEnum.ErrorState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userStoryReducer;
