module.exports = {
  source: 'src',
  handler: 'index.handler',
  root: '/info',
  inputs: [
    { type: 'input', name: 'author', message: 'author:' },
    { type: 'input', name: 'license', message: 'license:', default: 'MIT' }
  ]
};
