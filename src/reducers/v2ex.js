import {
  handleActions,
} from 'redux-actions';

const initialState = {
  topics: [],
  isLoading: false,
  detail: null,
};

export default handleActions({
  'fetchHotTopics/start': state => ({
    ...state, isLoading: true,
  }),
  'fetchHotTopics/end': (state, action) => ({
    ...state, topics: action.payload, isLoading: false,
  }),
  'fetchTopicDetail/start': state => ({
    ...state, isLoading: true,
  }),
  'fetchTopicDetail/end': (state, action) => ({
    ...state, detail: action.payload,
  }),

}, initialState);
