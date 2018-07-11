import React from 'react';
import {CookiesProvider} from 'react-cookie';
import {renderRoutes} from 'react-router-config';
import Header from 'components/Header';

export default class AppRoot extends React.Component {
    render() {
        const {routes} = this.props.route;
        return (
            <CookiesProvider>
                <div className="app">
                    <Header/>
                    <main className="app-main">
                        {renderRoutes(routes)}
                    </main>
                </div>
            </CookiesProvider>
        )
    }
}