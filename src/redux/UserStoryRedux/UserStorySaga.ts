import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  getUserStoryFailAction,
  getUserStoryListFailAction,
  getUserStoryListSuccessAction,
  getUserStorySuccessAction,
  IGetUserStory,
  UserStoryActions,
} from "./UserStoryActions";
import { IStory } from "../../models/StoryModel";
import { IGetUser, UserActions } from "../UserRedux/UserActions";
import { IUser } from "../../models/UserModel";
import { IUserStory } from "../../models/UserStoryModel";
import { getUser } from "../UserRedux/UserSaga";
import { getStory } from "../StoryRedux/StorySaga";
import { IGetStory, StoryActions } from "../StoryRedux/StoryActions";

function* RootSaga() {
  yield all([takeLatest(UserStoryActions.GET_USER_STORY, getUserStory)]);
}

export default RootSaga;

function* getUserStory(payload: IGetUserStory) {
  try {
    for (let i = 0; i < payload?.payload?.length; i++) {
      const getStoryPayload: IGetStory = {
        type: StoryActions.GET_STORY,
        payload: payload?.payload[i],
      };
      const story: IStory = yield call(() => getStory(getStoryPayload));

      const getUserPayload: IGetUser = {
        type: UserActions.GET_USER,
        payload: story?.by,
      };
      const user: IUser = yield call(() => getUser(getUserPayload));

      const userStory: IUserStory = {
        story: story,
        user: user,
      };
      yield put(getUserStorySuccessAction(userStory));
    }
    yield put(getUserStoryListSuccessAction());
  } catch (e: any) {
    yield put(getUserStoryFailAction(e));
    yield put(getUserStoryListFailAction(e));
  }
}
