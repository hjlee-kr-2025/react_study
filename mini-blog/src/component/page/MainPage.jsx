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

  // 페이지 이동을 위한 변수
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button title="글 작성하기"
          onClick={() => {
            // 글 작성하기 버튼을 클릭하면 글작성 페이지로 이동.
            navigate('/post-write');
          }}
        />

        <PostList posts={data}
          onClickItem={(item) => {
            // 리스트중 하나를 클릭했을때 글보기 페이지로 이동.
            navigate(`/post/${item.id}`);
            // ('/post/' + item.id)
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;