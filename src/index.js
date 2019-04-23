import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import usersReducer from './reducers/usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'; 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ usersReducer: usersReducer }) //TO DO: move this

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) //TO DO: move this

console.log(`%c INITIAL REDUX STORE`, 'color: purple', store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
