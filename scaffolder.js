'use strict';

module.exports = {
  source: 'src',
  inputs: [
    { type: 'input', name: 'author', message: 'author:' },
    { type: 'input', name: 'license', message: 'license:', default: 'MIT' }
  ]
};
