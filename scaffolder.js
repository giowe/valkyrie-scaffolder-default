'use strict';

const notNullValidator = (val) => val !== '';

module.exports = {
  inputs: [
    { type: 'input', name: 'description', message: 'description:', validate: notNullValidator },
    { type: 'input', name: 'author', message: 'author:' },
    { type: 'input', name: 'author', message: 'license:', default: 'MIT' }
  ]
};
