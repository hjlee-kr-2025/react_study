// MainPage.jsx
import React from "react";
import styled from 'styled-components';
// => styled-components 안의 styled를 사용할 수 있도록 import했습니다.

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function MainPage(props) {
  return (
    <Wrapper>
      <Title>
        안녕, 리액트!
      </Title>
    </Wrapper>
  );
}

export default MainPage;