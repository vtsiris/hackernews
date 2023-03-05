import { createSelector } from "reselect";
import { LoadingStateEnum } from "../../models/SharedModel";
import { IUserStory } from "../../models/UserStoryModel";
import { AppState } from "../RootReducer";

const getUserStoryList = (state: AppState): IUserStory[] => {
  return state?.userStoryReducer?.userStoryList || [];
};

export const getUserStoryListSelector = createSelector(
  getUserStoryList,
  (userStoryList: IUserStory[]): IUserStory[] => userStoryList
);

const getUserStoryLoadingState = (state: AppState): LoadingStateEnum => {
  return state?.userStoryReducer?.userStoryLoadingState;
};

export const getUserStoryLoadingStateSelector = createSelector(
  getUserStoryLoadingState,
  (loadingState: LoadingStateEnum): LoadingStateEnum => loadingState
);

const getUserStoryListLoadingState = (state: AppState): LoadingStateEnum => {
  return state?.userStoryReducer?.userStoryListLoadingState;
};

export const getUserStoryListLoadingStateSelector = createSelector(
  getUserStoryListLoadingState,
  (loadingState: LoadingStateEnum): LoadingStateEnum => loadingState
);
