import v2exSaga, { watchFetchHotTopics, watchFetchTopicDetail } from './v2ex';

export default function* rootSaga() {
  yield [
    watchFetchHotTopics(),
    watchFetchTopicDetail(),
  ];
}
