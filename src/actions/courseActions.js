import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccessful(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSES_SUCCESS, course };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSES_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccessful(courses));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCourse(course) {
    {/* <<================================================================>>
    getState is added here if you are wanting to access the redux store
    and get a particular feature of state w/o passing it in the props.
    <<================================================================>> */}
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw (error);
        });
    };
}