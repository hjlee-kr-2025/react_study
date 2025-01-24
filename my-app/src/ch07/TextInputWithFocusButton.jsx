// TextInputWithFocusButton.jsx
import React, {useRef} from "react";

// useRef -> 특정 컴포넌트에 접근할수 있는 객체를 만들어줍니다.
// 생성될때 한번만 만들어지도록 하기 위해 사용

// 버튼을 클릭하면 입력창에 키보드입력이 되도록 하는 컴포넌트(focus)
function TextInputWithFocusButton(props) {
  // 객체를 생성하고 초기값을 null로 줍니다.
  const inputElem = useRef(null);

  const onButtonClick = ()=>{
    inputElem.current.focus();
  };

  // 리턴안에 jsx코드로 사용할 때 최상단은 하나의 블럭을 가집니다.
  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;