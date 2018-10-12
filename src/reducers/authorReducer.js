import * as types from '../actions/actionTypes';
import InitialState from '../constants/initialState';

export default function authorReducer(state = InitialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;
    }
}