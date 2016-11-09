import types from './constants';

const initialState = {
  plays: [],
  loading: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.PLAYS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.PLAYS_FAILURE:
      return {
        ...state,
        loading: null,
        error: 'Fetching plays failed...',
      };
    case types.PLAYS_SUCCESS:
      return {
        ...state,
        loading: null,
        plays: action.payload,
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
