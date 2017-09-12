'use strict';

const Valkyrie = require('aws-valkyrie');
const app = new Valkyrie();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.all('*', (req, res) => {
  res.sendStatus(404);
});

exports.handler = (...args) => app.listen(...args);
