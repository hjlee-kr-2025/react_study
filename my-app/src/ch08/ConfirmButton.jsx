// ConfirmButton.jsx
// 확인하기을 클릭하면 확인됨으로 변경되고 버튼이 눌리지 않도록
// 만들어 줍니다.
import React, {useState} from "react";

function ConfirmButton(props) {
  // 초기값을 false로 하는 isConfirmed 변수를 세팅
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(function(prevIsConfirmed) {
      return !prevIsConfirmed;
    });
  }

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  );
}

export default ConfirmButton;