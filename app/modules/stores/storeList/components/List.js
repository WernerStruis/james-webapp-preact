import React from 'react';
import ListItem from './Item';

class StoreList extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {items} = this.props;
        return (
            <div className="resultList">
                {
                    items.map((item, idx) =>
                        <ListItem
                            key={idx}
                            item={item}
                        />)
                }
            </div>
        )
    }
}

export default StoreList;