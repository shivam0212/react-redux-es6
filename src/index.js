import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
);

render(routes, document.getElementById('app'));