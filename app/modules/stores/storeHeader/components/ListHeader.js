import React from 'react';
import OrderCTA from './cta';
class StoreListHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const {cookies} = this.props;
        const searchValue = cookies.get('searchString');
        return (
            <div className="resultHeader">
                <div className="container">
                    <OrderCTA
                        searchValue={searchValue || ''}
                    />
                </div>
            </div>
        )
    }
}

export default StoreListHeader;