// LandingPage.jsx
import React,{useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  // 로그인 여부를 확인하는 isLoggedIn 변수를 만들고
  // 초기값은 false를 줍니다. (로그아웃상태)
  // 변수이름이든 setter함수이름이든 개발자가 설정하는 이름입니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // isLoggedIn값을 true세팅하는 함수를 만들어 onClickLogin 변수에 연결
  const onClickLogin = () => {
    setIsLoggedIn(true);
  }

  // isLoggedfIn값을 false로 세팅하는 함수를 만들어 onClickLogout 변수에 연결
  const onClickLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Toolbar 
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{padding: 16}}>즐거운 리액트 공부</div>
    </div>
  );
}

export default LandingPage;