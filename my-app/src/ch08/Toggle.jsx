// Toggle.jsx
import React, {useState} from "react";

// toggle버튼을 만드는 컴포넌트
function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 이벤트함수 만드는 방법1 - 함수안에 함수로 정의
  function handleClick() {
    setIsToggleOn((isToggleOn)=> !isToggleOn);
  }

  /* 방법2 : ()=> 또는 function() 을 사용
  const handleClick = () => {
    setIsToggleOn((isToggleOn)=> !isToggleOn);
  }
  */

  return (
    <button onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

/*
setIsToggleOn((isToggleOn)=> !isToggleOn);
====>
setIsToggleOn( function(isToggleOn) {
  return !isToggleOn;
})
*/
export default Toggle;