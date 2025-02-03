// PostViewPage.jsx
// 글보기 페이지 - 글제목, 글내용, 댓글, 댓글쓰기 ..
import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json"  // src/data.json

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

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();// 글번호

  // 댓글에 관련된 변수
  const [comment, setComment] = useState('');

  // 글번호와 같은 데이터를 post변수에 넣는다.
  const post = data.find((item) => {
    return item.id == postId;
  });

  return (
    <Wrapper>
      <Container>
        <Button 
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput 
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />

        <Button 
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;