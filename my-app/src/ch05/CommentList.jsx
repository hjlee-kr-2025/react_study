// CommentList.jsx
import React from "react";
import Comment from "./Comment";

// 댓글리스트를 만드는 컴포넌트
function CommentList(props) {
  return (
    <div>
      <Comment name={'이현진'} comment={'제가 만든 첫 컴포넌트 입니다.'}/>
      <Comment name={'유재석'} comment={'런닝맨 사랑해주셔서 감사합니다.'}/>
      <Comment name={'강민경'} comment={'리액트 재미있어요.'}/>
    </div>
  );
}

export default CommentList;