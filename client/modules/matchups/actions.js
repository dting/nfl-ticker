import rsaas from './rsaa';
import types from './constants';

const get = function get(seasonYear, seasonType, week) {
  return (dispatch) => {
    dispatch({
      type: types.SET_MATCHUP_META,
      payload: {
        seasonYear,
        seasonType,
        week,
      },
    });
    dispatch(rsaas.get(seasonYear, seasonType, week));
  };
};

export default {
  get,
};
