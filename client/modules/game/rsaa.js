import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  get(gsisId) {
    return {
      [CALL_API]: {
        endpoint: `/api/games/${gsisId}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        types: [
          types.GAME_REQUEST,
          types.GAME_SUCCESS,
          types.GAME_FAILURE,
        ],
      },
    };
  },
};
