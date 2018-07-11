const _ = require('lodash');

const all = {
    server: {
        host: "0.0.0.0",
        port: 3000,
        clientId: "JMS_WEB",
        clientSecret: "JMS_WEB"
    },
    proxy: {
        apiBaseUrl: "http://public.jms-api.dev:8081",
        authBaseUrl: "http://auth.james-api.com"
    }
};

module.exports = _.merge(
    all,
    require(`./${process.env.NODE_ENV}.config`)
);