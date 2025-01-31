// FancyBorder.jsx
import React from "react";

function FancyBorder(props) {
  // 클래스이름을 2가지로 설정
  // FancyBorder ,  FancyBorder-설정색상
  console.log('color: ', props.color);
  // <FancyBorder>이곳에 적힌것이 props.children</FancyBorder>
  return (
    <div className={'FancyBorder FancyBorder-' + props.color} style={{
      border: '1px solid ' + props.color,
    }}>
      {props.children}
    </div>
  );
}

export default FancyBorder;