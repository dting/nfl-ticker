import { rsaaActionTypes } from '../rsaa-helpers';

const rsaaTypes = rsaaActionTypes(['MATCHUP'], 'matchup');

export default {
  SET_MATCHUP_META: 'matchup/SET_MATCHUP_META',
  ...rsaaTypes,
};
