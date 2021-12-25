import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state from './store/state';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App postData={state.postData} dialogItems={state.dialogItems} messages={state.messages}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
