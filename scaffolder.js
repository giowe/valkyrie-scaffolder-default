'use strict';

module.exports = {
  source: 'src',
  inputs: [
    { type: 'input', name: 'description', message: 'description:' },
    { type: 'input', name: 'author', message: 'author:' },
    { type: 'input', name: 'license', message: 'license:', default: 'MIT' }
  ]
};
