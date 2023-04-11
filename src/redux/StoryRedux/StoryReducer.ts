import { LoadingStateEnum } from "../../models/SharedModel";
import { IDefaultAction } from "../RootReducer";
import { StoryActions } from "./StoryActions";

interface IStoryReducer {
  topStoryUIDList: number[];
  topStoryUIDListLoadingState: LoadingStateEnum;
}

const initialStoryReducerState: IStoryReducer = {
  topStoryUIDList: [],
  topStoryUIDListLoadingState: LoadingStateEnum.InitialState,
};

const storyReducer = (
  state = initialStoryReducerState,
  action: IDefaultAction
): IStoryReducer => {
  switch (action.type) {
    case StoryActions.GET_TOP_STORY_UID_LIST:
      return {
        ...state,
        topStoryUIDListLoadingState: LoadingStateEnum.LoadingState,
      };
    case StoryActions.GET_TOP_STORY_UID_LIST_SUCCESS:
      return {
        ...state,
        topStoryUIDList: action.payload,
        topStoryUIDListLoadingState: LoadingStateEnum.InitialState,
      };
    case StoryActions.GET_TOP_STORY_UID_LIST_FAIL:
      return {
        ...state,
        topStoryUIDListLoadingState: LoadingStateEnum.ErrorState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default storyReducer;
