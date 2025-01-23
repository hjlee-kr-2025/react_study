import React from "react";
import UserInfo from "./UserInfo";

function Comment1(props) {
  return (
    <div className='comment'>
      <div className='user-info'>
        {/* 이부분을 Avatar 컴포넌트로 만들었습니다. */}
        {/*<img className='avatar' src={props.author.avatarUrl} alt={props.author.name} />*/}
        <Avatar user={props.author} />
        <div className="user-info-name">
          {props.author.name}
        </div>
      </div>
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment1;