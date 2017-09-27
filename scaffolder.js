'use strict';

module.exports = {
  source: 'src',
  handler: 'index.handler',
  inputs: [
    { type: 'input', name: 'author', message: 'author:' },
    { type: 'input', name: 'license', message: 'license:', default: 'MIT' }
  ]
};
