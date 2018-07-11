const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {Provider}     = require('react-redux');
const {StaticRouter} = require('react-router');
const {renderRoutes, matchRoutes} = require('react-router-config');
const configureStore = require('lib/configureStore').default;
const routes    = require('routes').default;
const template  = require('./template');

const fetchData = (url, store) => {
    const branch = matchRoutes(routes, url);
    return branch.map(({route, match}) => {
        let fetchData = route.component && route.component.fetchData
        return fetchData instanceof Function ? fetchData(store, match.params) : Promise.resolve(null)
    });
};
module.exports = (req, res) => {
    const context = {};
    const store =  configureStore({}, true);

    Promise.all(
        fetchData(req.url, store)
    ).then(() => {
        const state = store.getState();
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        );

        res.send(template(html, state));
    }).catch(err => {
        console.log(err);
        res.status(500).send({error: true, message: err})
    })
    // });

};