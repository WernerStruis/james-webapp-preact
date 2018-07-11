import { combineReducers } from 'redux';
import {reducer as FormReducer} from 'redux-form';
import StoreReducer from 'modules/stores/reducer';
// import AppReducer from 'modules/app/reducer';
/* Creates the main reducer with the dynamically injected ones */
export default function createReducer() {
    return combineReducers({
        form: FormReducer,
        store: StoreReducer
        // app: AppReducer
    });
}