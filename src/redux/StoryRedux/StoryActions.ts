import { IStory } from "../../models/StoryModel";

export enum StoryActions {
  GET_TOP_STORIES = "GET_TOP_STORIES",
  GET_TOP_STORIES_SUCCESS = "GET_TOP_STORIES_SUCCESS",
  GET_TOP_STORIES_FAIL = "GET_TOP_STORIES_FAIL",

  GET_STORY = "GET_STORY",
  GET_STORY_SUCCESS = "GET_STORY_SUCCESS",
  GET_STORY_FAIL = "GET_STORY_FAIL",
}

export interface IGetTopStories {
  type: typeof StoryActions.GET_TOP_STORIES;
}
export interface IGetTopStoriesSuccess {
  type: typeof StoryActions.GET_TOP_STORIES_SUCCESS;
  payload: number[];
}
export interface IGetTopStoriesFail {
  type: typeof StoryActions.GET_TOP_STORIES_FAIL;
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

export const getTopStoriesAction = (): IGetTopStories => ({
  type: StoryActions.GET_TOP_STORIES,
});
export const getTopStoriesSuccessAction = (
  payload: number[]
): IGetTopStoriesSuccess => ({
  type: StoryActions.GET_TOP_STORIES_SUCCESS,
  payload: payload,
});
export const getTopStoriesFailAction = (error: any): IGetTopStoriesFail => ({
  type: StoryActions.GET_TOP_STORIES_FAIL,
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
