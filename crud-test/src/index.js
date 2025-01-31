import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot() : VirtualDOM(가상돔)을 만드는 함수수
const root = ReactDOM.createRoot(document.getElementById('root'));
// 가상DOM에 구성되어 있는 내용을 화면에 랜더링해준다.
// 가상돔 -> 브라우저돔으로 교체
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
