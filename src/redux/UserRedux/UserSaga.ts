import { put, call, all, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  getUserFailAction,
  getUserSuccessAction,
  IGetUser,
  UserActions,
} from "./UserActions";
import { getUserAsync } from "./UserService";
import { IUser } from "../../models/UserModel";

function* UserSaga() {
  yield all([takeLatest(UserActions.GET_USER, getUser)]);
}

export default UserSaga;

export function* getUser(payload: IGetUser) {
  try {
    const response: AxiosResponse<IUser> = yield call(() =>
      getUserAsync(payload?.payload)
    );
    yield put(getUserSuccessAction(response?.data));
    return response?.data;
  } catch (e: any) {
    yield put(getUserFailAction(e));
  }
}
