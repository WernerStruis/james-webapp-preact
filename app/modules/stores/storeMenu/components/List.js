import React from 'react';

class StoreMenu extends React.Component {

    componentDidMount() {

    }

    render() {
        const {items} = this.props;
        console.log(items);
        return (
            <div className="resultList">

            </div>
        )
    }
}

export default StoreMenu;