import { IUserStory } from "../../models/UserStoryModel";

export enum UserStoryActions {
  GET_USER_STORY = "GET_USER_STORY",
  GET_USER_STORY_SUCCESS = "GET_USER_STORY_SUCCESS",
  GET_USER_STORY_FAIL = "GET_USER_STORY_FAIL",

  GET_USER_STORY_LIST_SUCCESS = "GET_USER_STORY_LIST_SUCCESS",
  GET_USER_STORY_LIST_FAIL = "GET_USER_STORY_LIST_FAIL",

  SORT_ASCENDING_USER_STORY_LIST = "SORT_ASCENDING_USER_STORY_LIST",
}

export interface IGetUserStory {
  type: typeof UserStoryActions.GET_USER_STORY;
  payload: number[];
}
export interface IGetUserStorySuccess {
  type: typeof UserStoryActions.GET_USER_STORY_SUCCESS;
}
export interface IGetUserStoryFail {
  type: typeof UserStoryActions.GET_USER_STORY_FAIL;
  payload: any;
}

export interface IGetUserStoryListSuccess {
  type: typeof UserStoryActions.GET_USER_STORY_LIST_SUCCESS;
  payload: IUserStory[];
}
export interface IGetUserStoryListFail {
  type: typeof UserStoryActions.GET_USER_STORY_LIST_FAIL;
  payload: any;
}

export interface ISortAscendingUserStoryList {
  type: typeof UserStoryActions.SORT_ASCENDING_USER_STORY_LIST;
}

export const getUserStoryAction = (storyID: number[]): IGetUserStory => ({
  type: UserStoryActions.GET_USER_STORY,
  payload: storyID,
});
export const getUserStorySuccessAction = (): IGetUserStorySuccess => ({
  type: UserStoryActions.GET_USER_STORY_SUCCESS,
});
export const getUserStoryFailAction = (error: any): IGetUserStoryFail => ({
  type: UserStoryActions.GET_USER_STORY_FAIL,
  payload: error,
});

export const getUserStoryListSuccessAction = (
  payload: IUserStory[]
): IGetUserStoryListSuccess => ({
  type: UserStoryActions.GET_USER_STORY_LIST_SUCCESS,
  payload: payload,
});
export const getUserStoryListFailAction = (
  error: any
): IGetUserStoryListFail => ({
  type: UserStoryActions.GET_USER_STORY_LIST_FAIL,
  payload: error,
});

export const sortUserStoryListAction = (): ISortAscendingUserStoryList => ({
  type: UserStoryActions.SORT_ASCENDING_USER_STORY_LIST,
});
