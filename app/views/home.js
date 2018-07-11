import React from 'react';
import {Link} from 'react-router-dom';
import OrderCTA from 'modules/home/orderCTA';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="welcome">
                <OrderCTA/>
            </div>
        )
    }
}