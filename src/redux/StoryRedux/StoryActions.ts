import { IStory } from "../../models/StoryModel";

export enum StoryActions {
  GET_TOP_STORY_UID_LIST = "GET_TOP_STORY_UID_LIST",
  GET_TOP_STORY_UID_LIST_SUCCESS = "GET_TOP_STORY_UID_LIST_SUCCESS",
  GET_TOP_STORY_UID_LIST_FAIL = "GET_TOP_STORY_UID_LIST_FAIL",

  GET_STORY = "GET_STORY",
  GET_STORY_SUCCESS = "GET_STORY_SUCCESS",
  GET_STORY_FAIL = "GET_STORY_FAIL",
}

export interface IGetTopStoryUIDList {
  type: typeof StoryActions.GET_TOP_STORY_UID_LIST;
}
export interface IGetTopStoryUIDListSuccess {
  type: typeof StoryActions.GET_TOP_STORY_UID_LIST_SUCCESS;
  payload: number[];
}
export interface IGetTopStoryUIDListFail {
  type: typeof StoryActions.GET_TOP_STORY_UID_LIST_FAIL;
  payload: any;
}

export interface IGetStory {
  type: typeof StoryActions.GET_STORY;
  payload: number;
}
export interface IGetStorySuccess {
  type: typeof StoryActions.GET_STORY_SUCCESS;
  payload: IStory;
}
export interface IGetStoryFail {
  type: typeof StoryActions.GET_STORY_FAIL;
  payload: any;
}

export const getTopStoryUIDListAction = (): IGetTopStoryUIDList => ({
  type: StoryActions.GET_TOP_STORY_UID_LIST,
});
export const getTopStoryUIDListActionSuccessAction = (
  payload: number[]
): IGetTopStoryUIDListSuccess => ({
  type: StoryActions.GET_TOP_STORY_UID_LIST_SUCCESS,
  payload: payload,
});
export const getTopStoryUIDListActionFailAction = (
  error: any
): IGetTopStoryUIDListFail => ({
  type: StoryActions.GET_TOP_STORY_UID_LIST_FAIL,
  payload: error,
});

export const getStoryAction = (storyID: number): IGetStory => ({
  type: StoryActions.GET_STORY,
  payload: storyID,
});
export const getStorySuccessAction = (payload: IStory): IGetStorySuccess => ({
  type: StoryActions.GET_STORY_SUCCESS,
  payload: payload,
});
export const getStoryFailAction = (error: any): IGetStoryFail => ({
  type: StoryActions.GET_STORY_FAIL,
  payload: error,
});
