// Button.jsx
// React 컴포넌트를 만들기 위한 라이브러리
import React from "react";
// styled 컴포넌트를 만들기 위한 라이브러리
// react에서 스타일을 줄때 CSS문법을 사용하기 위해 필요
import styled from "styled-components";

// 컴포넌트를 만드는 것이기때문에 첫글자를 대문자로사용
// styled.button``; -> 백틱(작은따옴표가 아니다)
// button 태그에 스타일을 적용한 컴포넌트
const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;
// 내부여백
// 글씨크기
// 테두리선 굵기
// 테두리모서리 라운드
// 마우스가 올라왔을때 커서모양

// 사용자컴포넌트(Button) - StyledButton 컴포넌트를 사용
// title과 onClick이벤트시 처리함수를 props로 받는다.
function Button(props) {
  // title -> 버튼이름, onClick -> 클릭시 사용할 함수
  const {title, onClick} = props;

  return (
    <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
  );
}

export default Button;