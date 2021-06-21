import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state, {addPost, addMessage, changeNewPostValue, onChangeNewMessageValue, observer} from './redux/state';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {observe} from "web-vitals/dist/modules/lib/observe";

function rerenderApp (state) {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App appState={state} addPost={addPost} addMessage={addMessage} changeNewPostValue={changeNewPostValue} changeNewMessageValue={onChangeNewMessageValue}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderApp(state);

observer(rerenderApp);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
