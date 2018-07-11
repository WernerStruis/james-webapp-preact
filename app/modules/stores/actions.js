import * as t from './actionTypes';
import axios from 'axios';
import config from 'config';

export function fetchStores(search) {
    return (dispatch) => {
        dispatch({type: t.STORE_REQUEST});
        return axios.post('/api/restaurants', search)
            .then(({status, data}) => {
                dispatch({
                    type: t.STORE_RECEIVE,
                    items: data.data,
                    targetLocation: data.targetLocation
                })
            })
            .catch(error => {
                dispatch({type: t.STORE_RECEIVE_ERROR, error});
            })
    }
}

export function fetchStoreDetails(storeRef) {
    return dispatch => {
        dispatch({type: t.STORE_DETAILS_REQUEST});
        return axios.get(`${config.proxy.apiBaseUrl}/restaurants/${storeRef}`)
            .then(({status, data}) => {
                console.log(status);
                console.log(data);
                console.log("BINGO")
            })
            .catch(e => {
                console.log(e);
                console.log("BOO")
            })
    }
}