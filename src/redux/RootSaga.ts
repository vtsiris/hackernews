import { all, fork } from "redux-saga/effects";
import StorySaga from "./StoryRedux/StorySaga";
import UserSaga from "./UserRedux/UserSaga";
import UserStorySaga from "./UserStoryRedux/UserStorySaga";

function* RootSaga() {
  yield all([fork(StorySaga), fork(UserSaga), fork(UserStorySaga)]);
}

export default RootSaga;
