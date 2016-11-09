import rsaas from './rsaa';

const get = function get(notes, year, type, week) {
  return rsaas.get(notes, year, type, week);
};

export default {
  get,
};
