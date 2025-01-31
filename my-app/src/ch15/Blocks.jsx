// Blocks.jsx
import React from "react";
import styled from "styled-components";

// styled 객체가 div를 사용해서 스타일을 적용한
// Wrapper 라는 사용자 컴포넌트를 만들어 준것입니다.
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: lightgrey;
`;

/* 자바스크립트 문법
(props) => props.padding
------------------------
(props) => {
  return props.padding;
}
*/
const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  fond-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue',
  },
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem)=>{
        return (
          <Block
            padding={blockItem.padding} backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  );
}

export default Blocks;