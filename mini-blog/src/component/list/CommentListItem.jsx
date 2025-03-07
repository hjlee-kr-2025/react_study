// CommentListItem.jsx
// 댓글리스트아이템 컴포넌트
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;
// white-space: pre-wrap; -> 공백, 탭, 엔터가 그대로 유지된채로 화면에 표할때 사용합니다.

function CommentListItem(props) {
  const {comment} = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;