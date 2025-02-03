// PostListItem.jsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
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
// width: 가로폭을 32px을 제외하고 지정
// padding: 내부여백
// display: flex -> div내부에 있는 element 배치를 flex로 한다.
// flex-direction: column -> 가로로 배치
// align-items; flex-start -> 왼쪽에서 오른쪽으로
// justify-content: center -> 세로측 가운데 정렬
// border: 1px solid grey; -> 1px두께의 회색 실선으로 테두리를 만든다.
// border-radius -> 모서리를 둥글게
// cursor: pointer -> 마우스커서모양을 손가락모양으로
// background: white -> 배경을 흰색으로
// :hover {background: lightgrey;} -> 마우스가 올라왔을때 밝은회색으로 배경색을 바꿉니다. -> CSS에서는 div:hover {}

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
// foni-size: 글씨크기
// font-weight: 글씨 굵기 (100, 200, ..., 800, 900) | bold | light 

function PostListItem(props) {
  // post: 리스트안에 적힐 내용들을 모아서
  // onClick: 클릭했을때 적용할 함수
  const {post, onClick} = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;