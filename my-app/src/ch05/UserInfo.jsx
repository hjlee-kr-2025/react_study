import React from "react";
import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div className='user-info'>
      {/* 이부분을 Avatar 컴포넌트로 만들었습니다. */}
      {/*<img className='avatar' src={props.author.avatarUrl} alt={props.author.name} />*/}
      <Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  );
}

export default UserInfo;