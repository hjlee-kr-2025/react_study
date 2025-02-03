// PostList.jsx -> PostListItem 컴포넌트를 리스트로 만드는 컴포넌트
import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  jestify-content: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
// :not(:last-child) {} - 마지막요소가 아니면 아래여백을 16px지정
// -> 마지막요소는 스타일을 적용하지 않습니다.

function PostList(props) {
  const {posts, onClickItem} = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          ></PostListItem>
        );
      })}
    </Wrapper>
  );
}

export default PostList;