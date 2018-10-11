import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }

    handleChange(e) {
        let course = this.state.course;
        course.title = e.target.value;
        this.setState({ course: course });
    }

    submitChange() {
        this.props.actions.createCourse(this.state.course);
        let course = this.state.course;
        course.title = "";
        this.setState({ course: course });
    }

    courseRow(course, index) {
        return <li key={index}>{course.title}</li>;
    }

    render() {
        return (
            <div>
                <h2>Add Course.</h2>
                <input
                    onChange={this.handleChange}
                    value={this.state.course.title}
                    type="text" />
                <input
                    onClick={this.submitChange}
                    value="Add"
                    type="submit" />
                <h3>Courses.</h3>
                <ul>
                    {this.props.courses.map(this.courseRow)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course =>dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);