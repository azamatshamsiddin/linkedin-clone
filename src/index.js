import React from 'react';

import {BrowserRouter as Router} from "react-router-dom"
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createRoot} from 'react-dom/client';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <App tab="home"/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

