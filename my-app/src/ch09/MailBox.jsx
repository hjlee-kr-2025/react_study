// MailBox.jsx
import React from "react";

function MailBox(props) {
  const unreadMessages = props.unreadMessages;

  // 인라인 if를 사용한 조건부 랜더링링
  return (
    <div>
      <h1>안녕하세요</h1>
      {
        unreadMessages.length && 
        <h2>
          현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
        </h2>
      }
    </div>
  );
}