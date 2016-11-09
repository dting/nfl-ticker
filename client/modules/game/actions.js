import rsaas from './rsaa';

const get = function get(gsisId) {
  return rsaas.get(gsisId);
};

export default {
  get,
};
