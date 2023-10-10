import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth.js";
import loading from "./loading.js";
import user, { userSaga } from "./user.js";
import write, { writeSaga } from "./write.js";
import post, { postSaga } from "./post.js";
import posts, { postsSaga } from "./posts.js";
const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
