import types from './constants';

const initialState = {
  seasonYear: null,
  seasonType: null,
  week: null,
  games: [],
  loading: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_MATCHUP_META:
      return {
        ...state,
        ...action.payload,
      };
    case types.MATCHUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.MATCHUP_FAILURE:
      return {
        ...state,
        loading: null,
        error: 'Fetching MATCHUP data failed...',
      };
    case types.MATCHUP_SUCCESS:
      return {
        ...state,
        loading: null,
        games: action.payload,
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
