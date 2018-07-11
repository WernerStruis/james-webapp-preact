import React from 'react';
import {withCookies} from 'react-cookie';
import _ from 'lodash';

import GeoService from 'lib/geoService';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';

class LocationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            options: []
        };
        this.handleSearch = this._handleSearch.bind(this);
        this.onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        this.geoService = new GeoService();
    }

    _handleSearch(query) {
        const that = this;
        if(query.length) {
            this.setState(prevState => ({
                ...prevState,
                isLoading: true
            }));
            this.geoService.getPredictions(query)
                .then(predictions => {
                    that.setState(prevState => ({
                        ...prevState,
                        isLoading: false,
                        options: predictions
                    }))
                })
                .catch(() => {
                    that.setState(prevState => ({
                        ...prevState,
                        isLoading: false
                    }));
                })

        }
    }

    _onChange(selected) {
        selected = _.isArray(selected) ? selected[0] : selected;
        this.props.onChange(selected);
        this.props.onSubmit();
    }

    render() {
        const {size, initialValue} = this.props;

        return (
            <div className="input-group cta-input">
                <AsyncTypeahead
                    {...this.state}
                    defaultInputValue={initialValue}
                    bsSize={size || 'default'}
                    multiple={false}
                    onChange={this.onChange}
                    onSearch={_.debounce(this.handleSearch, 500)}
                    placeholder="Zoek"
                    filterBy={() => true}
                    selectHintOnEnter={true}
                />

                <span className="input-group-btn">
                    <button className={`btn btn-default btn-${size} cta-submit`} type="submit">
                        ZOEK
                    </button>
                </span>
            </div>
        )
    }
}

export default LocationInput;