import React from 'react';
import {withCookies} from 'react-cookie';
import {connect} from 'react-redux';

import CTA from './components/cta';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (address) => {
        ownProps.cookies.set('search', address);
        ownProps.cookies.set('searchString', address.searchInput);
        window.location.assign('/restaurants');
    }
});

export default withCookies(connect(
    mapStateToProps,
    mapDispatchToProps
)(CTA));