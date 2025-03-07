import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './ch03/Library';
import Clock from './ch04/Clock';
import CommentList from './ch05/CommentList';
import NotificationList from './ch06/NotificationList';
import Counter from './ch07/Counter';
import TextInputWithFocusButton from './ch07/TextInputWithFocusButton';
import Accommodate from './ch07/Accommodate';
import Toggle1 from './ch08/Toggle1';
import Toggle from './ch08/Toggle';
import ConfirmButton from './ch08/ConfirmButton';
import Football from './ch08/Football';
import LoginControl from './ch09/LoginControl';
//import MainPage from './ch09/MainPage';
import Calculation from './ch07/Calculation';
import LandingPage from './ch09/LandingPage';
import NumberList from './ch10/NumberList';
import AttendanceBook from './ch10/AttendanceBook';
import NameForm from './ch11/NameForm';
import RequestForm from './ch11/RequestForm';
import FruitSelect from './ch11/FruitSelect';
import Resevation from './ch11/Reservation';
import SignUp from './ch11/SignUp';
import Calculator from './ch12/Calculator';
import ProfileCard from './ch13/ProfileCard';
import WelcomeDialog from './ch13/WelcomeDialog';
import DarkOrLight from './ch14/DarkOrLight';
import MainPage from './ch15/MainPage';
import Sample from './ch15/Sample';
import Blocks from './ch15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(실행함수, 반복실행시간ms);
root.render(
    <Blocks />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
