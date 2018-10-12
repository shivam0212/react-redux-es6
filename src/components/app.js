import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './common/header';
import HomePage from './home/homePage';
import AboutPage from './about/aboutPage';
import CoursesPage from './courses/coursesPage';
import ManageCoursePage from './courses/manageCoursePage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header />
                    {this.props.children}
                    <hr />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/courses" component={CoursesPage} />
                    <Route exact path="/course" component={ManageCoursePage} />
                    <Route path="/course/:id" component={ManageCoursePage} />
                </div>
            </BrowserRouter>
        );
    }
}

App.proptype = {
    children: PropTypes.object.isRequired
};

export default App;
