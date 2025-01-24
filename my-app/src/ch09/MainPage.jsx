// MainPage.jsx
import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(props) {
  // showWarning = false 담아서 선언하겠습니다.
  const [showWarning, setShowWarning] = useState(false);

  // 버튼이 클릭되었을때 실행할 함수를 정의
  const handleToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning);
    /*
    prevShowWarning => !prevShowWarning;
    ====>
    function (prevShowWarning) {
      return !prevShowWarning;
    }
    */
  };

  return (
    <div>
      <WarningBanner warning={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>
  );
}

export default MainPage;