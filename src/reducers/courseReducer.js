import * as types from '../actions/actionTypes';
import InitialState from '../constants/initialState';

export default function courseReducer(state = InitialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSES_SUCCESS:
            return [...state,
            Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSES_SUCCESS:
            {/* <<============================================>>
            Select all the courses other than the one with 
            matching id and add the updated course.
            <<============================================>> */}
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}