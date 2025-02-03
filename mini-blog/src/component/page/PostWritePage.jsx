// PostWritePage.jsx
// 글작성하기 페이지
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

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

function PostWritePage(props) {
  // 글 제목으로 사용할 변수
  const [title, setTitle] = useState('');
  // 글 내용으로 사용할 변수
  const [content, setContent] = useState('');
  // 페이지 이동을 위해 사용할 변수
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <TextInput 
          height={20}
          value={title}
          onChange={(event) => {
            // 키보드로 입력되는 값으로 변수값을 변경시켜준다.
            setTitle(event.target.value);
          }}
        />

        <TextInput 
          height={480}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <Button 
          title="글 작성하기"
          onClick={() => {
            // 글 작성후 버튼을 누르면 홈으로 갑니다.
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}