import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './ch03/Library';
import Clock from './ch04/Clock';
import CommentList from './ch05/CommentList';
import NotificationList from './ch06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(실행함수, 반복실행시간ms);

root.render(
    <NotificationList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
