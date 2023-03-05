import { IUserStory } from "../../models/UserStoryModel";

export enum UserStoryActions {
  GET_USER_STORY = "GET_USER_STORY",
  GET_USER_STORY_SUCCESS = "GET_USER_STORY_SUCCESS",
  GET_USER_STORY_FAIL = "GET_USER_STORY_FAIL",

  GET_USER_STORY_LIST_SUCCESS = "GET_USER_STORY_LIST_SUCCESS",
  GET_USER_STORY_LIST_FAIL = "GET_USER_STORY_LIST_FAIL",
}

export interface IGetUserStory {
  type: typeof UserStoryActions.GET_USER_STORY;
  payload: number[];
}
export interface IGetUserStorySuccess {
  type: typeof UserStoryActions.GET_USER_STORY_SUCCESS;
  payload: IUserStory;
}
export interface IGetUserStoryFail {
  type: typeof UserStoryActions.GET_USER_STORY_FAIL;
  payload: any;
}

export interface IGetUserStoryListSuccess {
  type: typeof UserStoryActions.GET_USER_STORY_LIST_SUCCESS;
}
export interface IGetUserStoryListFail {
  type: typeof UserStoryActions.GET_USER_STORY_LIST_FAIL;
  payload: any;
}

export const getUserStoryAction = (storyID: number[]): IGetUserStory => ({
  type: UserStoryActions.GET_USER_STORY,
  payload: storyID,
});
export const getUserStorySuccessAction = (
  payload: IUserStory
): IGetUserStorySuccess => ({
  type: UserStoryActions.GET_USER_STORY_SUCCESS,
  payload: payload,
});
export const getUserStoryFailAction = (error: any): IGetUserStoryFail => ({
  type: UserStoryActions.GET_USER_STORY_FAIL,
  payload: error,
});

export const getUserStoryListSuccessAction = (): IGetUserStoryListSuccess => ({
  type: UserStoryActions.GET_USER_STORY_LIST_SUCCESS,
});
export const getUserStoryListFailAction = (
  error: any
): IGetUserStoryListFail => ({
  type: UserStoryActions.GET_USER_STORY_LIST_FAIL,
  payload: error,
});
