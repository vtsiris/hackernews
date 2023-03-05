import { createSelector } from "reselect";
import { LoadingStateEnum } from "../../models/SharedModel";
import { AppState } from "../RootReducer";

const getTopStoryList = (state: AppState): number[] => {
  return state?.storyReducer?.topStoryList;
};
export const getTopStoryListSelector = createSelector(
  getTopStoryList,
  (topStoryList: number[]): number[] => topStoryList
);

const getTopStoryListLoadingState = (state: AppState): LoadingStateEnum => {
  return state?.storyReducer?.topStoryListLoadingState;
};
export const getTopStoryListLoadingStateSelector = createSelector(
  getTopStoryListLoadingState,
  (LoadingState: LoadingStateEnum): LoadingStateEnum => LoadingState
);
