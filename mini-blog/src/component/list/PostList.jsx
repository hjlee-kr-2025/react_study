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
  // posts: 작성글데이터 array
  // onClickItem: 함수가 들어있습니다.
  const {posts, onClickItem} = props;

  // posts.map();
  // => posts에서 하나씩 자료를 꺼내서 랜더링합니다.
  // 여기서는 data.json에 6개의 데이터가 있어서 6번의 return이 일어납니다.
  /*
  for(let i = 0, i < posts.length ; i++) {
    post.id -> posts[i].id;
    post -> posts[i]
  }
   */

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