const R = require('ramda');

const validate = val => {
  const type = typeof(val);

  return type === 'boolean' || type === 'undefined';
};

const message = '<%= propertyName %> must be a boolean.';

export default {validate, message};
