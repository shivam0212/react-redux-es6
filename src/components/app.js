import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './home/homePage';
import AboutPage from './about/aboutPage';
import CoursesPage from './courses/coursesPage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <p>Header Here...</p>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/courses" component={CoursesPage} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;