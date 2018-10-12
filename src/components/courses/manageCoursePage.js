import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseForm from './courseForm';
import { browserHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {
                title: ''
            },
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.course.id !== nextProps.course.id)
            this.setState({ course: Object.assign({}, nextProps.course) });
        //Necessary to populate form when existing course is loaded directly
    }

    updateCourseState(e) {
        const field = e.target.name;
        let course = this.state.course;
        course[field] = e.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => {
                toastr.success("Course Saved!");
                browserHistory.push("/courses");
                this.props.history.push("/courses");
            })
            .catch((error) =>{
                this.setState({ saving: false });
                toastr.error(error);
            });
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                saving={this.state.saving} />
        );
    }
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course.length) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id;
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course =>dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCoursePage));