'use strict';

const notNullValidator = (val) => val !== '';

module.exports = {
  inputs: [
    { type: 'input', name: 'projectName', message: 'project name:', validate: val => val && !val.contains(' ') },
    { type: 'input', name: 'description', message: 'description:', validate: notNullValidator },
    { type: 'input', name: 'author', message: 'author:' },
    { type: 'input', name: 'author', message: 'license:', default: 'MIT' }
  ]
};
