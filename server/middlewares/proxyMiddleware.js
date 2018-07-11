'use strict';

const httpProxy = require('http-proxy');
const config = require('config');
const logger = require('../logger');

const proxy = httpProxy.createProxyServer({
    target: config.proxy.apiBaseUrl,
    changeOrigin: true,
    ws: false
});

proxy.on('error', (err, req, res) => {
    if(err) logger.error(`[PROXY ERROR]: ${err}`);
    res.writeHead(500);
    res.end("Internal Server Error")
});

const proxyApi = (req, res) => {
    logger.info(`Proxying request: ${config.proxy.apiBaseUrl + (req.originalUrl.replace(/\/api/g, ''))}`);
    proxy.web(req, res, {target: config.proxy.apiBaseUrl});
};

const proxyAuth = (req, res) => {
    logger.info(`Proxying request: ${config.proxy.authBaseUrl + (req.originalUrl.replace(/\/api/g, ''))}`);
    const basicAuthToken = Buffer.from(config.server.clientId + ":" + config.server.clientSecret).toString('base64');
    req.headers.authorization = 'Basic ' + basicAuthToken;
    proxy.web(req, res, {target: config.proxy.authBaseUrl});
};

module.exports = {
    proxyApi,
    proxyAuth
};