import React from 'react';
import PropTypes from 'prop-types';
import {withCookies} from 'react-cookie';
import {connect} from 'react-redux';
import ListHeader from './components/ListHeader';

const mapStateToProps = (state) => ({
    targetLocation: state.store.list.targetLocation || {}
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

ListHeader.propTypes = {
};

export default withCookies(connect(
    mapStateToProps,
    mapDispatchToProps
)(ListHeader));