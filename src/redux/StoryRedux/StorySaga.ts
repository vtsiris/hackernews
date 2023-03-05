import { put, call, all, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  getStoryFailAction,
  getStorySuccessAction,
  getTopStoriesFailAction,
  getTopStoriesSuccessAction,
  IGetStory,
  StoryActions,
} from "./StoryActions";
import { IStory } from "../../models/StoryModel";
import { getStoryAsync, getTopStoryListAsync } from "./StoryService";

function* StorySaga() {
  yield all([
    takeLatest(StoryActions.GET_TOP_STORIES, getTopStoryList),
    takeLatest(StoryActions.GET_STORY, getStory),
  ]);
}

export default StorySaga;

function* getTopStoryList() {
  try {
    const response: AxiosResponse<number[]> = yield call(() =>
      getTopStoryListAsync()
    );
    yield put(getTopStoriesSuccessAction(response?.data));
  } catch (e: any) {
    yield put(getTopStoriesFailAction(e));
  }
}

export function* getStory(payload: IGetStory) {
  try {
    const response: AxiosResponse<IStory> = yield call(() =>
      getStoryAsync(payload?.payload)
    );
    yield put(getStorySuccessAction(response?.data));
    return response?.data;
  } catch (e: any) {
    yield put(getStoryFailAction(e));
  }
}
