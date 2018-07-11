import React from 'react';
import {Link} from 'react-router-dom';
import List from 'modules/stores/storeList';
import Header from 'modules/stores/storeHeader';
import {fetchStores} from "../modules/stores/actions";

export default class StoreList extends React.Component {

    render() {
        return (
            <div className="welcome">
                <Header/>

                <div className="resultActions">
                </div>

                <div className="resultListContainer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 hidden-xs">
                                {/*<Filter/>*/}
                            </div>
                            <div className="col-md-9 col-xs-12">
                                <List/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}