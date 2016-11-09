import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import {
  game,
  matchups,
  meta,
  plays,
} from '../modules';

export default combineReducers({
  game,
  matchups,
  meta,
  plays,
  routing,
});
