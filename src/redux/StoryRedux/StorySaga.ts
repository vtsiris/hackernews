import { put, call, all, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  getStoryFailAction,
  getStorySuccessAction,
  getTopStoryUIDListActionFailAction,
  getTopStoryUIDListActionSuccessAction,
  IGetStory,
  StoryActions,
} from "./StoryActions";
import { IStory } from "../../models/StoryModel";
import { getStoryAsync, getTopStoryUIDListAsync } from "./StoryService";

function* StorySaga() {
  yield all([
    takeLatest(StoryActions.GET_TOP_STORY_UID_LIST, getTopStoryUIDList),
    takeLatest(StoryActions.GET_STORY, getStory),
  ]);
}

export default StorySaga;

function* getTopStoryUIDList() {
  try {
    const response: AxiosResponse<number[]> = yield call(() =>
      getTopStoryUIDListAsync()
    );
    yield put(getTopStoryUIDListActionSuccessAction(response?.data));
  } catch (e: any) {
    yield put(getTopStoryUIDListActionFailAction(e));
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
