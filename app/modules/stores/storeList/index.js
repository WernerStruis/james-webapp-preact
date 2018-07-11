import React from 'react';
import PropTypes from 'prop-types';
import {withCookies} from 'react-cookie';
import {connect} from 'react-redux';
import List from './components/List';
import {fetchStores} from "../actions";

const mapStateToProps = (state) => ({
    items: state.store.list.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => {
        const search = ownProps.cookies.get('search');
        dispatch(fetchStores(search))
    }
});

List.propTypes = {
    fetchData: PropTypes.func.isRequired
};

export default withCookies(connect(
    mapStateToProps,
    mapDispatchToProps
)(List));