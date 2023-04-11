import { createSelector } from "reselect";
import { LoadingStateEnum } from "../../models/SharedModel";
import { AppState } from "../RootReducer";

const getTopStoryUIDList = (state: AppState): number[] => {
  return state?.storyReducer?.topStoryUIDList;
};
export const getTopStoryUIDListSelector = createSelector(
  getTopStoryUIDList,
  (topStoryUIDList: number[]): number[] => topStoryUIDList
);

const getTopStoryUIDListLoadingState = (state: AppState): LoadingStateEnum => {
  return state?.storyReducer?.topStoryUIDListLoadingState;
};
export const getTopStorUIDyListLoadingStateSelector = createSelector(
  getTopStoryUIDListLoadingState,
  (LoadingState: LoadingStateEnum): LoadingStateEnum => LoadingState
);
