import types from './constants';

const initialState = {
  loading: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GAME_FAILURE:
      return {
        ...state,
        loading: null,
        error: 'Fetching GAME data failed...',
      };
    case types.GAME_SUCCESS:
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
