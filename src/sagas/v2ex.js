import {
  takeEvery,
} from 'redux-saga';
import {
  put,
  call,
} from 'redux-saga/effects';
import * as V2exApi from 'apis/v2ex';

export function* fetchHotTopics() {
  yield put({
    type: 'fetchHotTopics/start',
  });
  const data = yield call(V2exApi.fetchHotTopics);
  yield put({
    type: 'fetchHotTopics/end',
    payload: data,
  });
}
export function* fetchTopicDetail(action) {
  yield put({
    type: 'fetchTopicDetail/start',
  });
  const id = action.payload;
  const data = yield call(V2exApi.fetchTopicDetail, id);
  yield put({
    type: 'fetchTopicDetail/end',
    payload: data,
  });
}

export function* watchFetchHotTopics() {
  yield takeEvery('fetch hot topics', fetchHotTopics);
}

export function* watchFetchTopicDetail() {
  yield takeEvery('fetch topic detail', fetchTopicDetail);
}

// it doesn't work
export default function* v2exSaga() {
  yield takeEvery('fetch hot topics', fetchHotTopics);
  yield takeEvery('fetch topic detail', fetchTopicDetail);
}
