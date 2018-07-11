'use strict';
const express       = require('express');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const logger    = require('./logger');
const routes    = require('./routes');
const proxy = require('./middlewares/proxyMiddleware');

const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(cookieParser());
app.use('/assets', express.static('build/assets'));

app.use('/api', proxy.proxyApi);
app.use(routes);

module.exports = app;