// TextInput.jsx
import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => {
    return (props.height && `height: ${props.height}px;`);
  }}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;
// width : 폭
// 두번째는 props로 height속성이 있으면 height 설정 : 높이
// padding: 내부여백
// font-size: 글씨크기
// line-height: 줄간격

function TextInput(props) {
  // height: 높이, value: 텍스트에어리어에 적혀있는 글씨, onChange 실행함수
  const {height, value, onChange} = props;

  return (
    <StyledTextarea height={height} value={value} onChange={onChange}></StyledTextarea>
  );
}

export default TextInput;