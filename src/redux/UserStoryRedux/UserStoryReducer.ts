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
        userStoryList: (state.userStoryList || [])?.concat(...action.payload),
      };
    case UserStoryActions.GET_USER_STORY_LIST_FAIL:
      return {
        ...state,
        userStoryListLoadingState: LoadingStateEnum.ErrorState,
      };
    case UserStoryActions.SORT_ASCENDING_USER_STORY_LIST:
      console.log("redux");
      return {
        ...state,
        userStoryList: [
          ...(state.userStoryList || [])?.sort(
            (a, b) => a?.story?.score - b?.story?.score
          ),
        ],
      };

    default:
      return {
        ...state,
      };
  }
};

export default userStoryReducer;
