import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from "./redux/state";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {observe} from "web-vitals/dist/modules/lib/observe";

function rerenderApp (store) {
    /*debugger;*/
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App appState={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderApp(store);

store.observer(rerenderApp);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
