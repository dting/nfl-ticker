import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  get() {
    return {
      [CALL_API]: {
        endpoint: '/api/metas',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        types: [
          types.META_REQUEST,
          types.META_SUCCESS,
          types.META_FAILURE,
        ],
      },
    };
  },
};
