// LoginControl.jsx
import React, {useState} from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      로그인
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      로그아웃
    </button>
  );
}

function LoginControl(props) {
  // isLoggedIn = false를 담어서 변수를 만들어 줍니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // isLonggedIn에 true값을 넣도록 만드는 함수
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  // isLonggedIn에 false값을 넣도록 만드는 함수
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let button; // 버튼 element를 저장할 변수
  if (isLoggedIn) {
    // 로그인된 상태이면 로그아웃 버튼을 button변수에 저장합니다.
    button = <LogoutButton onClick={handleLogoutClick} />;
  }
  else {
    // 로그아웃 상태이면 로그인 버튼을 button변수에 저장합니다.
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default LoginControl;