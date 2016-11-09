import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  get(notes, year, type, week) {
    return {
      [CALL_API]: {
        endpoint: `/api/plays/?seasonYear=${year}&seasonType=${type}&week=${week}&notes=${notes.join('&notes=')}}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        types: [
          types.PLAYS_REQUEST,
          types.PLAYS_SUCCESS,
          types.PLAYS_FAILURE,
        ],
      },
    };
  },
};
