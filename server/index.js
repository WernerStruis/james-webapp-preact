'use strict';
GLOBAL.self = GLOBAL;
const app   = require('./app');
const logger= require('./logger');
const config= require('config');

// Start app
const port = process.env.PORT || config.server.port || 3000;
const host = process.env.HOST || config.server.host || '0.0.0.0';

app.listen(port, host, err => {
    if(err) return logger.error(err);
    logger.info(`Server started at ${host}:${port}`)
});