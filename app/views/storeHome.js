import React from 'react';
import {Link} from 'react-router-dom';
import Menu from 'modules/stores/storeMenu';
import Header from 'modules/stores/storeHeader';
import {fetchStoreDetails} from "modules/stores/actions";

export default class StoreHome extends React.Component {

    // fetchData(store, params)
    static fetchData({dispatch}, {slug}) {
        return dispatch(fetchStoreDetails(slug));
    }

    render() {
        return (
            <div className="welcome">
                <Header/>

                <div className="storeActions">
                </div>

                <div className="storeContainer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 hidden-xs">
                                {/*<Filter/>*/}
                            </div>
                            <div className="col-md-9 col-xs-12">
                                <Menu/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}