import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RemoveScrollBar } from "react-remove-scroll-bar";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <RemoveScrollBar /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
