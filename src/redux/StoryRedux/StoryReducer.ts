import { LoadingStateEnum } from "../../models/SharedModel";
import { IDefaultAction } from "../RootReducer";
import { StoryActions } from "./StoryActions";

interface IStoryReducer {
  topStoryList: number[];
  topStoryListLoadingState: LoadingStateEnum;
}

const initialStoryReducerState: IStoryReducer = {
  topStoryList: [],
  topStoryListLoadingState: LoadingStateEnum.InitialState,
};

const storyReducer = (
  state = initialStoryReducerState,
  action: IDefaultAction
): IStoryReducer => {
  switch (action.type) {
    case StoryActions.GET_STORY:
      return {
        ...state,
        topStoryListLoadingState: LoadingStateEnum.LoadingState,
      };
    case StoryActions.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        topStoryList: action.payload,
        topStoryListLoadingState: LoadingStateEnum.InitialState,
      };
    case StoryActions.GET_STORY_FAIL:
      return {
        ...state,
        topStoryListLoadingState: LoadingStateEnum.ErrorState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default storyReducer;
