// MainPage.jsx
import React from "react";
import {useNavigate} from "react-router-dom";// 경로이동
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

function MainPage(props) {
  const {} = props; // props로 받아온값을 'props.'없이 사용하도록 설정

  const navigate = useNavigate();

  return (
    <Wrapper>
      
    </Wrapper>
  );
}