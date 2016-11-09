import types from './constants';

const initialState = {
  seasonYear: null,
  seasonType: null,
  week: null,
  lastRosterDownload: null,
  version: null,
  loading: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.META_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.META_FAILURE:
      return {
        ...state,
        loading: null,
        error: 'Fetching meta data failed...',
      };
    case types.META_SUCCESS:
      return {
        ...state,
        loading: null,
        ...action.payload,
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
