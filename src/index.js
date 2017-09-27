'use strict';

const Valkyrie = require('aws-valkyrie');
const app = new Valkyrie();
const pkg = require('./package.json');

app.get('/info', (req, res) => res.json(pkg));

app.get('/home', (req, res) => res.send('hello world'));

app.all('*', (req, res) => res.sendStatus(404));

exports.handler = (...args) => app.listen(...args);
