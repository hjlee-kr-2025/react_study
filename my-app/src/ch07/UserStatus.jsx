// UserStatus.jsx
import React, {useState, useEffect} from "react";

// user의 id상태를 받아서 '온라인' 또는 '오프라인' 상태를 리턴해주는 컴포넌트 입니다.
function UserStatus(props) {
  // useState()로 isOnline변수를 만들고 초기값을 null로 준다.
  // setter함수를 만들때 변수이름앞에 set을 붙이고 camel표기법을 사용해서 많이 씁니다.
  const [isOnline, setIsOnline] = useState(null);

  // 개발자가 정의한 함수 - 로그인(isOnline) 상태변경을 처리하기 위한 함수
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(()=>{
    // 서버에서 사용자 상태변화를 확인하는 함수
    // 첫번째인자는 id, 두번째는 변화정보받았을때 실행하는 함수이름
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return (()=>{
      ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    });
  });

  if (isOnline == null) {
    return '대기 중...';
  }
  return (isOnline ? '온라인' : '오프라인');
}

export default UserStatus;