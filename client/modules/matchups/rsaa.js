import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  get(year, type, week) {
    return {
      [CALL_API]: {
        endpoint: `/api/games/?seasonYear=${year}&seasonType=${type}&week=${week}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        types: [
          types.MATCHUP_REQUEST,
          types.MATCHUP_SUCCESS,
          types.MATCHUP_FAILURE,
        ],
      },
    };
  },
};
