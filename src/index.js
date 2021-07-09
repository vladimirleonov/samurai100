import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from "./redux/redux-store";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

function rerenderApp () {
   /* debugger;*/
    ReactDOM.render(
        <React.StrictMode>
            <Provider value={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderApp();

store.subscribe(() => {
    rerenderApp();
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
